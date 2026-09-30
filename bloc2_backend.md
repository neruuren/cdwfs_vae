# BLOC 2 : Concevoir et réaliser des applications et des services back-end sur des architectures serveur complexes

> Sources recoupées le 2026-09-30 : CV en ligne (https://cv.gregory-day.fr/api/resume.json) et dépôts `neruuren/lexikos` et `neruuren/my_nodejs_webcv`.
> Les mentions `[À CONFIRMER]` signalent une affirmation que ni le CV ni les dépôts ne confirment. Elles sont listées en fin de fichier.

## Synthèse du bloc

**Connaissances, compétences et aptitudes mobilisées :**

- Node.js et Express : architecture en couches (routes, contrôleurs, services, modèles), API REST versionnée
- POO, MVC, principes SOLID
- MongoDB et Mongoose (modélisation, index, performance), Redis, MySQL
- Sécurité applicative : JWT, refresh token, codes OTP, rôles, Helmet et CSP, limitation de débit, prévention XSS et ReDoS
- Intégration de services tiers : Mistral AI, OpenAI, Stripe, PayPal, SMTP
- Tests : Jest, Supertest, base MongoDB en mémoire, tests de charge k6
- Administration de serveurs Linux : SSH, Nginx, HTTPS, PM2
- Sauvegarde et restauration, copie hors site

**Comment avez-vous acquis ces compétences ?**

| Période | Source |
|---|---|
| 2005–2007 | BTS au C.U.E.E.P : programmation, réseaux et systèmes, PHP et MySQL |
| 2011–2015 | A M F : outil intranet développé seul en PHP et MySQL |
| 2018 | M2i Formation, Java Full Stack (4 mois) : POO, JDBC, Servlets, JSP, MVC, Struts, Hibernate, Web Services, UML |
| 2018–2024 | Altima/Accenture : développement back-end SFCC (environ 5 ans) sur Ba&Sh, Picard, Aigle, System-U |
| 2020 | Octo Academy « Pratiques de dev de qualité » : TDD |
| 2024–2025 | Autoformation : cours Udemy Node.js (REST, GraphQL, authentification, MongoDB, SQL), MyWebCV |
| 2025–aujourd'hui | Lexikos (1 088 commits depuis février 2025) |

---

## ⚠️ Note sur les preuves et la confidentialité

Chez Altima/Accenture, je travaille sous clause de confidentialité. Je ne peux montrer ni code ni capture client. Je démontre les mêmes compétences sur mes projets personnels, dont le code est public.

| Type de preuve | Disponibilité |
|---|---|
| Lexikos (https://lexikos.eu), dépôt `neruuren/lexikos` | ✅ API en production, code, 89 fichiers de tests, rapports de charge, runbooks |
| MyWebCV | ✅ Code et site en production |
| Certification SFCC B2C Commerce Developer (01/2020), Octo Academy TDD (05/2020) | ✅ Certificats |
| Attestations d'anciens collègues | ⚠️ À obtenir |
| Code des projets clients | ❌ NDA |

---

## C7 : Configuration de l'environnement de développement (IDE, terminal)

**Niveau de maîtrise : 4** ⭐⭐⭐⭐

> Réalisé avec aisance, en autonomie totale

**Place occupée :** je définis et j'outille seul l'environnement de mes projets.

### Situation 1 : Lexikos (2025–2026)

**Ce que j'ai fait :**
- Je travaille sous Linux avec VS Code et le terminal au quotidien.
- Je lance les services de développement en conteneurs : MongoDB 6.0 et Redis 7, comme en production. Un script unique fonctionne avec Podman comme avec Docker (`scripts/podman-wrapper.sh`).
- J'isole les ports de développement (27018 pour MongoDB, 6380 pour Redis) pour ne pas entrer en conflit avec d'autres projets.
- Je fixe la version de Node.js (22.x) dans `package.json`.
- J'automatise la qualité à chaque commit : Husky lance lint-staged (ESLint et Prettier), puis les tests back-end.
- Je sépare les secrets du code : `.env` hors dépôt, `.env.example` versionné.
- J'intègre des agents de code IA (Claude Code, GitHub Copilot) dans mon flux de travail. Je les encadre par des conventions écrites (`CLAUDE.md`) et 10 skills spécialisés.

**Résultat :** un nouveau poste est prêt avec `npm install` puis `npm run startDev`.

### Situation 2 : Altima/Accenture (2018–2024)

- Je configure l'environnement SFCC : IDE, sandbox, synchronisation des cartridges `[À CONFIRMER]`.
- J'utilise Docker en développement sur les missions Trëmma et Camaïeu (2021) `[À CONFIRMER]`.

### Preuves

| Preuve | Type | Accès |
|---|---|---|
| `package.json` (scripts `db:*`, `redis:*`, `startDev`), `scripts/podman-wrapper.sh`, `.husky/pre-commit` | Code | ✅ dépôt Lexikos |
| `CLAUDE.md` et `.claude/skills/` | Documentation | ✅ dépôt Lexikos |

---

## C8 : Programmation orientée objet, architectures MVC et frameworks

**Niveau de maîtrise : 4** ⭐⭐⭐⭐

> Réalisé avec aisance, en autonomie totale

**Place occupée :** je conçois l'architecture et je la fais respecter sur mes projets.

### Situation 1 : Lexikos (2025–2026)

**Ce que j'ai fait :**
- Je structure le back-end Express en couches : 34 fichiers de routes, 38 contrôleurs, 57 services, 30 modèles et 6 middlewares.
- Je sépare les responsabilités. Les routes déclarent les URL, les contrôleurs traitent la requête HTTP, les services portent la logique métier, les modèles décrivent les données.
- J'isole chaque fournisseur externe dans son propre service, par exemple `mistralTranslateService` ou `paypalService`. Je peux ainsi changer de fournisseur sans toucher aux routes.
- Je centralise l'authentification et les rôles dans des middlewares réutilisables (`protect`, `authorize`).

**Choix et arbitrages :** je garde un monolithe modulaire plutôt que des microservices. Le découpage en services me donne la séparation des responsabilités sans le coût d'exploitation de plusieurs applications.

### Situation 2 : M2i et Accenture

- **M2i (2018) :** j'apprends la POO en Java (encapsulation, héritage, polymorphisme), le modèle MVC avec Struts, la persistance avec JDBC et Hibernate, et la modélisation UML.
- **Accenture (2018–2024) :** je développe sur SFCC avec ses contrôleurs, ses cartridges et son modèle de données propriétaire.

### Évolution de ma pratique

J'ai appris la POO et le MVC en Java. Je les ai pratiqués dans le cadre imposé de SFCC. Aujourd'hui, je conçois seul l'architecture en couches d'une application de plus de 150 fichiers back-end.

### Preuves

| Preuve | Type | Accès |
|---|---|---|
| `backend/routes`, `controllers`, `services`, `models`, `middleware` | Code | ✅ dépôt Lexikos |
| Certification SFCC B2C Commerce Developer | Certificat | ✅ |

---

## C9 : Optimisation et sécurisation des serveurs web

**Niveau de maîtrise : 3** ⭐⭐⭐

> Réalisé avec maîtrise et/ou de façon récurrente seul ou en collaboration

**Place occupée :** j'administre seul le serveur de production.

### Situation 1 : Lexikos (2025–2026)

**Contexte :** Lexikos tourne sur un VPS OVH de 4 vCPU et 7,6 Go de RAM, sous Ubuntu.

**Ce que j'ai fait :**
- Je configure Nginx en reverse proxy vers l'API et vers le serveur WebSocket (`deploy/nginx.lexikos.eu.conf.example`).
- J'active HTTPS avec Let's Encrypt et certbot, en TLS 1.2 et 1.3, avec des en-têtes de sécurité.
- Je fais tourner l'API avec PM2 en cluster de 2 processus, avec redémarrage automatique au-delà de 500 Mo de mémoire (`deploy/ecosystem.config.js`).
- J'accède au serveur par SSH avec une clé. La CI utilise une clé stockée dans les secrets GitHub.
- J'augmente la limite de fichiers ouverts (`ulimit`) après avoir mesuré qu'elle plafonnait les connexions WebSocket à environ 950.
- J'active la compression Brotli.

**Difficulté et recul :** je n'ai pas encore mis en place d'authentification multifacteur sur le serveur. C'est la prochaine étape.

### Situation 2 : MyWebCV (2024–2025)

- J'héberge le CV en ligne chez OVH, dans des conteneurs Docker, en HTTPS.

### Preuves

| Preuve | Type | Accès |
|---|---|---|
| `deploy/nginx.lexikos.eu.conf.example`, `deploy/ecosystem.config.js` | Configuration | ✅ dépôt Lexikos |
| `loadtest/CAPACITE.md` : dimensionnement du serveur | Rapport | ✅ dépôt Lexikos |
| Certificat HTTPS visible | Site | ✅ https://lexikos.eu |

---

## C10 : Bases de données relationnelles (SQL, MySQL, PostgreSQL)

**Niveau de maîtrise : 2** ⭐⭐

> Réalisé ponctuellement avec un faible niveau de maîtrise / besoin d'une assistance modérée

**Place occupée :** chez A M F, je conçois et j'administre seul la base de mon outil.

Lexikos n'utilise pas de base relationnelle. Je m'appuie donc sur A M F et sur mes formations.

### Situation 1 : A M F (2011–2015)

**Contexte :** A M F est une plateforme d'assistance technique qui gère la maintenance des magasins Auchan. Je développe un outil intranet pour fiabiliser la circulation des informations entre techniciens et prestataires.

**Ce que j'ai fait :**
- Je conçois et j'administre seul la base MySQL de l'outil.
- Je modélise les tables et j'écris les requêtes CRUD et les jointures.
- Je développe ensuite des outils de collecte de données, ce qui fait évoluer mon poste vers des responsabilités élargies.

### Situation 2 : formations

- **BTS au C.U.E.E.P (2005–2007) :** PHP et MySQL.
- **M2i (2018) :** SQL, accès aux données avec JDBC, correspondance objet-relationnel avec Hibernate, sur une base MySQL.
- **Cours Udemy Node.js :** module SQL.

### Évolution et recul

Je n'ai pas administré de base SQL en production depuis 2015. Je sais expliquer comment Lexikos serait modélisé en relationnel : utilisateurs, mots, résultats de quiz, paiements. Je le fais pour préparer l'oral.

### Preuves

| Preuve | Type | Accès |
|---|---|---|
| Expérience A M F | Témoignage | ⚠️ ancienne, pas de preuve matérielle |
| Formation M2i | Attestation de formation | ⚠️ à retrouver |

---

## C11 : Bases de données NoSQL (MongoDB, etc.)

**Niveau de maîtrise : 4** ⭐⭐⭐⭐

> Réalisé avec aisance, en autonomie totale

**Place occupée :** je conçois, j'administre et j'optimise seul la base de production.

### Situation 1 : Lexikos (2025–2026)

**Ce que j'ai fait :**
- Je modélise les données avec 30 modèles Mongoose : utilisateurs, mots, résultats de quiz, saisons, paiements, factures, usage de l'IA, journaux…
- Je définis les index nécessaires aux requêtes : 63 déclarations `.index()` et 48 champs indexés ou uniques.
- Je mesure puis j'optimise les accès. Pendant les tests de charge, je supprime un problème « N+1 » : l'envoi d'un quiz de 10 réponses déclenchait 59 opérations MongoDB. J'ajoute des projections pour ne lire que les champs utiles. Je mets en cache les réglages.
- J'audite les index et je supprime les index redondants (environ 50 Mo et 80 Mo), ce qui allège la mémoire du serveur.
- J'utilise Redis à côté de MongoDB pour deux besoins précis : les compteurs de limitation de débit partagés entre processus, et la diffusion de l'invalidation du cache.

**Choix et arbitrages :** Redis n'est pas une base principale. Je le limite volontairement à ces deux usages et je le documente dans `deploy/REDIS_RUNBOOK.md`.

### Situation 2 : MyWebCV (2024–2025)

- Je conçois mon premier schéma MongoDB, pour le contenu du CV et les réglages SEO.

### Preuves

| Preuve | Type | Accès |
|---|---|---|
| `backend/models/` (30 modèles) | Code | ✅ dépôt Lexikos |
| `loadtest/MESURES.md`, corrections n°1 à n°6 | Rapport | ✅ dépôt Lexikos |
| `deploy/REDIS_RUNBOOK.md`, `MONGODB_DIAGNOSTIC_GUIDE.md` | Documentation | ✅ dépôt Lexikos |

---

## C12 : Choix entre bases relationnelles et NoSQL

**Niveau de maîtrise : 3** ⭐⭐⭐

> Réalisé avec maîtrise et/ou de façon récurrente seul ou en collaboration

**Place occupée :** je décide seul du choix de base de données de mes projets.

### Situation 1 : Lexikos (2025)

**Ce que j'ai fait :**
- J'analyse la forme des données. Les mots, leurs variantes, leurs traductions et leurs exemples ont une structure qui varie d'une langue à l'autre. Les contenus générés par l'IA évoluent souvent.
- Je choisis MongoDB, qui accepte ces structures variables sans migration de schéma à chaque évolution.
- J'identifie les zones qui demandent de la rigueur transactionnelle : paiements et factures. Je les protège côté serveur. Par exemple, tout montant est calculé par le serveur et jamais reçu du navigateur (commit `1bbeb2b`, 2026-08-27). Les numéros de facture viennent d'un compteur dédié (`InvoiceCounter`).
- J'ajoute Redis pour un besoin que MongoDB couvre mal : des compteurs rapides et partagés.

**Recul :** si la part des paiements et de la facturation grossissait, je les isolerais dans une base relationnelle comme PostgreSQL. L'intégrité référentielle et les transactions y sont natives.

### Situation 2 : A M F

- Chez A M F, les données de l'intranet sont fortement relationnelles : interventions, techniciens, prestataires. MySQL est alors le bon choix.

### Preuves

| Preuve | Type | Accès |
|---|---|---|
| Modèles Lexikos et commit `1bbeb2b` | Code | ✅ dépôt Lexikos |
| Argumentaire oral | Entretien | ✅ |

---

## C13 : Stratégies de sauvegarde et récupération des données

**Niveau de maîtrise : 3** ⭐⭐⭐

> Réalisé avec maîtrise et/ou de façon récurrente seul ou en collaboration

**Place occupée :** je définis et j'exploite seul la politique de sauvegarde.

### Situation 1 : Lexikos (2025–2026)

**Ce que j'ai fait :**
- J'automatise la sauvegarde de MongoDB avec `backup-mongodb.sh`, lancé par cron deux fois par jour, à 2 h et à 14 h.
- Le script produit un export compressé (`mongodump --gzip`) depuis le conteneur MongoDB.
- Je garde les sauvegardes locales 5 jours.
- Je copie chaque sauvegarde hors du serveur, chez Backblaze B2, avec rclone. Une panne du VPS ne fait donc pas perdre les données.
- J'écris un script de restauration (`restore-mongodb.sh`). Il exige de taper « RESTAURER » pour éviter une restauration accidentelle.
- Je rédige un runbook : diagnostic, sauvegarde et restauration manuelles, configuration de B2.
- Le 2026-09-09, je traite un incident de sauvegarde lié à deux pannes indépendantes. Je le documente dans ce runbook.
- J'exclus les fichiers `.env` de production des déploiements, pour ne jamais écraser les secrets.

**Difficulté et recul :** la restauration n'est pas testée automatiquement. Une sauvegarde n'a de valeur que si on sait la restaurer. Je veux donc ajouter un test qui restaure régulièrement la dernière sauvegarde dans une base de contrôle.

### Preuves

| Preuve | Type | Accès |
|---|---|---|
| `backup-mongodb.sh`, `restore-mongodb.sh` | Code | ✅ dépôt Lexikos |
| `deploy/MONGODB_BACKUP_RUNBOOK.md` (commit `8f7b519`) | Documentation | ✅ dépôt Lexikos |

---

## C14 : Conception d'API REST

**Niveau de maîtrise : 3** ⭐⭐⭐

> Réalisé avec maîtrise et/ou de façon récurrente seul ou en collaboration

**Place occupée :** je conçois et je réalise seul l'API.

### Situation 1 : Lexikos (2025–2026)

**Ce que j'ai fait :**
- Je conçois une API REST versionnée sous `/api/v1/<ressource>`, pour pouvoir la faire évoluer sans casser les clients existants.
- J'organise les routes par ressource et je renvoie des codes HTTP explicites.
- J'intègre des services tiers, chacun isolé dans un service dédié :
  - Mistral AI pour la traduction, la génération d'articles, la conversation avec un tuteur, la découverte de mots et la génération de phrases (5 services) ;
  - OpenAI pour la transcription de la voix ;
  - Piper pour la synthèse vocale ;
  - Stripe et PayPal pour les paiements, avec des webhooks à la signature vérifiée ;
  - un serveur SMTP pour 7 types d'e-mails.
- J'expose aussi un sitemap et un fichier `llms.txt` générés par l'API.

**Résultat :** l'API sert à la fois l'application web, le mode hors ligne et le portail d'administration.

### Situation 2 : Accenture et projets personnels

- **Ba&Sh (2018–2019) :** j'intègre des services tiers, dont une API de suivi des ventes en temps réel, et de nouvelles méthodes de livraison et de paiement.
- **Aigle (2020) :** j'ajoute une méthode de livraison par une cartridge SFCC.
- **Picard (2021–2024) :** j'intègre une API tierce de gestion des créneaux de livraison.
- **POC headless (2020–2021) :** je développe une architecture API-first avec GraphQL.
- **MyWebCV :** je conçois l'API d'administration, qui expose aussi le CV au format JSON Resume.

### Preuves

| Preuve | Type | Accès |
|---|---|---|
| `backend/server.js` (montage `/api/v1`), `backend/routes/` | Code | ✅ dépôt Lexikos |
| Services Mistral, Stripe et PayPal | Code | ✅ dépôt Lexikos |
| API publique du CV | Site | ✅ https://cv.gregory-day.fr/api/resume.json |
| Intégrations Ba&Sh et Picard | Témoignage | ⚠️ NDA |

---

## C15 : Sécurisation des API (authentification, autorisation)

**Niveau de maîtrise : 3** ⭐⭐⭐

> Réalisé avec maîtrise et/ou de façon récurrente seul ou en collaboration

**Place occupée :** je conçois et j'audite seul la sécurité de l'application.

### Situation 1 : Lexikos (2025–2026)

**Ce que j'ai fait :**
- Je mets en place une connexion sans mot de passe. L'utilisateur reçoit un code à usage unique (OTP) par e-mail. Il n'y a donc aucun mot de passe à stocker ni à voler.
- Je délivre un jeton d'accès JWT valable 15 minutes et un jeton de renouvellement stocké en base. Ce second jeton est envoyé dans un cookie HttpOnly limité aux routes d'authentification, donc illisible par JavaScript.
- Je gère les rôles `user` et `admin` avec deux middlewares : `protect` vérifie l'identité, `authorize` vérifie le rôle.
- Je protège l'API avec Helmet et une politique CSP, qui limite les scripts autorisés, et une liste blanche CORS.
- Je limite le débit des requêtes, compteurs partagés dans Redis, avec un bannissement automatique de 24 h en cas d'abus (commit `88bece2`, 2026-02-09).
- Je corrige un accès public à des articles qui devaient être protégés (commit `0edd2df`, 2026-02-28).
- Le 2026-08-28, je mène un audit de sécurité complet du back-end et du front-end (commit `0b516df`) :
  - les routes d'administration vérifiaient la connexion mais pas le rôle. N'importe quel utilisateur connecté pouvait lancer des tâches d'administration. Je place `authorize('admin')` au niveau du routeur, pour qu'aucune route future ne puisse l'oublier ;
  - deux fonctions de modification du dictionnaire n'avaient aucun contrôle. Je les réserve aux administrateurs ;
  - le contenu des articles, écrit par un admin ou généré par l'IA, était injecté sans échappement. C'était une faille XSS persistante capable de lire le jeton. J'échappe le HTML, je restreins les liens à http(s), j'ajoute DOMPurify et je retire `unsafe-inline` de la CSP ;
  - quatre recherches construisaient une expression régulière à partir de la saisie, ce qui permettait un déni de service (ReDoS). J'échappe les entrées avec un utilitaire partagé.

**Difficulté et recul :** le jeton d'accès est stocké dans le `localStorage`, exposé en cas de XSS. C'est pourquoi j'ai durci la CSP et l'assainissement. Le passer en mémoire est une amélioration possible.

### Situation 2 : MyWebCV (2024–2025)

- J'authentifie l'administrateur par JWT, avec un mot de passe haché par bcrypt.

### Évolution de ma pratique

Sur MyWebCV, je protège un seul compte administrateur par mot de passe. Sur Lexikos, ouvert au public, je supprime les mots de passe, je sépare jeton d'accès et jeton de renouvellement, et j'audite toute l'application.

### Preuves

| Preuve | Type | Accès |
|---|---|---|
| Commits `0b516df`, `0edd2df`, `88bece2` | Historique Git | ✅ dépôt Lexikos |
| `backend/middleware/auth.js`, `backend/__tests__/otpAuth.test.js`, `authMiddlewareAuthorize.test.js` | Code et tests | ✅ dépôt Lexikos |
| Configuration Helmet et CSP dans `backend/server.js` | Code | ✅ dépôt Lexikos |

---

## C16 : Tests des API (unitaires, intégration, charge)

**Niveau de maîtrise : 4** ⭐⭐⭐⭐

> Réalisé avec aisance, en autonomie totale

**Place occupée :** je définis la stratégie de test et je l'applique seul.

### Situation 1 : Lexikos (2025–2026)

**Ce que j'ai fait :**
- J'écris 89 fichiers de tests Jest pour le back-end. Ils couvrent les services, les contrôleurs, l'authentification OTP, les paiements, les factures et les 5 services Mistral.
- J'écris des tests d'intégration des routes avec Supertest (10 fichiers), qui envoient de vraies requêtes HTTP à l'application.
- J'utilise une base MongoDB en mémoire (mongodb-memory-server, 31 fichiers) pour des tests isolés et reproductibles.
- Je lance les tests automatiquement avant chaque commit, avec Husky.
- Je réalise une campagne de tests de charge avec k6 en septembre 2026 (`loadtest/`) :
  - j'ajoute un mode dédié à l'application pour pouvoir la tester sans effets de bord (commit `6c98cad`) ;
  - je mesure un point de référence, puis j'applique six corrections, chacune mesurée ;
  - j'envoie 322 098 requêtes sur douze campagnes, sans aucun échec ;
  - le débit de `/auth/me` passe de 201 à 388 requêtes par seconde ;
  - j'en déduis une capacité d'environ 55 requêtes par seconde soutenues, soit environ 1 600 joueurs actifs.

**Difficulté et recul :** les tests ne tournent pas encore dans la CI, seulement au pre-commit. Un déploiement peut donc partir sans tests si le hook est contourné. Les rendre bloquants dans la CI est ma prochaine étape.

### Situation 2 : formation

- **Octo Academy (05/2020) :** formation « Pratiques de dev de qualité », centrée sur le TDD.
- Je teste aussi les API à la main avec Postman `[À CONFIRMER]`.

### Évolution de ma pratique

J'ai appris le TDD en formation en 2020. Sur Lexikos, je généralise les tests automatisés, jusqu'aux tests de charge avec des corrections mesurées. La place des tests automatisés dans mes missions Accenture reste à préciser `[À CONFIRMER]`.

### Preuves

| Preuve | Type | Accès |
|---|---|---|
| `backend/__tests__/` (89 fichiers) | Tests | ✅ dépôt Lexikos |
| `loadtest/MESURES.md`, `loadtest/CAPACITE.md` | Rapports | ✅ dépôt Lexikos |
| Certificat Octo Academy | Certificat | ✅ |

---

## C17 : Documentation des API (Swagger, etc.)

**Niveau de maîtrise : 1** ⭐

> Jamais réalisé ou participation mineure

**Place occupée :** à ce jour, je documente seul, mais de façon informelle.

### Situation actuelle : Lexikos

**Ce que j'ai fait :**
- Je documente l'architecture, l'authentification et les conventions de l'API dans `CLAUDE.md`.
- Je documente l'exploitation dans 4 runbooks : paiements, synthèse vocale, Redis, sauvegardes.
- Je n'ai pas de documentation OpenAPI ou Swagger. Le dépôt n'en contient aucune trace.

**Recul :** une API de 34 fichiers de routes mérite une documentation interactive. C'est la priorité technique du dossier.

### Preuves

| Preuve | Type | Accès |
|---|---|---|
| `CLAUDE.md`, runbooks `deploy/` | Documentation | ✅ dépôt Lexikos |
| Documentation Swagger | Code | ⏳ à produire |

---

## 📋 Actions à mener

| Action | Compétence | Priorité |
|---|---|---|
| Documenter l'API Lexikos en OpenAPI avec Swagger UI | C17 | Haute |
| Tester automatiquement la restauration d'une sauvegarde Lexikos | C13 | Moyenne |
| Lancer les tests Jest dans la CI Lexikos avant déploiement | C16 | Moyenne |
| Activer l'authentification multifacteur sur le VPS | C9 | Moyenne |
| Rédiger le modèle relationnel équivalent de Lexikos et quelques requêtes SQL | C10 | Basse |

## ❓ Éléments à confirmer

| Élément | Question |
|---|---|
| Environnement SFCC | Quels outils utilisais-tu pour configurer l'environnement SFCC : IDE, sandbox, synchronisation des cartridges ? |
| Docker chez Accenture | Ton CV associe Docker aux missions Trëmma et Camaïeu. Pour quel usage ? |
| Postman | Utilises-tu Postman ou un équivalent pour tester les API à la main ? |
| Tests chez Accenture | Écrivais-tu des tests automatisés sur les projets SFCC ? Avec quel outil ? |
