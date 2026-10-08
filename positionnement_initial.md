# Positionnement initial — VAE Concepteur Développeur Web Full Stack (RNCP 39608)

Rendez-vous tuteur du 2026-10-08. Document rempli par moi, à la main.

## Légende de la colonne « État »

| Lettre | Signification |
|---|---|
| **A** | Je l'ai fait et je sais l'expliquer sans notes |
| **B** | Je l'ai fait, mais je dois revoir comment |
| **C** | Fait surtout avec l'IA, je ne le maîtrise pas encore assez pour l'expliquer |
| **D** | Jamais fait, ou de très loin |

« Où » : Lexikos (L), Accenture/Altima (A), A M F (M), formation (F), autre.

## Bloc 1 — Front-end

| Code | Compétence (intitulé abrégé) | État | Où | Remarques |
|---|---|---|---|---|
| C1 | Structurer des interfaces en HTML5 (sémantique, accessibilité) | B | L, A | Accessibilité : attribut `alt`, `aria-hidden` pour masquer aux lecteurs d'écran. SEO : React génère tout côté navigateur, le robot lit un HTML vide → pré-rendu au build. Ba&Sh : script de génération du sitemap.xml, job toutes les 24 h. |
| C2 | Créer des interfaces en CSS3 (UI, ergonomie) | A | L, A | Lexikos : thème sombre uniquement, pas de thème clair. critical.css : règles critiques envoyées d'abord pour un premier affichage stable. Accenture : refontes à partir de maquettes Figma, BEM selon les projets, adaptation au legacy. CSS écrit en Sass. Camaïeu : refonte graphique en front, avec beaucoup de dette technique. Trëmma et Brico Marché : positionné en pur front-end. |
| C3 | Interfaces adaptatives (responsive, frameworks CSS) | A | L, A | Lexikos pensé mobile-first. Tailwind : les règles s'écrivent dans la balise, adapté à la logique composant de React. Accenture : Sass, et une salle dédiée aux tests sur mobile avec différents appareils. |
| C4 | Interactions client en JavaScript / TypeScript | B | L, A | Lexikos en JavaScript. TypeScript sur un projet interne Accenture : POC pour tester les fonctionnalités headless de SFCC, avec Vue.js / Nuxt.js et GraphQL ; j'y étais développeur. Camaïeu : jQuery. |
| C5 | Communication asynchrone client-serveur (AJAX, fetch) | B | L, A | Requêtes via axios vers l'API. Jeton expiré : à la requête suivante, demande de renouvellement. Chat de Lexikos (pour transmettre des infos aux testeurs) : WebSockets pour la mise à jour en temps réel. Picard (full stack) : appel à l'API de créneaux de livraison et retour des données retravaillés, suite à beaucoup de changements dans la gestion des créneaux ; travail surtout back-end. |
| C6 | Interfaces riches et réactives (framework front) | B | L, A | État partagé via Context React (ex. : données utilisateur). PWA installable sur smartphone. i18n : chaque langue a son fichier JSON, chaque texte une clé appelée dans le code, affichée selon la langue maternelle de l'utilisateur ; je fais traduire par une IA dans les 4 langues. POC headless SFCC : Vue.js / Nuxt.js et GraphQL. MyWebCV : premier projet React, mais pas mon premier framework front à composants. Picard : un peu d'intégration pour le redesign du panier et du mini-panier. |

## Bloc 2 — Back-end

