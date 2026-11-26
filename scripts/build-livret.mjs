// Assemble livret2/*.md (ordre alphabétique) en un seul PDF imprimable.
// Usage : npm run livret         →   build/livret2.pdf
//         npm run livret:watch   →   regénère le PDF à chaque modification de livret2/
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath, pathToFileURL } from 'node:url';
import MarkdownIt from 'markdown-it';
import anchor from 'markdown-it-anchor';
import puppeteer from 'puppeteer-core';
import { COMPETENCES_FILE, TODO_RE, competenceTags } from './livret-lib.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = path.join(root, 'livret2');
const outDir = path.join(root, 'build');
const nodeModules = path.join(root, 'node_modules');
const fileUrl = (p) => pathToFileURL(p).href;
const watchMode = process.argv.includes('--watch');
// Par défaut, les commentaires « à rédiger » apparaissent dans le PDF. --final les masque.
const finalMode = process.argv.includes('--final');

// --- Markdown → HTML -------------------------------------------------------
const createRenderer = () => {
	const usedSlugs = new Set();
	const toc = [];

	const slugify = (s) => {
		const base =
			s
				.normalize('NFD')
				.replace(/[̀-ͯ]/g, '')
				.toLowerCase()
				.replace(/[^a-z0-9]+/g, '-')
				.replace(/^-|-$/g, '') || 'section';
		let slug = base;
		for (let i = 2; usedSlugs.has(slug); i++) slug = `${base}-${i}`;
		usedSlugs.add(slug);
		return slug;
	};

	const md = new MarkdownIt({ html: true, linkify: true, typographer: false }).use(anchor, {
		level: [1, 2, 3],
		slugify,
		callback: (token, { slug, title }) => {
			const level = Number(token.tag.slice(1));
			if (level <= 2) toc.push({ level, slug, title });
		},
	});

	const defaultFence = md.renderer.rules.fence;
	md.renderer.rules.fence = (tokens, idx, options, env, self) => {
		const token = tokens[idx];
		if (token.info.trim() === 'mermaid') {
			return `<pre class="mermaid" data-file="${env.file}">${md.utils.escapeHtml(token.content)}</pre>\n`;
		}
		return defaultFence(tokens, idx, options, env, self);
	};

	// Commentaires de travail → encadré visible dans le PDF (sauf en mode final).
	const showTodos = (html, tag) =>
		finalMode
			? html
			: html.replace(
					TODO_RE,
					(_, kind, what) =>
						`<${tag} class="todo"><span class="todo-kind">${md.utils.escapeHtml(kind)}</span>${what.trim() ? ' ' + md.utils.escapeHtml(what.trim()) : ''}</${tag}>`,
				);
	const defaultHtmlBlock = md.renderer.rules.html_block;
	const defaultHtmlInline = md.renderer.rules.html_inline;
	md.renderer.rules.html_block = (tokens, idx, ...rest) =>
		showTodos(defaultHtmlBlock(tokens, idx, ...rest), 'div');
	md.renderer.rules.html_inline = (tokens, idx, ...rest) =>
		showTodos(defaultHtmlInline(tokens, idx, ...rest), 'span');

	return { md, toc };
};

// Parcourt les tokens d'un fichier : titres (avec leur ancre), balises de compétences, images.
const scanTokens = (tokens, file) => {
	const refs = []; // { code, slug, title, file }
	const images = [];
	let h1 = null;
	let current = null;
	for (let i = 0; i < tokens.length; i++) {
		const t = tokens[i];
		if (t.type === 'heading_open') {
			const title = tokens[i + 1].content;
			const slug = t.attrGet('id');
			const level = Number(t.tag.slice(1));
			if (level === 1) h1 = title;
			current = { slug, title: level === 1 || !h1 ? title : `${h1} › ${title}` };
		}
		if (t.type === 'html_block' || t.type === 'html_inline' || t.type === 'inline') {
			const content = t.type === 'inline' ? t.children.filter((c) => c.type === 'html_inline').map((c) => c.content).join('') : t.content;
			for (const code of competenceTags(content)) {
				if (current) refs.push({ code, ...current, file });
				else console.warn(`⚠ ${file} : balise ${code} avant tout titre, ignorée`);
			}
		}
		if (t.type === 'inline') {
			for (const c of t.children) if (c.type === 'image') images.push(c.attrGet('src'));
		}
	}
	return { refs, images };
};

