> ⚠️ **Brouillon généré par IA, non validé par le candidat.** Les niveaux et les formulations ne sont pas fiables. Matière brute à vérifier, pas un document à présenter.

# 🎤 Quoi présenter au jury : stratégie et déroulé

> Ce document regroupe tout ce qui concerne l'oral : stratégie, déroulé, démonstrations par compétence, réponses types et kit.
> Les niveaux et la couverture du dossier sont dans [synthese_vae.md](synthese_vae.md).
> Règle : **un seul projet montré, Lexikos.** Un seul site, un seul dépôt.

---

## ⚠️ À vérifier d'abord auprès du certificateur

Ces points conditionnent toute la stratégie. Les confirmer dès réception de la convocation ou auprès de l'accompagnateur VAE de 3iL.

- [ ] **Durée et format de l'oral** : présentation libre puis entretien, entretien seul, ou mise en situation ?
- [ ] **Ordinateur et démonstrations en direct autorisés ?** Sinon, basculer sur captures et vidéos.
- [ ] **Support de présentation autorisé ?** Slides, schémas imprimés.
- [ ] **Format exact du livret 2** attendu.

---

## 🧭 Stratégie : un fil rouge, deux récits

Le jury ne peut pas absorber 35 compétences en vrac. Changer de site ou de dépôt disperse l'attention. Tout se montre donc sur Lexikos.

### Fil rouge : **Lexikos**

Lexikos est une application que je conçois, développe, teste et exploite seul en production depuis février 2025. Elle aide à mémoriser le vocabulaire anglais rencontré en regardant des films et des séries. Elle raconte tout le cycle de vie d'une application, avec de vrais utilisateurs, des paiements et de l'IA.

> *« Je vais vous présenter Lexikos, une application que j'ai conçue et que j'exploite seul en production. À travers elle, vous verrez comment je travaille à chaque étape, du besoin jusqu'à l'exploitation. »*

| Étape du récit | Compétences prouvées |
| -------------- | -------------------- |
| Besoin, bêta, choix de stack | C26, C27, C12, C19 |
| Interface React, responsive, accessible, multilingue, PWA | C1-C6 |
| API en couches, Mistral, paiements | C8, C14 |
| Connexion par code, audit de sécurité | C15, C33 |
| Tests Jest et campagne de charge k6 | C16, C34, C32 |
| Pull requests, hook de pré-commit, déploiement automatisé | C21, C22, C25 |
| VPS, Nginx, PM2 en cluster, Redis, dimensionnement | C9, C18, C20, C23 |
| Sauvegardes hors site, runbooks, incident | C13, C35 |
| Suivi des coûts d'IA | C31 |

### Récit 1 : **Altima/Accenture** (l'équipe et l'échelle)

Ce que Lexikos ne peut pas prouver : le travail **en équipe**, pour de **vrais clients**, sur des sites e-commerce à fort trafic. C'est le rôle du récit Accenture, sans démonstration :

- près de six ans, de juin 2018 à avril 2024, sur Salesforce Commerce Cloud ;
- Ba&Sh : refonte du checkout, paiements, SEO ; Picard : moteur de promotions, panier, créneaux de livraison ;
- POC headless en Vue.js, Nuxt.js, GraphQL et TypeScript ;
- travail en équipe, revues de code, méthode agile, à préciser selon les éléments `[À CONFIRMER]` des fichiers de bloc ;
- la certification SFCC est la preuve matérielle qui compense le NDA.

### Récit 2 : **A M F** (l'autonomie ancienne)

De 2011 à 2015, je repère un problème de circulation de l'information sur la plateforme d'assistance de la maintenance Auchan. Je conçois seul un outil intranet en PHP et MySQL. C'est ma réponse pour C10 et C26, et la preuve que l'autonomie ne date pas de Lexikos.

---

## 🎬 Déroulé proposé

Base de 20 à 25 minutes de présentation, à adapter au format réel.

### 1. Parcours (3 min)

BTS au C.U.E.E.P (2005-2007) → A M F : premier outil conçu seul (2011-2015) → M2i Java Full Stack (2018) → Altima/Accenture, e-commerce SFCC, certification (2018-2024) → autoformation React et Node.js, puis Lexikos (2025-…).