| Code | Compétence (intitulé abrégé) | État | Où | Remarques |
|---|---|---|---|---|
| C7 | Configurer l'environnement de développement (IDE, terminal) | A | L | `npm run startDev` lance l'environnement local. Au commit, hooks Husky : linter + Prettier, puis tests ; le commit ne passe que si tout est vert. |
| C8 | Back-end en POO, design patterns, frameworks | B | L, A | Requête : route → contrôleur → service → base. Couches pour mettre de l'ordre, placer les règles métier au bon endroit, garder une architecture cohérente. Ba&Sh : ajout de nouvelles méthodes d'expédition et de paiement. |
| C9 | Optimiser et sécuriser les serveurs web | B | L | Nginx reçoit les requêtes extérieures, sécurise la réponse et restreint l'accès aux routes définies. Node.js = runtime de l'application. PM2 = gestionnaire de processus ; en cluster, utilise tous les cœurs du CPU. |
| C10 | Bases de données relationnelles (MySQL, PostgreSQL) | B | M | Dernier SQL écrit chez A M F, avec un schéma conçu moi-même : tables, tables intermédiaires, clés étrangères. Depuis, une couche préconstruite gérait l'accès à la base, il n'y avait plus qu'à appeler les fonctions CRUD. |
| C11 | Bases de données NoSQL | B | L | Collection `User` : index qui repère les inscriptions jamais abouties, pour supprimer le compte quand l'OTP expire. `LemmaWord` : enregistrement unique selon texte, partie grammaticale et langue. Redis gère l'état fractionné des clusters. |
| C12 | Choisir entre relationnel et NoSQL | B | L | MongoDB par habitude : je connaissais déjà et je voulais un système fiable, modulaire et performant. |
| C13 | Sauvegarde et restauration | B | L | Dump complet de la base 2 fois par jour, exporté sur Backblaze. Jamais restauré : je dois me réserver un temps pour le faire. |
| C14 | Concevoir des API (REST, GraphQL…) | A | L, A | Versionner garantit la rétrocompatibilité : une V2 laisse la V1 utilisable par les applis qui en dépendent. PUT = remplacement complet, PATCH = partiel. Erreurs : codes 4xx. POC headless SFCC : API GraphQL conçue pour le POC, j'ai défini le schéma. |
| C15 | Sécuriser les API (authentification, autorisation) | B | L | Saisie de l'e-mail (nouveau ou ancien, même parcours), code OTP reçu par mail, puis JWT de 15 min dans le localStorage. Un jeton longue durée (un mois) comparé à une collection dédiée évite la déconnexion. Admin : jeton différent, OTP plus complexe (6 caractères). |
| C16 | Tester les API (unitaires, intégration, charge) | C | L | Unitaires : chaque fonction remplit son rôle. Tests de bout en bout et k6 : faits uniquement par l'IA, jamais par moi. k6 : environ 1000 utilisateurs simultanés possibles sur le VPS actuel. |
| C17 | Documenter l'API (Swagger / OpenAPI…) | D | L | L'API n'est pas documentée. À faire avec Swagger. |

## Bloc 3 — Architecture, cloud, DevOps

| Code | Compétence (intitulé abrégé) | État | Où | Remarques |
|---|---|---|---|---|
| C18 | Évaluer les besoins et intégrer des solutions cloud | B | L, A | Choix du VPS OVH plutôt qu'un service géré : je ne sais pas le justifier. Mon expérience SFCC (et la certification) me semble plus cohérente pour le cloud. |
| C19 | Analyser l'architecture (monolithe, microservices…) | B | L | Front et back séparés, même dans un monorepo, pour pouvoir brancher un autre front plus tard, éventuellement une app. |
| C20 | Administrer et optimiser les plateformes cloud | B | A, L | SFCC : tout ce que la certification développeur m'a appris, gestion des settings, des utilisateurs, de tout ce qui se paramètre dans le Business Manager et se réutilise dans le code. Lexikos : je consulte les logs régulièrement ; je devrais mettre en place des alertes. |
| C21 | Gestion de versions (Git) | A | L | Une branche tirée de main par session de travail, un commit par fonctionnalité, puis une PR fusionnée dans main. |
| C22 | Procédures de fusion, résolution de conflits | B | A | Accenture : on résolvait les conflits avec le développeur concerné, en décortiquant ensemble le merge. Le découpage des tâches limitait les conflits. |
| C23 | Conteneurisation (Docker…) | B | L | En production, l'application tourne directement sur le serveur ; la base tourne dans Docker. |
| C24 | Orchestration de conteneurs, pipelines CI/CD | D | | Jamais utilisé Kubernetes ni d'outil d'orchestration. |
| C25 | Automatiser le déploiement (DevOps, infra as code) | B | L | GitHub Actions déploie en production avec les variables d'environnement : envoi du code, installation des dépendances, build. Peut aussi lancer les tests si c'est configuré. |

## Bloc 4 — Gestion de projet et qualité

