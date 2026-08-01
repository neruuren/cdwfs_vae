# 🎤 Quoi présenter au jury — stratégie et déroulé

> Complément de [synthese_vae.md](synthese_vae.md) (qui détaille les démos compétence par compétence).
> Ce document répond à : **quoi montrer, dans quel ordre, avec quel projet, et pourquoi.**

---

## ⚠️ À vérifier d'abord auprès du certificateur

Ces points conditionnent toute la stratégie — à confirmer dès réception de la convocation ou auprès de l'accompagnateur VAE :

- [ ] **Durée et format de l'oral** : présentation libre + entretien ? entretien seul basé sur le livret ? mise en situation ?
- [ ] **Peut-on apporter son ordinateur et faire des démos live ?** (toute la stratégie ci-dessous en dépend — sinon basculer sur captures/vidéos)
- [ ] **Support de présentation autorisé ?** (slides, schémas imprimés)
- [ ] **Format exact du livret 2** attendu (les blocs rédigés ici devront y être transposés)

---

## 🧭 Stratégie générale : 1 fil rouge + 3 renforts

Le jury ne peut pas absorber 35 compétences en vrac. La logique :

### Fil rouge : **Wanderline** (le projet vitrine)

C'est le seul projet qui raconte **tout le cycle de vie** d'une application, de l'idée à la production, et il est récent. Il couvre à lui seul ~20 compétences de façon démontrable :

> *« Je vais vous présenter Wanderline, une application que j'ai conçue, développée, testée et mise en production seul. À travers elle, vous verrez concrètement comment je travaille à chaque étape. »*

| Étape du récit                  | Compétences prouvées         |
| ------------------------------- | ---------------------------- |
| Besoin, cadrage, choix de stack | C26, C27, C12, C19           |
| Interface React responsive      | C1-C6                        |
| API REST, JWT, rôles            | C8, C14, C15                 |
| TDD, tests unit/integ/e2e       | C16, C34, C33                |
| Branches, PR, CI bloquante      | C21, C22                     |
| Docker, VPS, pipeline deploy    | C18, C20, C23, C25           |
| Sauvegarde/restauration testée  | C13                          |
| README, méthodo documentée      | C35                          |

### Renfort 1 : **Accenture** (l'échelle et l'équipe)

Ce que Wanderline ne peut PAS prouver : le travail **en équipe**, sur des projets **à fort trafic**, pour de **vrais clients**. C'est le rôle du récit Accenture (avec le script NDA) :

- C22 (merge requests et résolution de conflits **en équipe**)
- C26-C32 (réunions clients, Scrum 6 ans, Jira, sprint reviews)
- C33 (code reviews croisées quotidiennes)
- C1-C5 à l'échelle e-commerce (SEO Ba&Sh, checkout, paniers Picard)
- Certification SFCC = la preuve matérielle qui compense le NDA

### Renfort 2 : **Lexikos** (la profondeur technique)

À dégainer sur des points précis : intégration d'API tierce IA (Mistral — traduction, génération de contenu, services testés), système de répétition espacée, backups cron + mongodump, correction d'une faille d'accès traçable dans Git (C15).

### Renfort 3 : **WebCV + AMF** (la complétude du parcours)