**Message clé : une progression constante vers l'autonomie sur tout le cycle de développement.**

### 2. Contrainte NDA, annoncée d'emblée (1 min)

L'annoncer avant que le jury ne pose la question montre une posture professionnelle.

> « De 2018 à 2024, j'ai travaillé près de six ans chez Altima/Accenture sur des sites e-commerce comme Ba&Sh, Picard, Camaïeu ou Trëmma pour Emmaüs. Ces projets sont couverts par des clauses de confidentialité. Je ne peux pas montrer de code ni de captures. Je peux en revanche décrire précisément mes réalisations, fournir des attestations, et vous montrer les mêmes compétences sur Lexikos, une application que je conçois et exploite seul en production depuis 2025. »

### 3. Fil rouge Lexikos (12-14 min) : le cœur de l'oral

Trois ou quatre démonstrations courtes, le reste en récit ou en capture.

1. **Le besoin et les choix** (2 min) : l'idée de départ, la bêta plafonnée, pourquoi MongoDB, pourquoi un monolithe modulaire. Le jury apprécie les choix argumentés.
2. **Démo produit** (3 min) : le site en production, un quiz, le mode responsive et le changement de langue, l'onglet Réseau des outils de développement.
3. **Démo sécurité et qualité** (4 min), la séquence la plus différenciante :
   - la connexion par code à usage unique ;
   - le commit d'audit `0b516df`, qui explique chaque faille trouvée et corrigée ;
   - la suite Jest lancée en direct ;
   - le rapport de charge : 322 098 requêtes sans échec, six corrections mesurées.
4. **Démo exploitation** (3 min) : le workflow de déploiement, une pull request, le runbook de sauvegarde avec l'incident du 9 septembre 2026.

### 4. Élargissement (3-4 min)

- Accenture : un exemple raconté en Contexte, Action, Résultat. Par exemple, la refonte du checkout Ba&Sh.
- L'IA comme outil, encadrée par des conventions versionnées. La question est inévitable : la transformer en force.

### 5. Bilan honnête (2 min)

- « Kubernetes : connaissance théorique. Pour un serveur et environ 1 600 joueurs actifs, PM2 en cluster est le bon arbitrage, et je l'ai mesuré. »
- « Mes tests ne sont pas encore bloquants dans la CI. C'est ma prochaine étape. »
- « Budget : hors de mon rôle chez Accenture. Sur Lexikos, je suis le coût de chaque appel à l'IA. »
- Assumer les limites rend crédible tout le reste.

### 6. Questions du jury

Entraînement possible avec le skill `vae-jury` en mode simulation.

#### « Comment avez-vous acquis cette compétence ? »

> « J'ai appris les bases au BTS puis à la formation M2i en 2018. Je l'ai pratiquée près de six ans en équipe chez Accenture. Aujourd'hui, je l'exerce seul de bout en bout sur Lexikos, en production depuis 2025. »

#### « Pouvez-vous montrer une preuve ? »

> « Pour les projets clients, non, à cause des clauses de confidentialité. Je peux vous montrer la même compétence sur Lexikos. [Démonstration] »

#### « Pourquoi ce choix technique ? »

> « J'ai choisi MongoDB parce que les données de vocabulaire varient d'une langue à l'autre et que les contenus générés par l'IA évoluent souvent. Pour les paiements, j'ai compensé côté serveur : tout montant est calculé par le serveur. Si la facturation grossissait, je l'isolerais dans PostgreSQL. »

#### « Comment garantissez-vous la qualité de votre code ? »

> « Un hook de pré-commit lance le lint, le formatage et 89 fichiers de tests back-end. J'ai mesuré la tenue en charge avec k6 et corrigé six points faibles. Je mène aussi des audits complets, comme celui de sécurité du 28 août 2026. Ma prochaine étape est de rendre les tests bloquants dans la CI. J'ai été formé au TDD par Octo Academy en 2020. »

#### « Avez-vous encadré une équipe ? »

> « Non. Chez Accenture, j'étais développeur, sans responsabilité d'encadrement. C'est cohérent avec le titre visé. Sur Lexikos, je pilote seul tout le projet, et j'encadre des agents de code IA par des conventions écrites. »