| Code | Compétence (intitulé abrégé) | État | Où | Remarques |
|---|---|---|---|---|
| C26 | Analyser les besoins des utilisateurs | D | L | Lexikos est né d'un jeu sur bouts de papier, utilisé enfant puis en voyage. Les applis comme Duolingo ne me satisfaisaient pas : je voulais que l'utilisateur soit maître des mots qu'il apprend. Je n'ai pas interrogé d'utilisateurs. Des utilisateurs ont signalé des problèmes via l'outil de feedback. |
| C27 | Étudier la faisabilité du projet | B | L, A | Lexikos : je savais que ça prendrait beaucoup de temps, j'ai estimé les risques faibles. Accenture : on me demandait mon avis sur les chiffrages. |
| C28 | Cahier des charges, note de cadrage | B | A | Pas de note de cadrage écrite moi-même ; j'ai relu celles de mon LT et donné mon avis. |
| C29 | Planifier et conduire le projet (V, agile) | B | A | Scrum chez Accenture avec tous les rituels. Rôle de développeur, avis donné à mon tour ; timekeeper une ou deux fois. |
| C30 | Coordonner les équipes, outils collaboratifs | B | A | J'accompagnais chaque nouveau développeur pour lui expliquer les spécificités du projet. |
| C31 | Suivre les indicateurs de performance et le budget | B | L | Section analytics dans l'admin de Lexikos : utilisation des fonctionnalités et coûts, notamment des IA appelées par API. Coût = nombre de tokens × prix par token (tarif Mistral / OpenAI à un instant T). |
| C32 | Évaluer l'avancement (revues, rapports) | B | A | Revues de sprint et rétrospectives Scrum, en tant que participant. |
| C33 | Revues de code, outils d'analyse | A | A, L | Revues de code très fréquentes chez Accenture, un rituel que l'équipe ne manquait pas, plus des sessions de pair programming. Pas de SonarQube. |
| C34 | Tests automatisés | B | A, L | Je me suis efforcé de pratiquer le TDD quand le temps alloué par le client le permettait. Sur Lexikos, tests écrits par l'IA. |
| C35 | Documentation technique | B | L | JSDoc : signature et but des fonctions. Documentation écrite par l'IA, relue et corrigée par moi. |

## Points à revoir

Identifiés pendant l'entretien de préparation du 2026-10-07, en comparant mes réponses au code de Lexikos.

**C1 — HTML, accessibilité, SEO**
- [ ] Ce qui a été fait pour l'accessibilité sur Lexikos : modales en `<dialog>` natif, textes `sr-only`, audit d'accessibilité (commit `3cbd661`).
- [ ] Comment marche le pré-rendu SEO : `frontend/scripts/prerender-seo.mjs`, à quel moment il tourne, ce qu'il produit.

**C2 — CSS**
- [ ] Comment le `critical.css` est généré dans Lexikos.
- [ ] Note : Tailwind est configuré en `darkMode: 'class'`, mais `index.html` force `class="dark"` en permanence. Il n'y a pas de thème clair (l'ébauche IA se trompait).

**C3 — Responsive**
- [ ] Les préfixes Tailwind `sm:`, `md:`, `lg:` : savoir montrer un exemple de mise en page qui change selon la largeur d'écran.

**C4 — JavaScript / TypeScript**
- [ ] Vocabulaire ES6+ : fonctions fléchées (ES2015), `async/await`, déstructuration, optional chaining `?.`. Attention : `forEach` date d'ES5 (2009) et n'est pas une fonction fléchée.
- [ ] TypeScript : une seule expérience (projet interne Accenture). À consolider.

**C5 — Communication asynchrone**
- [ ] Socket.IO n'est utilisé que par le chat (`ChatBubble.jsx`, processus `lexikos-chat`), pas par le mode conversation (l'ébauche IA se trompait).
- [ ] `fetch` (natif au navigateur) et axios (bibliothèque) sont deux outils différents. Lexikos utilise axios via `src/utils/api.js`.
- [ ] Renouvellement du jeton : intercepteur de réponse axios (401, 403 banni, 429 trop de requêtes), hook `useTokenExpiration` (vérification chaque minute), `ensureFreshToken` (un seul `/auth/refresh` à la fois).

**C6 — React, PWA**
- [ ] Composants Vue.js sur Trëmma et Brico Marché (piste de l'ébauche IA) : à confirmer.
- [ ] POC headless : savoir expliquer ce qu'est le headless (front séparé qui consomme l'API du back-office SFCC) et ce que GraphQL apportait par rapport à REST.
- [ ] DOMPurify (`pages/ArticleDetail.jsx`) : nettoie le HTML des articles avant affichage, pour empêcher l'injection de scripts (faille XSS). Savoir l'expliquer.
- [ ] Les quatre Context de Lexikos : authentification, réglages, modales, définitions. Pas de Redux.
- [ ] PWA : ce n'est pas une webview. Manifeste + service worker (`vite-plugin-pwa`, `autoUpdate`, `navigateFallback` hors ligne sauf `/api/`, `runtimeCaching`). Savoir dire ce qui marche hors ligne.

