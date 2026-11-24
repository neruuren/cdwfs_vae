// Assemble livret2/*.md (ordre alphabétique) en un seul PDF imprimable.
// Usage : npm run livret   →   build/livret2.pdf
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath, pathToFileURL } from 'node:url';
import MarkdownIt from 'markdown-it';
import anchor from 'markdown-it-anchor';
import puppeteer from 'puppeteer-core';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = path.join(root, 'livret2');
const outDir = path.join(root, 'build');
const nodeModules = path.join(root, 'node_modules');

// --- Markdown → HTML -------------------------------------------------------
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
		return `<pre class="mermaid">${md.utils.escapeHtml(token.content)}</pre>\n`;
	}
	return defaultFence(tokens, idx, options, env, self);
};

const files = fs
	.readdirSync(srcDir)
	.filter((f) => f.endsWith('.md'))
	.sort();

const sections = files.map((file) => {
	const html = md.render(fs.readFileSync(path.join(srcDir, file), 'utf8'));
	const id = path.basename(file, '.md');
	return `<section class="part" id="part-${id}">\n${html}</section>`;
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
const fileUrl = (p) => pathToFileURL(p).href;

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
			mermaid.initialize({ startOnLoad: false, theme: 'neutral', fontFamily: 'Noto Sans, DejaVu Sans, Arial, sans-serif' });
			await mermaid.run({ querySelector: 'pre.mermaid' });
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

fs.mkdirSync(outDir, { recursive: true });
const htmlPath = path.join(outDir, 'livret2.html');
fs.writeFileSync(htmlPath, page);

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

const browser = await puppeteer.launch({
	executablePath: findChrome(),
	headless: true,
	args: ['--allow-file-access-from-files', '--no-sandbox'],
});
try {
	const tab = await browser.newPage();
	tab.on('pageerror', (e) => console.error('[page]', e.message));
	await tab.goto(fileUrl(htmlPath), { waitUntil: 'load' });
	await tab.waitForFunction('window.__livretReady || window.__livretError', { timeout: 120000 });
	const err = await tab.evaluate(() => window.__livretError);
	if (err) throw new Error(err);
	const pdfPath = path.join(outDir, 'livret2.pdf');
	await tab.pdf({ path: pdfPath, preferCSSPageSize: true, printBackground: true });
	const pages = await tab.evaluate(() => document.querySelectorAll('.pagedjs_page').length);
	console.log(`${files.length} fichiers, ${pages} pages → ${path.relative(root, pdfPath)}`);
} finally {
	await browser.close();
}