#### « Et l'IA dans votre pratique ? »

> « À deux niveaux. Comme outil de développement, avec Claude Code et GitHub Copilot, encadrés par des conventions versionnées et relus systématiquement. Et comme brique du produit : Lexikos utilise Mistral pour la traduction, les articles et la conversation, et je suis le coût de chaque appel. »

---

## 🗺️ Qui prouve quoi

### Preuves matérielles disponibles

| Type | Preuve | Compétences couvertes |
| ---- | ------ | --------------------- |
| 🌐 **Site en production** | https://lexikos.eu | C1-C6, C9, C14, C15 |
| 📁 **Dépôt Lexikos** | Code, 61 PR, 89 fichiers de tests, workflow de déploiement | C7, C8, C11-C16, C21-C23, C25, C33-C35 |
| 📄 **Rapports Lexikos** | `loadtest/MESURES.md`, `CAPACITE.md`, 4 runbooks | C13, C16, C20, C31, C32, C35 |
| 📜 **Certification** | SFCC B2C Commerce Developer (01/2020) | C4, C8, C18 |
| 📜 **Certification** | Octo Academy « Pratiques de dev de qualité » (05/2020) | C16, C33, C34 |
| 📜 **Certification** | Trailhead Ranger (2021) | C18 |
| 👥 **Témoignages** | Anciens collègues d'Accenture, à obtenir | C22, C26, C29, C33 |

### Démonstrations par compétence

Légende : 🖥️ démonstration en direct, 💬 récit, 📊 schéma, 📄 document montré.

#### BLOC 1 : Front-end

| Compétence | Sur Lexikos | Secours | Durée |
| ---------- | ----------- | ------- | ----- |
| **C1 - HTML5/SEO** | 🖥️ Audit Lighthouse en direct, code sémantique, sitemap | Récit SEO Ba&Sh | 5 min |
| **C2 - CSS/UI** | 🖥️ Tailwind, passage en mode sombre | Récit des refontes Camaïeu, Trëmma, Brico Marché | 3 min |
| **C3 - Responsive** | 🖥️ Redimensionner le navigateur, navigation mobile | — | 3 min |
| **C4 - JavaScript** | 🖥️ File d'attente hors ligne des quiz (`src/offline/`) | Certification SFCC, récit du checkout Ba&Sh | 5 min |
| **C5 - AJAX** | 🖥️ Onglet Réseau pendant un quiz, renouvellement du jeton | Récit panier et créneaux Picard | 3 min |
| **C6 - Frameworks** | 🖥️ Routage, contextes, changement de langue | Récit du POC Vue.js et Nuxt.js | 5 min |

#### BLOC 2 : Back-end

| Compétence | Sur Lexikos | Secours | Durée |
| ---------- | ----------- | ------- | ----- |
| **C7 - IDE/Terminal** | 🖥️ `npm run startDev`, conteneurs de dev, hook Husky | — | 3 min |
| **C8 - POO/MVC** | 🖥️ Parcours d'une requête : route, contrôleur, service, modèle | Formation M2i, SFCC | 5 min |
| **C9 - Sécurité serveur** | 💬 Configuration Nginx, HTTPS, PM2 en cluster | Certificat HTTPS visible | 3 min |
| **C10 - SQL** | 💬 **Récit A M F** + modèle relationnel équivalent de Lexikos | Formation M2i | 3 min |
| **C11 - MongoDB** | 🖥️ Modèles Mongoose, index, correction du problème N+1 | `MESURES.md` | 5 min |
| **C12 - Choix de base** | 💬 Pourquoi MongoDB, où serait PostgreSQL | — | 2 min |
| **C13 - Sauvegardes** | 🖥️ Script de sauvegarde, copie B2, runbook d'incident | — | 3 min |
| **C14 - API REST** | 🖥️ Routes `/api/v1`, service Mistral | Récit des intégrations Accenture | 5 min |
| **C15 - Sécurité API** | 🖥️ Connexion par code, commit d'audit `0b516df` | — | 5 min |
| **C16 - Tests** | 🖥️ Lancer la suite Jest, montrer le rapport de charge | Certificat Octo Academy | 4 min |
| **C17 - Swagger** | 🖥️ Page Swagger, **⏳ à réaliser avant l'oral** | — | 3 min |