**C7 — Environnement de développement**
- [ ] `startDev` démarre MongoDB et Redis en conteneurs (`scripts/podman-wrapper.sh`), libère le port 5002, puis lance back et front en parallèle.
- [ ] Le hook de commit ne contrôle que les fichiers modifiés (lint-staged) et ne lance que les tests back-end (`npm run test:backend`).

**C8 — Architecture back-end**
- [ ] Étapes oubliées : les middlewares (authentification, limitation de débit, validation) et les modèles Mongoose.
- [ ] Arguments concrets pour les couches : services testables sans HTTP, réutilisés par contrôleurs, `scheduler.js` et sockets ; une responsabilité par couche (SOLID).
- [ ] POO et design patterns : trouver des exemples dans Lexikos (le libellé de C8 les cite explicitement).

**C9 — Serveur web**
- [ ] Rôle de Nginx (`deploy/nginx.lexikos.eu.conf.example`) : HTTPS Let's Encrypt, TLS 1.2/1.3, reverse proxy `/api/` → port 3000 et `/socket.io/` → port 3001, service des fichiers du front.
- [ ] PM2 (`deploy/ecosystem.config.js`) : API en cluster avec 2 instances par défaut (`LEXIKOS_INSTANCES`), chat `lexikos-chat` en `fork` à 1 instance. Savoir expliquer pourquoi le chat n'est pas en cluster. `pm2 reload` = redéploiement sans coupure.

**C10 — SQL**
- [ ] Dernier SQL écrit à la main chez A M F (2011–2015). Réviser jointures, clés étrangères, normalisation. La formation M2i 2018 (JDBC, Hibernate) peut aussi servir.

**C11 — NoSQL**
- [ ] Nommer les types d'index : TTL sur `pendingSignupExpire` (suppression par MongoDB lui-même toutes les 60 s, sans cron ni doublon en cluster), index unique composé sur `LemmaWord` (`text` + `language` + `partOfSpeech`), index partiel pour les rappels de série.
- [ ] Redis : arrivé avec le cluster PM2, pour partager les compteurs de limitation de débit entre les processus (sinon chaque utilisateur a N fois son quota). Facultatif en local ; une panne de Redis ne coupe pas le site. Sert aussi au publish/subscribe.

**C12 — Relationnel ou NoSQL**
- [ ] Construire l'argumentaire : pourquoi le modèle document convient à Lexikos (ex. : mots connus stockés dans le document utilisateur), et ce que PostgreSQL aurait apporté.