// Remplit la dernière colonne du tableau des compétences avec des liens vers les sections balisées.
const fillCompetenceTable = (md, tokens, refsByCode) => {
	const listed = [];
	for (let i = 0; i < tokens.length; i++) {
		if (tokens[i].type !== 'tr_open') continue;
		const cells = [];
		for (let j = i + 1; tokens[j].type !== 'tr_close'; j++) if (tokens[j].type === 'inline') cells.push(tokens[j]);
		const code = cells[0]?.content.match(/\*\*(C\d+)\*\*/)?.[1];
		if (!code) continue;
		listed.push(code);
		const refs = refsByCode.get(code) ?? [];
		if (!refs.length) continue;
		const cell = cells[cells.length - 1];
		const links = refs.map((r) => `<a class="comp-ref" href="#${r.slug}">${md.utils.escapeHtml(r.title)}</a>`).join('<br>');
		const html = cell.content.trim() ? `${cell.content}<br>${links}` : links;
		cell.content = html;
		cell.children = md.parseInline(html, {})[0].children;
	}
	return listed;
};

const buildHtml = () => {
	const { md, toc } = createRenderer();
	const warnings = [];
	const files = fs
		.readdirSync(srcDir)
		.filter((f) => f.endsWith('.md'))
		.sort();

	const parsed = files.map((file) => {
		const env = { file };
		const tokens = md.parse(fs.readFileSync(path.join(srcDir, file), 'utf8'), env);
		return { file, env, tokens, ...scanTokens(tokens, file) };
	});

	// Images introuvables
	for (const p of parsed) {
		for (const src of p.images) {
			if (/^[a-z]+:/i.test(src)) continue;
			if (!fs.existsSync(path.join(srcDir, decodeURI(src)))) warnings.push(`${p.file} : image introuvable « ${src} »`);
		}
	}

	// Tableau des compétences
	const refsByCode = new Map();
	for (const r of parsed.flatMap((p) => p.refs)) {
		if (!refsByCode.has(r.code)) refsByCode.set(r.code, []);
		refsByCode.get(r.code).push(r);
	}
	const compFile = parsed.find((p) => p.file === COMPETENCES_FILE);
	let missing = [];
	if (compFile) {
		const listed = fillCompetenceTable(md, compFile.tokens, refsByCode);
		missing = listed.filter((c) => !refsByCode.has(c));
		for (const code of refsByCode.keys()) if (!listed.includes(code)) warnings.push(`balise ${code} : compétence absente du tableau de ${COMPETENCES_FILE}`);
	}

	const sections = parsed.map(({ file, env, tokens }) => {
		const id = path.basename(file, '.md');
		const html = md.renderer.render(tokens, md.options, env);
		return `<section class="part" id="part-${id}">\n<span class="part-start" data-part="${id}"></span>\n${html}</section>`;
	});

	const tocHtml =
		'<ul class="toc">\n' +
		toc
			.map(
				(e) =>
					`<li class="toc-${e.level}"><a href="#${e.slug}"><span class="toc-title">${md.utils.escapeHtml(e.title)}</span></a></li>`,
			)
			.join('\n') +
		'\n</ul>';

	let body = sections.join('\n');
	body = body.replace(/(<div class="toc-page">[\s\S]*?)(<\/div>)/, `$1${tocHtml}\n$2`);

	const css = fs.readFileSync(path.join(srcDir, 'style.css'), 'utf8');

	const page = `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<title>Livret 2 – VAE CDWFS</title>
<base href="${fileUrl(srcDir)}/">
<style>${css}</style>
<script>window.PagedConfig = { auto: false };</script>
<script src="${fileUrl(path.join(nodeModules, 'pagedjs/dist/paged.polyfill.js'))}"></script>
<script src="${fileUrl(path.join(nodeModules, 'mermaid/dist/mermaid.min.js'))}"></script>
</head>
<body>
${body}
<script>
	(async () => {
		try {
			window.__livretWarnings = [];
			mermaid.initialize({ startOnLoad: false, theme: 'neutral', fontFamily: 'Noto Sans, DejaVu Sans, Arial, sans-serif' });
			const diagrams = [...document.querySelectorAll('pre.mermaid')];
			for (const [i, el] of diagrams.entries()) {
				const source = el.textContent;
				try {
					await mermaid.run({ nodes: [el] });
				} catch (e) {
					const first = source.trim().split('\\n')[0];
					window.__livretWarnings.push(el.dataset.file + ' : diagramme Mermaid en erreur (« ' + first + ' ») : ' + String(e && e.message || e).split('\\n')[0]);
					el.className = 'mermaid-error';
					el.textContent = 'Diagramme en erreur\\n\\n' + source;
				}
			}
			await Promise.all([...document.images].map((img) => img.complete ? null : new Promise((r) => { img.onload = img.onerror = r; })));
			await window.PagedPolyfill.preview();
			window.__livretReady = true;
		} catch (e) {
			window.__livretError = String(e && e.stack || e);
		}
	})();
</script>
</body>
</html>`;

	return { page, files, warnings, missing };
};