#### BLOC 3 : Architecture et DevOps

| Compétence | Sur Lexikos | Secours | Durée |
| ---------- | ----------- | ------- | ----- |
| **C18 - Cloud** | 💬 VPS, B2, IA en SaaS | Récit SFCC (PaaS) | 3 min |
| **C19 - Architectures** | 📊 Schéma : Nginx, cluster API, processus chat, MongoDB, Redis | Récit du POC headless | 5 min |
| **C20 - Administration** | 📄 `CAPACITE.md` et ses indicateurs, runbooks | — | 3 min |
| **C21 - Git** | 🖥️ Historique et branches sur GitHub | — | 3 min |
| **C22 - Fusion** | 🖥️ Une pull request Lexikos | Récit du travail en équipe | 3 min |
| **C23 - Conteneurs** | 🖥️ Conteneurs MongoDB et Redis, `docker-compose.yml` | Dockerfile de MyWebCV | 3 min |
| **C24 - Orchestration** | 💬 Concepts Kubernetes et arbitrage PM2 | — | 2 min |
| **C25 - CI/CD** | 🖥️ `deploy.yml` et historique des exécutions | — | 4 min |

#### BLOC 4 : Projet et qualité

| Compétence | Sur Lexikos | Secours | Durée |
| ---------- | ----------- | ------- | ----- |
| **C26 - Besoins** | 💬 Origine de Lexikos, bêta, retours | Récit A M F | 3 min |
| **C27 - Faisabilité** | 🖥️ `aiPricing.js`, choix de Piper | — | 3 min |
| **C28 - Spécifications** | 🖥️ `CLAUDE.md`, note de cadrage à rédiger | — | 3 min |
| **C29 - Méthodes** | 💬 Sessions datées, pull requests | Récit d'un sprint chez Accenture, attestations | 4 min |
| **C30 - Coordination** | 💬 Encadrement des agents IA | Rôle d'exécution chez Accenture | 2 min |
| **C31 - Indicateurs** | 🖥️ Onglet « Coûts IA » du tableau d'administration | — | 2 min |
| **C32 - Rapports** | 📄 `MESURES.md` | — | 2 min |
| **C33 - Revues de code** | 🖥️ ESLint, Prettier, Husky, commit d'audit | Récit des revues Accenture | 4 min |
| **C34 - Tests** | 🖥️ Suite Jest et banc k6 | — | 4 min |
| **C35 - Documentation** | 🖥️ `CLAUDE.md` et runbooks | Guides MongoDB | 3 min |

---

## 🎒 Le kit à préparer

**Matériel :**
- PC chargé et partage 4G de secours
- Onglets prêts : https://lexikos.eu, le dépôt GitHub (une pull request, l'onglet Actions, le commit `0b516df`), la page Swagger une fois faite
- VS Code ouvert sur le dépôt Lexikos, terminal prêt, `npm run test:backend` vérifié le matin

**Documents :**
- Schéma d'architecture de Lexikos (1 page) et schéma du déploiement (1 page)
- Certificats imprimés : SFCC, Octo Academy, Trailhead Ranger
- Attestations d'anciens collègues, à obtenir
- Captures de secours : Lighthouse, suite de tests verte, rapport de charge, pull request fusionnée

**Plan B sans réseau :** vidéos courtes des démonstrations et captures.

---

## ✅ À faire avant l'oral, par priorité

1. ⏳ Confirmer le format de l'oral auprès de 3iL
2. ⏳ Réaliser Swagger sur Lexikos (C17)
3. ⏳ Rendre les tests bloquants dans la CI de Lexikos (C22, C25)
4. ⏳ Contacter 1 ou 2 anciens collègues d'Accenture pour des attestations
5. ⏳ Répondre aux éléments `[À CONFIRMER]` des fichiers de bloc
6. ⏳ Transposer les blocs dans le format officiel du livret 2
7. ⏳ Préparer les 2 schémas et le kit de captures de secours
8. ⏳ Répéter le déroulé chronométré au moins 2 fois, dont une devant quelqu'un