- WebCV : interface d'admin sur mesure, administration SEO (C1), déploiement Docker
- AMF (2011-2015) : première application développée en autonomie (PHP/**MySQL**) → c'est TA réponse à C10, et la preuve que l'autonomie ne date pas d'hier

---

## 🎬 Déroulé proposé (base 20-25 min de présentation, à adapter au format réel)

### 1. Parcours (3 min)

CUEEP (2005-2007) → AMF : première appli en autonomie, PHP/MySQL (2011-2015) → reconversion structurée M2i Java Full Stack (2018) → 6 ans Altima/Accenture, e-commerce SFCC, certification (2018-2024) → freelance full stack, 3 applications en production (2024-…).

**Message clé : une progression constante vers l'autonomie complète sur tout le cycle de développement.**

### 2. Contrainte NDA, annoncée d'emblée (1 min)

Le script (voir synthèse) : pas de code client montrable, mais des attestations possibles + les mêmes compétences démontrées en live sur mes projets. Annoncé AVANT que le jury ne le demande = posture professionnelle.

### 3. Fil rouge Wanderline (10-12 min) — le cœur de l'oral

Dérouler le cycle de vie avec 3-4 démos live courtes maximum (le reste en récit ou capture) :

1. **Le besoin et les choix** (2 min) : qui, quoi, pourquoi MongoDB, pourquoi monolithe conteneurisé plutôt que microservices (montre l'arbitrage C19/C12 — un jury adore les choix argumentés)
2. **Démo produit** (2 min) : le site en prod, responsive en live, DevTools ouvert sur un appel API (C1-C6, C5, C14)
3. **Démo qualité** (3-4 min) — la séquence la plus différenciante :
   - montrer un test qui décrit un comportement, puis le code qui le satisfait (TDD)
   - lancer la suite de tests en live
   - montrer une PR sur GitHub avec ses checks CI verts
4. **Démo chaîne de déploiement** (3 min) : le `deploy.yml` (4 jobs, tests bloquants), le Dockerfile, l'historique des runs GitHub Actions

### 4. Élargissement (4-5 min)

- Accenture : un exemple concret raconté en Contexte → Action → Résultat (ex. refonte checkout Ba&Sh)
- Lexikos : l'intégration Mistral AI (30 s de démo produit)
- La pratique de l'IA comme outil, encadrée par des conventions versionnées (question inévitable en 2026 — la transformer en force)

### 5. Bilan honnête (2 min)

- « Kubernetes : connaissances théoriques ; à mon échelle, docker-compose est le bon arbitrage »
- « KPIs/budget : hors de mon rôle chez Accenture ; en freelance je gère mes coûts d'infra »
- Assumer les limites = crédibilité sur tout le reste

### 6. Questions du jury

Réponses types déjà préparées dans [synthese_vae.md](synthese_vae.md#🗣️-exemples-de-réponses-aux-questions-du-jury).

---

## 🗺️ Qui prouve quoi (récapitulatif par compétence)

| Compétence | Support principal | Secours |
| --- | --- | --- |
| C1-C3 (HTML/CSS/responsive) | Wanderline + Lighthouse | Récit Accenture (Camaïeu, Trëmma) |
| C4-C5 (JS/AJAX) | Wanderline (DevTools) | Certif SFCC, récit Ba&Sh |
| C6 (frameworks) | Wanderline (React) | POC Nuxt.js (récit), Lexikos, WebCV |
| C7 (env. dev) | VS Code + terminal live | — |
| C8 (POO/MVC) | Wanderline (SOLID au README) | Formation Java/Spring, SFCC |
| C9 (serveurs) | Récit config VPS + HTTPS | Certificat SSL visible |
| C10 (SQL) | **Récit AMF + formation M2i** | Option mini-projet PostgreSQL |
| C11-C12 (NoSQL/choix) | Schémas Mongoose + argumentaire | Les 3 projets |
| C13 (backups) | Script cron Lexikos + BackupService Wanderline | Test e2e de restauration |
| C14-C15 (API/sécu) | Wanderline + Postman live | Lexikos (Mistral, fix de faille) |
| C16 (tests API) | Suite Jest Wanderline en live | Certif Octo TDD |
| C17 (Swagger) | **⏳ à implémenter avant l'oral** | — |
| C18-C20 (cloud) | Console VPS + `docker ps` | Récit SFCC (PaaS), n8n |
| C21-C22 (Git/CI) | PR + checks CI sur GitHub | Récit MR GitLab en équipe |
| C23 (Docker) | Dockerfile + compose live | Les 3 projets en prod |
| C24 (Kubernetes) | Théorie + arbitrage assumé | — |
| C25 (CI/CD) | deploy.yml Wanderline | Historique des runs |
| C26-C28 (besoins/specs) | Récit Accenture + cadrage freelance | — |
| C29-C32 (Agile/suivi) | Récit Scrum 6 ans | Témoignages collègues |
| C33 (reviews) | Husky/ESLint live + PR | Récit reviews Accenture |
| C34 (tests auto) | **Test e2e Playwright en live** (fort impact) | Coverage CI |
| C35 (doc) | README Wanderline + guides MongoDB | CLAUDE.md (conventions) |

---

## 🎒 Le kit à préparer

**Matériel :**
- PC chargé + partage 4G de secours
- Onglets prêts : les 3 sites, GitHub (onglet Actions + une PR exemplaire), page Swagger (quand faite)
- VS Code ouvert sur afterLook (README visible), terminal prêt (`npm test` vérifié le matin)
- Postman avec 2-3 requêtes préparées (dont une authentifiée JWT)

**Documents :**
- Schéma d'architecture d'un projet (1 page) + schéma du pipeline CI/CD (1 page)
- Certificats imprimés : SFCC, Octo Academy
- Attestations d'anciens collègues (à obtenir)
- Captures de secours : Lighthouse, run CI vert, suite de tests, PR mergée

**Plan B sans réseau :** vidéos courtes pré-enregistrées des 4 démos live + captures.

---

## ✅ To-do avant l'oral (ordre de priorité)

1. ⏳ Confirmer le format de l'oral auprès du certificateur (tout en dépend)
2. ⏳ Implémenter Swagger (C17) — dernier trou technique
3. ⏳ Contacter 1-2 anciens collègues Accenture pour attestations
4. ⏳ Transposer les blocs dans le format officiel du livret 2
5. ⏳ Préparer les 2 schémas + le kit de captures de secours
6. ⏳ Répétition chronométrée du déroulé (au moins 2 fois, dont une devant quelqu'un)