// --- HTML → PDF ------------------------------------------------------------
const findChrome = () => {
	if (process.env.CHROME_PATH) return process.env.CHROME_PATH;
	const cache = path.join(os.homedir(), '.cache/ms-playwright');
	if (fs.existsSync(cache)) {
		const dirs = fs
			.readdirSync(cache)
			.filter((d) => /^chromium-\d+$/.test(d))
			.sort()
			.reverse();
		for (const d of dirs) {
			const p = path.join(cache, d, 'chrome-linux64/chrome');
			if (fs.existsSync(p)) return p;
		}
	}
	for (const p of ['/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser']) {
		if (fs.existsSync(p)) return p;
	}
	throw new Error('Chrome introuvable : définir CHROME_PATH');
};

const build = async (browser) => {
	const started = Date.now();
	const { page, files, warnings, missing } = buildHtml();
	fs.mkdirSync(outDir, { recursive: true });
	const htmlPath = path.join(outDir, 'livret2.html');
	fs.writeFileSync(htmlPath, page);

	const tab = await browser.newPage();
	try {
		tab.on('pageerror', (e) => console.error('[page]', e.message));
		await tab.goto(fileUrl(htmlPath), { waitUntil: 'load' });
		await tab.waitForFunction('window.__livretReady || window.__livretError', { timeout: 120000 });
		const err = await tab.evaluate(() => window.__livretError);
		if (err) throw new Error(err);
		warnings.push(...(await tab.evaluate(() => window.__livretWarnings)));

		const pdfPath = path.join(outDir, 'livret2.pdf');
		await tab.pdf({ path: pdfPath, preferCSSPageSize: true, printBackground: true });

		// Pages par partie : page où commence chaque partie, jusqu'au début de la suivante.
		const { total, starts } = await tab.evaluate(() => {
			const pages = [...document.querySelectorAll('.pagedjs_page')];
			const starts = [...document.querySelectorAll('.part-start')].map((m) => ({
				part: m.dataset.part,
				page: pages.indexOf(m.closest('.pagedjs_page')) + 1,
			}));
			return { total: pages.length, starts };
		});
		console.log('\nPages par partie :');
		starts.forEach((s, i) => {
			const end = i + 1 < starts.length ? starts[i + 1].page - 1 : total;
			const n = Math.max(end - s.page + 1, 0);
			console.log(`  ${s.part.padEnd(22)} p. ${String(s.page).padStart(3)}  ${String(n).padStart(3)} page${n > 1 ? 's' : ''}`);
		});

		if (missing.length) console.log(`\nCompétences sans preuve balisée (${missing.length}) : ${missing.join(', ')}`);
		if (warnings.length) {
			console.log(`\n⚠ ${warnings.length} alerte${warnings.length > 1 ? 's' : ''} :`);
			for (const w of warnings) console.log(`  - ${w}`);
		}
		console.log(`\n${files.length} fichiers, ${total} pages → ${path.relative(root, pdfPath)} (${((Date.now() - started) / 1000).toFixed(1)} s)`);
	} finally {
		await tab.close();
	}
};

const browser = await puppeteer.launch({
	executablePath: findChrome(),
	headless: true,
	args: ['--allow-file-access-from-files', '--no-sandbox'],
});

if (!watchMode) {
	try {
		await build(browser);
	} finally {
		await browser.close();
	}
} else {
	let running = false;
	let pending = false;
	let timer = null;
	const run = async () => {
		if (running) return void (pending = true);
		running = true;
		try {
			await build(browser);
		} catch (e) {
			console.error('✖ Échec :', e.message);
		}
		running = false;
		if (pending) {
			pending = false;
			run();
		}
	};
	await run();
	console.log(`\nSurveillance de ${path.relative(root, srcDir)}/ (Ctrl+C pour arrêter)…`);
	fs.watch(srcDir, { recursive: true }, () => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			console.log('\n— modification détectée —');
			run();
		}, 300);
	});
	process.on('SIGINT', async () => {
		await browser.close();
		process.exit(0);
	});
}
