// Fonctions partagées entre build-livret.mjs et livret-todo.mjs.

// Fichier qui contient le tableau des compétences à remplir automatiquement.
export const COMPETENCES_FILE = '50_competences.md';

// Balise de compétences à placer sous un titre : <!-- compétences : C14, C15 -->
// (« competences », « compétence » ou « comp » sont aussi acceptés).
const TAG_RE = /<!--\s*comp(?:[ée]tences?)?\s*:([\s\S]*?)-->/gi;

// Commentaires de travail : <!-- à rédiger : … -->, <!-- à compléter : … -->, <!-- capture à fournir : … -->…
// Groupe 1 : le type (« à rédiger »), groupe 2 : la description.
export const TODO_RE =
	/<!--\s*((?:à|a) (?:rédiger|rediger|compléter|completer|faire|vérifier|verifier|décider|decider)|capture à fournir|todo)\s*:?\s*([\s\S]*?)-->/gi;

export const competenceTags = (text) => {
	const codes = [];
	for (const m of text.matchAll(TAG_RE)) {
		for (const c of m[1].matchAll(/\bC(\d{1,2})\b/gi)) codes.push(`C${Number(c[1])}`);
	}
	return codes;
};
