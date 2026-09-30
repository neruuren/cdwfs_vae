# BLOC 1 : Concevoir et réaliser des interfaces utilisateurs adaptatives et des expériences interactives front-end

> Sources recoupées le 2026-09-30 : CV en ligne (https://cv.gregory-day.fr/api/resume.json) et dépôt Lexikos (`neruuren/lexikos`).
> Les mentions `[À CONFIRMER]` signalent une affirmation que ni le CV ni les dépôts ne confirment. Elles sont listées en fin de fichier.

## Synthèse du bloc

**Connaissances, compétences et aptitudes mobilisées :**

- HTML5 sémantique, accessibilité (attributs ARIA, `<dialog>` natif, textes pour lecteurs d'écran), SEO (Open Graph, sitemap, prérendu, données structurées)
- CSS3, Sass, Tailwind CSS, responsive mobile-first, mode sombre
- JavaScript ES6+ depuis 2011, TypeScript sur le POC headless (environ 9 mois)
- Communication asynchrone : AJAX sous jQuery, axios avec intercepteurs, WebSocket (Socket.IO)
- Frameworks : React 19 (environ 2 ans), Vue.js (environ 1 an) et Nuxt.js (environ 9 mois)
- PWA hors ligne, internationalisation en 4 langues
- Intégration fidèle de maquettes, dans des contextes de dette technique importante

**Comment avez-vous acquis ces compétences ?**

| Période | Source |
|---|---|
| 2005–2007 | BTS au C.U.E.E.P (Villeneuve d'Ascq) : programmation, multimédia et conception web |
| 2011–2015 | A M F : outil intranet développé seul en PHP, JavaScript, HTML et CSS |
| 2018 | M2i Formation, Java Full Stack (4 mois) : front-end JavaScript, HTML et CSS |
| 2018–2024 | Altima/Accenture : sites e-commerce Ba&Sh, Picard, Camaïeu, Trëmma (Emmaüs), Brico Marché, POC headless Vue/Nuxt |
| 2024–2025 | Autoformation : cours Udemy React (hooks, routing, Redux, bases de Next.js), CV en ligne en React |
| 2025–aujourd'hui | Lexikos, projet personnel en production depuis 2025 |

---

## ⚠️ Note sur les preuves et la confidentialité

Chez Altima/Accenture (2018–2024), je travaille sur des projets clients sous clause de confidentialité. À chaque fin de mission, je supprime tout code, document ou capture. Je démontre donc les mêmes compétences sur mes projets personnels, dont le code est public.

| Type de preuve | Disponibilité |
|---|---|
| Lexikos (https://lexikos.eu), dépôt `neruuren/lexikos` | ✅ Site en production, code, historique Git |
| MyWebCV (https://cv.gregory-day.fr), dépôt `neruuren/my_nodejs_webcv` | ✅ Site en production, code |
| Certification SFCC B2C Commerce Developer (01/2020), Trailhead Ranger (2021) | ✅ Certificats |
| Attestations d'anciens collègues | ⚠️ À obtenir |
| Code et captures des projets clients | ❌ NDA |

---

## C1 : HTML5 et pratiques de codage sémantique (SEO, accessibilité W3C)

**Niveau de maîtrise : 4** ⭐⭐⭐⭐

> Réalisé avec aisance, en autonomie totale

**Place occupée :** je conçois et je produis seul. Sur Lexikos, je définis aussi les standards d'accessibilité et de SEO du projet.

### Situation 1 : Lexikos (2025–2026)

**Contexte :** Lexikos est une application web qui aide à mémoriser le vocabulaire anglais rencontré en regardant des films et des séries. Je la conçois et la développe seul. Elle est publique, donc elle doit être accessible et bien référencée.

**Ce que j'ai fait :**
- Je structure les pages avec des balises sémantiques : `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- Je rends l'interface utilisable au clavier et au lecteur d'écran. Le code compte 297 attributs `aria-*`, 97 rôles explicites et 26 textes réservés aux lecteurs d'écran (`sr-only`).
- Je migre les fenêtres modales vers l'élément natif `<dialog>`, qui gère le focus et la touche Échap sans code maison.
- Je mène un audit d'accessibilité complet de l'interface, puis je corrige les écarts relevés (commit `3cbd661`, 2026-09-03).
- Je travaille le référencement : balises Open Graph et Twitter (commit `3aefa63`, 2026-02-14), `robots.txt`, sitemap généré côté serveur, fichier `llms.txt` pour les moteurs d'IA.
- Comme Lexikos est une application React, les robots voient une page vide. Je fais donc produire au build des pages HTML déjà remplies pour le SEO (`frontend/scripts/prerender-seo.mjs`). J'ajoute aussi des données structurées JSON-LD sur les articles (`backend/middleware/articlePrerender.js`).

**Choix et arbitrages :** je choisis un prérendu ciblé plutôt qu'un rendu serveur complet (Next.js). Seules les pages publiques ont besoin d'être indexées. Migrer toute l'application aurait coûté trop cher pour ce gain.

**Résultat :** les pages publiques sont indexables et les parcours principaux sont utilisables au clavier.

**Difficulté et recul :** le `<html lang="en">` reste fixe alors que l'interface existe en 4 langues. C'est une piste d'amélioration identifiée.

### Situation 2 : Altima/Accenture, Ba&Sh (2018–2019) et Picard (2020)

**Contexte :** je suis développeur SFCC (Salesforce Commerce Cloud, plateforme e-commerce en ligne) au sein d'une équipe.

**Ce que j'ai fait :**
- Sur Ba&Sh, j'optimise le SEO : structure des URL et sitemap.
- Sur Picard, je crée des templates pour les pages de contenu.

### Évolution de ma pratique

Chez Accenture, j'applique le SEO sur un périmètre défini par l'équipe. Sur Lexikos, je décide seul de la stratégie : sémantique, audit d'accessibilité, prérendu, données structurées.

### Preuves

| Preuve | Type | Accès |
|---|---|---|
| Lexikos en production, audit Lighthouse réalisable en direct | Site | ✅ https://lexikos.eu |
| Commit `3cbd661` : corrections après l'audit d'accessibilité | Code | ✅ dépôt Lexikos |
| `frontend/scripts/prerender-seo.mjs`, `backend/middleware/articlePrerender.js` | Code | ✅ dépôt Lexikos |
| Administration SEO du CV en ligne | Site | ✅ https://cv.gregory-day.fr |
| Optimisation SEO Ba&Sh | Témoignage | ⚠️ NDA |

---

## C2 : CSS3, UI/UX et design d'interaction

**Niveau de maîtrise : 4** ⭐⭐⭐⭐

> Réalisé avec aisance, en autonomie totale

**Place occupée :** j'exécute et je produis. Sur Lexikos, je conçois aussi l'interface et l'expérience utilisateur.

### Situation 1 : Lexikos (2025–2026)

**Contexte :** Lexikos combine apprentissage et jeu : quiz, répétition espacée, saisons, badges, boutique. L'interface doit rester claire malgré la richesse fonctionnelle.

**Ce que j'ai fait :**
- Je construis l'interface avec Tailwind CSS 3, une approche « utility-first » où le style s'écrit par petites classes réutilisables.
- J'ajoute un mode sombre piloté par classe (`darkMode: 'class'`).
- J'extrais un `critical.css`, qui contient le style minimal nécessaire au premier affichage.
- Je reprends tout le site pour agrandir les zones tactiles, rendre le portail d'administration utilisable sur mobile et adapter la typographie à la taille d'écran (commit `49e03c0`, 2026-08-28).
- Je conçois les retours d'interaction : indicateur hors ligne, bannière d'installation de l'application, états de chargement.

**Choix et arbitrages :** je choisis Tailwind plutôt que Sass. Sur un projet où je suis seul, les classes utilitaires évitent de maintenir une architecture de feuilles de style. Chez Accenture, en équipe, Sass et une convention de nommage étaient plus adaptés.

**Résultat :** l'interface est cohérente entre les pages, en thème clair comme sombre.

### Situation 2 : Altima/Accenture, refontes graphiques (2021–2024)

**Ce que j'ai fait :**
- **Trëmma.co pour Emmaüs (mai–juin 2021) :** refonte graphique complète et intégration fidèle des maquettes.
- **Camaïeu (juillet–septembre 2021) :** refonte visuelle complète du site, dans un contexte de dette technique importante.
- **Brico Marché (octobre–novembre 2021) :** refonte graphique complète du store locator.
- **Picard (2021–2024) :** refonte de l'espace « Mon compte » pour une interface plus intuitive, pages personnalisables avec Page Designer.
- J'utilise Sass pendant environ 3 ans.
- Pour la méthode, j'échange avec les designers sur Figma `[À CONFIRMER]` et j'organise le CSS selon la convention BEM `[À CONFIRMER]`.

### Évolution de ma pratique

Je passe de l'intégration fidèle de maquettes fournies par d'autres, chez Accenture, à la conception complète de l'interface sur Lexikos.

### Preuves

| Preuve | Type | Accès |
|---|---|---|
| Lexikos : Tailwind, mode sombre, responsive | Site et code | ✅ https://lexikos.eu, `frontend/tailwind.config.js` |
| Commit `49e03c0` : reprise responsive et tactile | Code | ✅ dépôt Lexikos |
| Refontes Trëmma, Camaïeu, Brico Marché | Témoignage | ⚠️ NDA |

---

## C3 : Responsive Web Design et frameworks CSS

**Niveau de maîtrise : 4** ⭐⭐⭐⭐

> Réalisé avec aisance, en autonomie totale

**Place occupée :** je conçois et je produis seul.

### Situation 1 : Lexikos (2025–2026)

**Ce que j'ai fait :**
- J'applique une approche mobile-first avec les points de rupture de Tailwind. Le code compte environ 345 classes responsive (`sm:`, `md:`, `lg:`).
- Je crée une navigation spécifique au mobile (`HeaderMobileNav.jsx`, `HeaderMobileOverlay.jsx`).
- Je rends le portail d'administration utilisable sur mobile au même niveau que sur ordinateur (commit `49e03c0`).
- Je rends l'application installable comme une application mobile (PWA), avec un fonctionnement hors ligne.

**Résultat :** l'application fonctionne sur téléphone, tablette et ordinateur. C'est démontrable en direct avec les outils de développement du navigateur.

### Situation 2 : Altima/Accenture et MyWebCV

- Chez Accenture, j'adapte les composants e-commerce à tous les terminaux : panier, tunnel d'achat, fiches produit, store locator Brico Marché.
- J'utilise Bootstrap `[À CONFIRMER]`.
- Sur MyWebCV (2024–2025), je rends le CV en ligne responsive et j'en fournis une version imprimable.

### Preuves

| Preuve | Type | Accès |
|---|---|---|
| Lexikos responsive et installable | Site | ✅ https://lexikos.eu |
| MyWebCV responsive | Site | ✅ https://cv.gregory-day.fr |
| Sites clients | Témoignage | ⚠️ NDA |

---

## C4 : JavaScript, TypeScript et standards ECMAScript

**Niveau de maîtrise : 4** ⭐⭐⭐⭐

> Réalisé avec aisance, en autonomie totale

**Place occupée :** j'exécute et je produis, en autonomie.

### Situation 1 : Lexikos (2025–2026)

**Ce que j'ai fait :**
- J'écris l'application en JavaScript moderne : modules ES, `async/await`, déstructuration.
- Je développe 18 hooks React personnalisés, qui regroupent la logique réutilisable.
- Je programme les interactions : quiz, indices, prononciation, mode conversation avec une IA, répétition espacée.
- Je développe le mode hors ligne. Les réponses aux quiz sont stockées dans le navigateur (IndexedDB) puis envoyées au serveur au retour du réseau (`src/offline/quizOutbox.js`, `syncManager.js`).
- J'assainis le HTML affiché avec DOMPurify, pour empêcher l'injection de scripts.

**Choix et arbitrages :** Lexikos est en JavaScript, pas en TypeScript. J'ai privilégié la vitesse de développement en solo. Avec le recul, la taille actuelle du code (plus de 1 000 commits) justifierait une migration progressive.

### Situation 2 : Altima/Accenture et A M F

- **A M F (2011–2015) :** je développe seul en JavaScript et PHP l'outil intranet de la plateforme d'assistance technique.
- **Ba&Sh (2018–2019) :** je refonds et refactorise en profondeur le processus de checkout, en JavaScript côté serveur SFCC.
- **POC headless (2020–2021) :** je développe en TypeScript pendant environ 9 mois.
- **Picard, Camaïeu :** je développe les interactions avec jQuery (environ 2,7 ans au total).

### Évolution de ma pratique

J'ai commencé par du JavaScript procédural chez A M F, puis jQuery et JavaScript serveur chez Accenture, puis TypeScript sur le POC. Aujourd'hui, j'écris du JavaScript moderne structuré en hooks et en services.

### Preuves

| Preuve | Type | Accès |
|---|---|---|
| Code front Lexikos (`frontend/src/hooks`, `src/offline`) | Code | ✅ dépôt Lexikos |
| Certification SFCC B2C Commerce Developer (01/2020) | Certificat | ✅ https://www.salesforce.com/trailblazer/grday |
| Checkout Ba&Sh, POC TypeScript | Témoignage | ⚠️ NDA |

---

## C5 : Communication asynchrone et requêtes AJAX

**Niveau de maîtrise : 4** ⭐⭐⭐⭐

> Réalisé avec aisance, en autonomie totale

**Place occupée :** je conçois et je produis seul.

### Situation 1 : Lexikos (2025–2026)

**Ce que j'ai fait :**
- Je centralise les appels à l'API dans une instance axios (`frontend/src/utils/api.js`).
- Je gère la session sans interrompre l'utilisateur : le jeton d'accès est renouvelé avant son expiration (`tokenRefresh.js`).
- Je traite les réponses d'erreur de façon explicite : 401 pour une session expirée, 403 pour un accès refusé, 429 pour trop de requêtes.
- J'utilise des WebSockets (Socket.IO) pour les échanges en temps réel du mode conversation.
- Je synchronise en arrière-plan les réponses données hors ligne.

**Résultat :** l'utilisateur ne voit ni rechargement de page ni déconnexion brutale.

### Situation 2 : Altima/Accenture, Picard (2021–2024)

- J'optimise le panier et le mini-panier pour fluidifier le tunnel d'achat.
- J'intègre une API tierce de gestion des créneaux de livraison.
- Je développe des fonctionnalités AJAX sur le checkout Ba&Sh.

### Preuves

| Preuve | Type | Accès |
|---|---|---|
| Appels API visibles dans l'onglet Réseau de Lexikos | Démo | ✅ https://lexikos.eu |
| `frontend/src/utils/api.js`, `tokenRefresh.js` | Code | ✅ dépôt Lexikos |
| Panier et créneaux Picard | Témoignage | ⚠️ NDA |

---

## C6 : Bibliothèques et frameworks modernes (React, Vue.js, etc.)

**Niveau de maîtrise : 4** ⭐⭐⭐⭐

> Réalisé avec aisance, en autonomie totale

**Place occupée :** je choisis le framework et je définis l'architecture front-end de mes projets.

### Situation 1 : Lexikos (2025–2026)

**Ce que j'ai fait :**
- Je construis l'application avec React 19 et Vite.
- Je mets en place le routage avec React Router : pages chargées à la demande (`lazy()`), routes protégées pour les utilisateurs connectés et pour les administrateurs.
- Je gère l'état partagé avec des contextes React (authentification, utilisateur, réglages, modales).
- J'internationalise l'interface avec react-i18next : 4 langues (anglais, français, allemand, espagnol) et 27 fichiers de traduction par langue.
- Je transforme l'application en PWA avec `vite-plugin-pwa`.

**Choix et arbitrages :** j'utilise les contextes React plutôt que Redux. L'état global est limité, et les contextes suffisent sans ajouter de dépendance.

### Situation 2 : Altima/Accenture et autres projets personnels

- **POC SFCC headless (2020–2021, environ 9 mois) :** je développe un site e-commerce avec Vue.js et Nuxt.js, séparé du back-end, avec GraphQL et TypeScript.
- **Trëmma (2021) :** j'optimise des composants Vue.js.
- **Brico Marché (2021) :** je développe des composants Vue.js.
- **MyWebCV (2024–2025) :** premier projet React, avec une interface d'administration sur mesure.

### Évolution de ma pratique

J'ai découvert les frameworks en équipe avec Vue.js et Nuxt.js. Ensuite, je me suis formé seul à React (cours Udemy), puis je l'ai appliqué sur MyWebCV et sur Lexikos, jusqu'à une PWA multilingue en production.

### Preuves

| Preuve | Type | Accès |
|---|---|---|
| Lexikos | Site et code | ✅ https://lexikos.eu, dépôt Lexikos |
| MyWebCV | Site et code | ✅ https://cv.gregory-day.fr |
| POC headless, Trëmma, Brico Marché | Témoignage | ⚠️ NDA |

---

## 📋 Actions à mener

| Action | Compétence | Priorité |
|---|---|---|
| Lancer un audit Lighthouse de Lexikos et garder les scores en annexe | C1, C3 | Haute |
| Rendre l'attribut `lang` dynamique selon la langue choisie | C1 | Moyenne |
| Ajouter des tests front sur Lexikos (Vitest) | C6 | Moyenne |
| Obtenir 1 ou 2 attestations d'anciens collègues d'Accenture | C1–C5 | Haute |

## ❓ Éléments à confirmer

| Élément | Question |
|---|---|
| Figma | As-tu travaillé directement dans Figma avec les designers chez Accenture ? |
| BEM | L'équipe appliquait-elle la convention BEM au CSS ? |
| Bootstrap | Sur quel projet as-tu utilisé Bootstrap ? |
