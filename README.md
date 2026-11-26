# VAE Concepteur Développeur Web Full Stack

Ce dépôt contient mon dossier de **Validation des Acquis de l'Expérience** pour le titre **Concepteur Développeur Web Full Stack** (RNCP 39608, niveau 6).

On y trouve surtout les sources du **livret 2**, rédigées en Markdown et assemblées en PDF par un script.

**➜ [Accéder au livret 2](livret2/)**

## Le livret 2

Le livret 2 décrit mon expérience professionnelle et montre, preuves à l'appui, comment elle couvre les 35 compétences du référentiel, réparties en 4 blocs :

1. Front-end : interfaces adaptatives et interactives (C1 à C6)
2. Back-end : applications, bases de données et API (C7 à C17)
3. Architecture, cloud et industrialisation du développement (C18 à C25)
4. Gestion de projet et amélioration continue (C26 à C35)

Il s'appuie sur trois sources d'expérience :

- **Lexikos** ([lexikos.eu](https://lexikos.eu)), l'application d'apprentissage du vocabulaire que j'ai conçue et développée seul : React, API REST Express/Node.js, MongoDB, déployée sur un VPS, en bêta avec de vrais utilisateurs. C'est le fil rouge du livret.
- **Altima / Accenture** (2018-2024) : projets e-commerce Salesforce Commerce Cloud pour des clients. Ils sont soumis à une clause de confidentialité, donc pas de code ni de captures.
- **Autres projets** pour les compétences que Lexikos ne couvre pas.

### Plan

| Fichier | Partie |
|---|---|
| [00_page_de_garde.md](livret2/00_page_de_garde.md) | Page de garde |
| [01_sommaire.md](livret2/01_sommaire.md) | Sommaire (généré automatiquement) |
| [10_introduction.md](livret2/10_introduction.md) | Introduction : parcours et organisation du livret |
| [20_lexikos.md](livret2/20_lexikos.md) | Lexikos : historique, fonctionnalités, backend, frontend |
| [30_accenture.md](livret2/30_accenture.md) | Altima / Accenture : projets e-commerce SFCC |
| [40_autres_projets.md](livret2/40_autres_projets.md) | Autres projets |
| [50_competences.md](livret2/50_competences.md) | Correspondance entre les 35 compétences et les parties du livret |
| [90_sources.md](livret2/90_sources.md) | Sources |

Les images sont dans [livret2/images/](livret2/images/) et la mise en page dans [livret2/style.css](livret2/style.css).

### Générer le PDF

```bash
npm install            # une seule fois
npm run livret         # → build/livret2.pdf
npm run livret:watch   # regénère le PDF à chaque modification dans livret2/
npm run livret:todo    # état d'avancement : ce qui reste à rédiger
```

Le script [scripts/build-livret.mjs](scripts/build-livret.mjs) :

- assemble les fichiers `.md` de `livret2/` dans l'ordre de leur préfixe numérique (`00_`, `10_`, `20_`…) ;
- génère le sommaire à partir des titres `#` et `##` ;
- convertit les blocs ` ```mermaid ` en diagrammes (frise chronologique, schéma d'architecture) ;
- remplit le tableau des compétences (voir ci-dessous) ;
- pagine le document avec Paged.js et l'imprime en PDF avec Chrome ;
- affiche à la fin le nombre de pages par partie, les compétences sans preuve et les alertes (image introuvable, diagramme Mermaid en erreur). Un diagramme en erreur ne bloque pas le PDF : il y apparaît dans un cadre rouge.

`npm run livret:todo` ([scripts/livret-todo.mjs](scripts/livret-todo.mjs)) liste, partie par partie, les commentaires `<!-- à rédiger … -->`, `<!-- à compléter … -->` et `<!-- capture à fournir … -->`, les sections encore vides, le nombre de mots et les compétences qui n'ont encore aucune preuve.

### Relier une section à des compétences

Sous le titre d'une section qui démontre une ou plusieurs compétences, ajouter une balise :

```markdown
## L'authentification
<!-- compétences : C15 -->
```

Au build, la colonne « Où elle est démontrée » de [50_competences.md](livret2/50_competences.md) est remplie automatiquement avec un lien vers chaque section balisée et son numéro de page. La balise s'applique au titre qui la précède, quel que soit son niveau. Si la cellule contient déjà du texte écrit à la main, les liens sont ajoutés à la suite.

Chrome est détecté automatiquement. Sinon, définir la variable `CHROME_PATH`.

Pour ajouter une partie, il suffit de créer un fichier `.md` dans `livret2/` avec le bon préfixe.
