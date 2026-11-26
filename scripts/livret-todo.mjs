// État d'avancement du livret 2 : ce qui reste à rédiger, sections vides,
// compétences sans preuve balisée, nombre de mots par partie.
// Usage : npm run livret:todo
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { COMPETENCES_FILE, competenceTags } from './livret-lib.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = path.join(root, 'livret2');
const TODO_RE = /<!--\s*((?:à|a) (?:rédiger|rediger|compléter|completer|faire|vérifier|verifier)|capture à fournir|todo)\s*:?\s*([\s\S]*?)-->/gi;

const files = fs
	.readdirSync(srcDir)
	.filter((f) => f.endsWith('.md'))
	.sort();

const lineOf = (text, index) => text.slice(0, index).split('\n').length;

// Nombre de mots du texte réellement imprimé (sans commentaires, balises HTML, blocs de code).
const countWords = (text) =>
	text
		.replace(/<!--[\s\S]*?-->/g, ' ')
		.replace(/```[\s\S]*?```/g, ' ')
		.replace(/<[^>]+>/g, ' ')
		.replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
		.replace(/[#*|_`>-]/g, ' ')
		.split(/\s+/)
		.filter((w) => /[\p{L}\p{N}]/u.test(w)).length;

// Titres suivis directement d'un titre de même niveau ou supérieur, ou de la fin du fichier.
const emptySections = (text) => {
	const lines = text.replace(/<!--[\s\S]*?-->/g, (c) => c.replace(/[^\n]/g, ' ')).split('\n');
	const result = [];
	let open = null;
	let inFence = false;
	const close = () => {
		if (open && !open.hasContent) result.push(open);
	};
	lines.forEach((line, i) => {
		if (line.trim().startsWith('```')) inFence = !inFence;
		const h = !inFence && line.match(/^(#{1,4})\s+(.*)/);
		if (h) {
			const level = h[1].length;
			if (open && level <= open.level) close();
			else if (open) open.hasContent = true; // un sous-titre compte comme contenu
			open = { level, title: h[2].trim(), line: i + 1, hasContent: false };
		} else if (open && line.trim()) open.hasContent = true;
	});
	close();
	return result;
};

let totalTodos = 0;
let totalWords = 0;
const tagged = new Set();
let listed = [];

console.log('Avancement du livret 2\n');
for (const file of files) {
	const text = fs.readFileSync(path.join(srcDir, file), 'utf8');
	const todos = [...text.matchAll(TODO_RE)].map((m) => ({ line: lineOf(text, m.index), what: `${m[1]} ${m[2]}`.replace(/\s+/g, ' ').trim() }));
	const empty = emptySections(text);
	const words = countWords(text);
	competenceTags(text).forEach((c) => tagged.add(c));
	if (file === COMPETENCES_FILE) listed = [...text.matchAll(/\*\*(C\d+)\*\*/g)].map((m) => m[1]);
	totalTodos += todos.length;
	totalWords += words;

	const status = todos.length || empty.length ? `${todos.length} à faire, ${empty.length} section(s) vide(s)` : 'ok';
	console.log(`${file.padEnd(24)} ${String(words).padStart(6)} mots   ${status}`);
	for (const t of todos) console.log(`    l.${String(t.line).padEnd(4)} ${t.what}`);
	for (const s of empty) console.log(`    l.${String(s.line).padEnd(4)} section vide : ${'#'.repeat(s.level)} ${s.title}`);
}

const missing = listed.filter((c) => !tagged.has(c));
console.log(`\nTotal : ${totalWords} mots, ${totalTodos} élément(s) à rédiger.`);
console.log(`Compétences balisées : ${listed.length - missing.length}/${listed.length}`);
if (missing.length) console.log(`Sans preuve balisée : ${missing.join(', ')}`);
