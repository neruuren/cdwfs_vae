// Fonctions partagées entre build-livret.mjs et livret-todo.mjs.

// Fichier qui contient le tableau des compétences à remplir automatiquement.
export const COMPETENCES_FILE = '50_competences.md';

// Balise de compétences à placer sous un titre : <!-- compétences : C14, C15 -->
// (« competences », « compétence » ou « comp » sont aussi acceptés).
const TAG_RE = /<!--\s*comp(?:[ée]tences?)?\s*:([\s\S]*?)-->/gi;

export const competenceTags = (text) => {
	const codes = [];
	for (const m of text.matchAll(TAG_RE)) {
		for (const c of m[1].matchAll(/\bC(\d{1,2})\b/gi)) codes.push(`C${Number(c[1])}`);
	}
	return codes;
};