**C13 — Sauvegarde**
- [ ] **Faire un test de restauration** (en local, à partir d'un dump téléchargé depuis B2). Procédure : `deploy/MONGODB_BACKUP_RUNBOOK.md`, `restore-mongodb.sh`.
- [ ] Relire l'incident du 2026-09-09 dans le runbook : sauvegardes qui échouaient sans alerte.

**C14 — Conception d'API**
- [ ] POC headless : préparer un exemple du schéma GraphQL que j'ai défini (types, requêtes, mutations), et savoir comparer GraphQL et REST.
- [ ] Codes HTTP précis : 400, 401, 403, 404, 409, 429, et les 5xx. Lexikos n'a qu'une version (`/api/v1`).

**C15 — Sécurité de l'API**
- [ ] Le refresh token n'est pas un JWT : chaîne aléatoire de 64 octets, cookie `httpOnly` limité à `/api/auth` (`sameSite: strict`), collection `RefreshToken` avec index TTL, 30 jours par défaut (réglable dans `Settings`), révocation à la déconnexion.
- [ ] Le JWT de 15 min est renouvelé quand il expire, pas à chaque requête.
- [ ] Routes admin : la vraie protection est côté serveur (`protect` + `authorize('admin')` dans `middleware/auth.js`).
- [ ] Savoir justifier le JWT en `localStorage` (risque XSS).
- [ ] Amélioration possible : l'OTP utilisateur utilise `Math.random()` (`controllers/auth.js`), alors que l'OTP admin utilise `crypto.randomInt()`.

**C16 — Tests**
- [ ] Tests d'intégration réels : `backend/__tests__` (95 fichiers), Jest + Supertest + `mongodb-memory-server`. Playwright n'est pas une suite de tests du projet, mais un outil de vérification utilisé par l'IA.
- [ ] Lire et savoir lancer un test d'intégration moi-même.
- [ ] k6 : relire `loadtest/README.md` et `loadtest/MESURES.md` (montées à 300 utilisateurs virtuels, plafonds et temps de réponse).
- [ ] Le chiffre de ~1000 vient de `loadtest/CAPACITE.md` : environ 950 connexions simultanées au chat (`lexikos-chat`), limitées par le nombre de descripteurs de fichiers. C'est une limite de connexions WebSocket, pas un résultat de k6 sur l'API.

**C17 — Documentation d'API**
- [ ] Mettre en place Swagger / OpenAPI sur Lexikos.

**C18 — Solutions cloud**
- [ ] Argumenter le choix du VPS OVH face à un service géré (coût, contrôle, charge d'administration, montée en charge).
- [ ] Lister les services cloud intégrés à Lexikos : Backblaze B2, Mistral AI, Stripe, PayPal.

**C19 — Architecture**
- [ ] Vocabulaire : séparer front et back ne fait pas des microservices. Lexikos = monolithe modulaire (un seul programme Node, deux processus PM2 : API et chat) + front découplé. Savoir justifier ce choix pour un projet mené seul.

**C20 — Administration cloud**
- [ ] Lister ce que j'ai fait concrètement sur SFCC : sandboxes, déploiement de versions de code, réplication, Business Manager.
- [ ] Lexikos : pas de route de santé ni d'alerte. Mettre en place une supervision.

**C21 — Git**
- [ ] Les branches de session et les PR datent d'août 2026 (64 PR fusionnées). Avant, les commits allaient directement sur `main`.

**C22 — Procédures de fusion**
- [ ] Retrouver les règles écrites chez Accenture : GitFlow, relecture obligatoire, branches protégées ?

**C23 — Conteneurs**
- [ ] Production : seul MongoDB est dans Docker (`docker-compose.yml`, `mongo:6.0`). Développement : MongoDB et Redis sous Podman. L'application n'est pas conteneurisée.

**C24 — Orchestration**
- [ ] Lacune réelle, et le référentiel la nomme explicitement. Décider avec le tuteur : cas pratique ou validation partielle.

**C25 — CI/CD**
- [ ] Déroulé de `.github/workflows/deploy.yml` : push sur `main` → SSH → `git pull` → `npm ci` → build du front → `pm2 reload` (sans coupure).
- [ ] Aucun test ne tourne dans la CI : ils ne tournent qu'en local, dans le hook de commit. Amélioration à faire.

**C26 — Besoins utilisateurs**
- [ ] Aucune enquête ni interview. Les retours via le `FeedbackManager` sont des signalements de problèmes, pas une analyse de besoins. Piste : un court questionnaire auprès des utilisateurs actuels de Lexikos.

**C27 — Faisabilité**
- [ ] Formaliser après coup : temps, coûts (VPS, API d'IA, paiements), risques. Retrouver un exemple de chiffrage Accenture où mon avis a compté.

**C29 à C32 — Conduite de projet**
- [ ] Rôle de participant, pas de pilote. Chercher des exemples où j'ai pris une décision ou fait avancer l'équipe.

**C31 — Indicateurs**
- [ ] Le coût de chaque appel d'IA est enregistré dans `AiUsageEvent` (`estimatedCostUsd`, figé au tarif du jour), avec un tableau de bord (`AnalyticsDashboard`). Trouver une décision prise grâce à ces chiffres.

**C33 — Revues de code**
- [ ] ESLint est aussi un outil d'analyse statique, utilisé sur Lexikos.

**C34 — Tests automatisés**
- [ ] Retrouver un exemple concret de TDD chez Accenture. Sur Lexikos, voir C16.

**C35 — Documentation**
- [ ] JSDoc présente dans 64 fichiers back-end sur 326 (environ 20 %), pas partout.
- [ ] Relire les autres documents de Lexikos : `docs/ARCHITECTURE_BACKEND.md`, `docs/ARCHITECTURE_FRONTEND.md`, runbooks `deploy/*.md`, `loadtest/*.md`, `CLAUDE.md`.

