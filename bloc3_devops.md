# BLOC 3 : Élaborer, intégrer et optimiser les architectures de systèmes d'information et garantir l'industrialisation du développement

> Sources recoupées le 2026-09-30 : CV en ligne (https://cv.gregory-day.fr/api/resume.json) et dépôts `neruuren/lexikos` et `neruuren/my_nodejs_webcv`.
> Les mentions `[À CONFIRMER]` signalent une affirmation que ni le CV ni les dépôts ne confirment. Elles sont listées en fin de fichier.

## Synthèse du bloc

**Connaissances, compétences et aptitudes mobilisées :**

- Cloud : PaaS (Salesforce Commerce Cloud), VPS (OVH), stockage objet (Backblaze B2), API d'IA en SaaS (Mistral, OpenAI)
- Architectures : monolithe modulaire, headless API-first, PWA hors ligne, cluster de processus
- Dimensionnement : tests de charge, estimation de capacité, indicateurs de montée en charge
- Git et GitHub : branches, pull requests, hooks de pré-commit
- Conteneurs : Docker, Docker Compose, Podman
- CI/CD : GitHub Actions, déploiement par SSH, gestion des secrets
- Automatisation : cron, scripts bash, n8n auto-hébergé

**Comment avez-vous acquis ces compétences ?**

| Période | Source |
|---|---|
| 2005–2007 | BTS au C.U.E.E.P : réseaux et systèmes |
| 2018–2024 | Altima/Accenture : environ 5 ans sur Salesforce Commerce Cloud, POC headless API-first, travail en équipe sous Git |
| 2024–2025 | Autoformation : cours Udemy « Docker & Kubernetes », MyWebCV conteneurisé et déployé automatiquement |
| 2025–aujourd'hui | Lexikos en production sur VPS, n8n auto-hébergé |

---

## ⚠️ Note sur les preuves et la confidentialité

Chez Altima/Accenture, je travaille sous clause de confidentialité. L'historique Git des projets clients n'est pas accessible. Je démontre les mêmes compétences sur mes dépôts publics.

| Type de preuve | Disponibilité |
|---|---|
| Dépôt Lexikos : 1 088 commits, 61 PR, workflow de déploiement, configurations serveur, rapports de charge | ✅ |
| Dépôt MyWebCV : Dockerfile, Compose, workflow de déploiement | ✅ |
| Serveurs en production (OVH) | ✅ |
| Certification SFCC (plateforme cloud) | ✅ |
| Historique Git d'Accenture | ❌ NDA |

---

## C18 : Évaluation des besoins et intégration de solutions cloud

**Niveau de maîtrise : 3** ⭐⭐⭐

> Réalisé avec maîtrise et/ou de façon récurrente seul ou en collaboration

**Place occupée :** sur mes projets, je choisis et j'intègre seul les services cloud. Chez Accenture, je développe sur une plateforme cloud choisie par le client.

### Situation 1 : Lexikos (2025–2026)

**Ce que j'ai fait :**
- J'héberge l'application sur un VPS OVH. Je garde ainsi la maîtrise du système et un coût fixe.
- J'intègre des services cloud spécialisés plutôt que de les héberger : Mistral AI et OpenAI pour l'IA, Stripe et PayPal pour les paiements.
- J'externalise les sauvegardes vers un stockage objet, Backblaze B2, pour qu'elles survivent à une panne du serveur.
- J'héberge moi-même la synthèse vocale Piper, avec un processus par langue. Cela évite un coût à l'usage sur une fonction très sollicitée.

**Choix et arbitrages :** j'externalise quand le service demande une expertise rare, comme l'IA ou le paiement. J'héberge quand le coût à l'usage deviendrait trop élevé, comme pour la synthèse vocale.

### Situation 2 : Altima/Accenture (2018–2024)

- Je développe pendant environ 5 ans sur Salesforce Commerce Cloud, une plateforme e-commerce en PaaS : l'hébergement, la montée en charge et la maintenance sont gérés par l'éditeur.
- J'y développe des jobs automatisés pour les traitements back-end (Ba&Sh).
- J'obtiens la certification SFCC B2C Commerce Developer en janvier 2020.

### Preuves

| Preuve | Type | Accès |
|---|---|---|
| `backup-mongodb.sh` (copie B2), `deploy/PIPER_TTS_RUNBOOK.md`, `deploy/PAYMENTS_RUNBOOK.md` | Code et documentation | ✅ dépôt Lexikos |
| Certification SFCC B2C Commerce Developer | Certificat | ✅ |

---

## C19 : Analyse et sélection des architectures applicatives

**Niveau de maîtrise : 3** ⭐⭐⭐

> Réalisé avec maîtrise et/ou de façon récurrente seul ou en collaboration

**Place occupée :** je conçois seul l'architecture de mes projets. Chez Accenture, je participe à un POC d'architecture.

### Situation 1 : Lexikos (2025–2026)

**Ce que j'ai fait :**
- Je choisis un monolithe modulaire : une API Express découpée en routes, contrôleurs et services, et un front React séparé.
- Je sépare le serveur WebSocket de conversation dans un processus à part (`lexikos-chat`). Ses contraintes de connexion sont différentes de celles de l'API.
- Je fais tourner l'API en cluster de 2 processus avec PM2. Je partage l'état entre eux avec Redis : limites de débit et invalidation du cache.
- Je rends le front utilisable hors ligne (PWA) : les réponses sont mises en file d'attente puis synchronisées.

**Choix et arbitrages :** je n'adopte pas les microservices. Un seul développeur ne peut pas exploiter plusieurs services indépendants de façon fiable. Je n'isole que ce qui a des besoins d'exploitation différents : WebSocket et synthèse vocale.

### Situation 2 : Altima/Accenture, POC headless (2020–2021)

- Pendant environ 9 mois, je développe un POC e-commerce SFCC en architecture headless, API-first.
- Le front Vue.js et Nuxt.js est séparé du back-end et communique en GraphQL. Chaque partie peut évoluer séparément.
- Je connais aussi les architectures serverless et n-tiers, sans les avoir mises en production.

### Preuves

| Preuve | Type | Accès |
|---|---|---|
| `deploy/ecosystem.config.js` (cluster et processus chat), `frontend/src/offline/` | Code | ✅ dépôt Lexikos |
| `CLAUDE.md` : description de l'architecture | Documentation | ✅ dépôt Lexikos |
| POC headless | Témoignage | ⚠️ NDA |

---

## C20 : Administration et rationalisation des plateformes cloud

**Niveau de maîtrise : 3** ⭐⭐⭐

> Réalisé avec maîtrise et/ou de façon récurrente seul ou en collaboration

**Place occupée :** j'administre seul la plateforme et je décide de son dimensionnement.

### Situation 1 : Lexikos (2025–2026)

**Ce que j'ai fait :**
- J'administre le VPS OVH : Nginx, certificats, PM2, Redis, MongoDB, processus de synthèse vocale.
- Je dimensionne la plateforme à partir de mesures. Les tests de charge me donnent la capacité réelle du serveur (4 vCPU, 7,6 Go) : environ 1 600 joueurs actifs.
- Je rédige un tableau d'indicateurs qui déclenchent une augmentation des ressources (`loadtest/CAPACITE.md`).
- J'optimise avant d'acheter plus de ressources : cache, projections, suppression d'index redondants, limite de mémoire par processus.
- Je configure Redis pour une empreinte mémoire bornée : `maxmemory`, éviction `allkeys-lru`, persistance désactivée.
- Je suis le coût des appels d'IA par token dans le tableau d'administration.
- Je rédige 4 runbooks d'exploitation, pour pouvoir intervenir vite en cas d'incident.

**Recul :** je n'ai pas encore de supervision externe avec alertes, comme Prometheus ou Sentry. Les journaux sont stockés en base.

### Situation 2 : MyWebCV (2024–2025)

- J'administre un second serveur chez OVH, avec l'application en conteneurs Docker.

### Preuves

| Preuve | Type | Accès |
|---|---|---|
| `loadtest/CAPACITE.md`, `loadtest/MESURES.md` | Rapports | ✅ dépôt Lexikos |
| `deploy/REDIS_RUNBOOK.md` et 3 autres runbooks | Documentation | ✅ dépôt Lexikos |
| `backend/config/aiPricing.js`, modèle `AiUsageEvent` | Code | ✅ dépôt Lexikos |

---

## C21 : Gestion et suivi des révisions de code source (Git)

**Niveau de maîtrise : 4** ⭐⭐⭐⭐

> Réalisé avec aisance, en autonomie totale

**Place occupée :** je définis et j'applique seul la stratégie de versionnement de mes projets.

### Situation 1 : Lexikos (2025–2026)

**Ce que j'ai fait :**
- Je versionne tout le projet sous Git : 1 088 commits entre février 2025 et septembre 2026.
- Je travaille par branches de session, nommées par date (`AAAA-MM-JJ-SESSION-NN`), soit 102 branches.
- J'écris des messages de commit qui expliquent le pourquoi. Par exemple, le commit `0b516df` décrit chaque faille corrigée et sa cause.
- J'exclus du dépôt les secrets et les sauvegardes. Quand une sauvegarde y entre par erreur, je la retire (commit du 2026-09-21).

**Recul :** je n'utilise pas de tags de version. Des tags à chaque mise en production faciliteraient un retour arrière.

### Situation 2 : Altima/Accenture (2018–2024)

- J'utilise Git au quotidien en équipe, sur des dépôts partagés, sous GitLab `[À CONFIRMER]`.

### Preuves

| Preuve | Type | Accès |
|---|---|---|
| Historique et branches du dépôt Lexikos | Historique Git | ✅ |
| Pratique en équipe chez Accenture | Témoignage | ⚠️ NDA |

---

## C22 : Procédures de fusion et résolution de conflits (CI)

**Niveau de maîtrise : 3** ⭐⭐⭐

> Réalisé avec maîtrise et/ou de façon récurrente seul ou en collaboration

**Place occupée :** sur mes projets, je définis la procédure de fusion. En équipe, je l'applique.

### Situation 1 : Lexikos (2025–2026)

**Ce que j'ai fait :**
- Je fusionne mon travail par pull request sur GitHub : 61 PR depuis août 2025.
- Chaque PR regroupe une session de travail. Je relis le diff complet avant fusion.
- Le hook Husky empêche tout commit qui ne passe pas le lint et les tests back-end.

**Difficulté et recul :** la CI de Lexikos ne lance pas de vérification sur les PR. Le contrôle repose sur le hook local. Je veux faire lancer le lint et les tests par GitHub Actions sur chaque PR, et bloquer la fusion en cas d'échec.

### Situation 2 : Altima/Accenture (2018–2024)

- je soumets mon code par merge request et je résous les conflits de fusion avec l'équipe `[À CONFIRMER]`.

### Preuves

| Preuve | Type | Accès |
|---|---|---|
| 61 PR fusionnées | Historique GitHub | ✅ dépôt Lexikos |
| `.husky/pre-commit` | Code | ✅ dépôt Lexikos |

---

## C23 : Développement d'environnements virtualisés (Docker)

**Niveau de maîtrise : 3** ⭐⭐⭐

> Réalisé avec maîtrise et/ou de façon récurrente seul ou en collaboration

**Place occupée :** je conçois et j'exploite seul les conteneurs de mes projets.

### Situation 1 : Lexikos (2025–2026)

**Ce que j'ai fait :**
- Je lance MongoDB et Redis en conteneurs pour le développement. Le même script fonctionne avec Podman ou Docker (`scripts/podman-wrapper.sh`).
- En production, MongoDB tourne en conteneur. Les sauvegardes s'exécutent dans le conteneur avec `docker exec`.
- Je décris le service MongoDB dans un `docker-compose.yml`, avec un contrôle de santé et un réseau dédié.

**Choix et arbitrages :** l'API Lexikos n'est pas conteneurisée. Elle tourne sous PM2 en cluster, que j'administre directement. Le `docker-compose.yml` ne sert pas au déploiement réel. C'est une incohérence à résoudre.

### Situation 2 : MyWebCV (2024–2025)

- J'écris le `Dockerfile`, le `docker-entrypoint.sh` et le `docker-compose.yml`. L'application tourne en production dans des conteneurs : back-end Node.js et MongoDB.
- La CI reconstruit et redémarre les conteneurs à chaque déploiement (`docker compose up -d --build`), puis supprime les images obsolètes.
- Je gère les volumes pour la persistance des données et des fichiers envoyés.
- Je déploie n8n en auto-hébergé sur un VPS pour automatiser ma veille technologique.

### Preuves

| Preuve | Type | Accès |
|---|---|---|
| `Dockerfile`, `docker-entrypoint.sh`, `docker-compose.yml`, `.github/workflows/deploy.yml` | Code | ✅ dépôt MyWebCV |
| `scripts/podman-wrapper.sh`, `docker-compose.yml` | Code | ✅ dépôt Lexikos |

---

## C24 : Orchestration de conteneurs (Kubernetes, etc.)

**Niveau de maîtrise : 1** ⭐

> Jamais réalisé ou participation mineure

**Place occupée :** connaissance théorique uniquement.

### Ce que je sais et ce que j'ai fait

- Je suis le cours Udemy « Docker & Kubernetes: The Practical Guide ». J'y apprends les pods, les deployments, les services et les volumes.
- Je n'ai jamais exploité Kubernetes en production.
- Sur Lexikos, je réponds aux mêmes besoins avec d'autres outils : PM2 en cluster redémarre les processus, Redis partage l'état. Je dimensionne à partir de mesures de charge.

**Choix et arbitrages :** à l'échelle d'un seul serveur et d'environ 1 600 joueurs actifs, Kubernetes ajouterait une complexité sans bénéfice. Je l'envisagerais pour répartir la charge sur plusieurs serveurs.

### Preuves

| Preuve | Type | Accès |
|---|---|---|
| Cours Udemy Docker & Kubernetes | Formation | ⚠️ attestation à retrouver |
| `loadtest/CAPACITE.md` : arbitrage de capacité | Rapport | ✅ dépôt Lexikos |

---

## C25 : Automatisation du déploiement (DevOps, CI/CD)

**Niveau de maîtrise : 3** ⭐⭐⭐

> Réalisé avec maîtrise et/ou de façon récurrente seul ou en collaboration

**Place occupée :** je conçois et je maintiens seul les pipelines de mes projets.

**Justification du niveau :** le déploiement est entièrement automatisé et sécurisé, mais le pipeline ne lance pas encore les tests. Le niveau 4 sera justifié quand les tests bloqueront la mise en production.

### Situation 1 : Lexikos (2025–2026)

**Ce que j'ai fait :**
- J'écris un workflow GitHub Actions déclenché par chaque push sur `main` (`.github/workflows/deploy.yml`).
- Le workflow se connecte au VPS par SSH avec une clé stockée dans les secrets GitHub.
- Il met à jour le code, installe les dépendances, construit le front sur le serveur, puis recharge PM2 sans interruption de service (`pm2 reload`) et redémarre Nginx.
- Les secrets de production restent sur le serveur (`backend/.env`) et ne transitent jamais par le dépôt.

**Difficulté et recul :** ce pipeline ne lance ni lint ni tests. Un code cassé peut donc partir en production si le hook local est contourné. C'est la prochaine amélioration.

- J'automatise aussi les tâches récurrentes par scripts : sauvegardes cron, promotion d'un administrateur (`scripts/`).

### Situation 2 : MyWebCV (2024–2025)

- J'écris un workflow qui se connecte au VPS par SSH, synchronise les fichiers avec rsync, reconstruit les conteneurs (`docker compose up -d --build`) et supprime les images obsolètes.

### Évolution de ma pratique

Sur MyWebCV, j'automatise le déploiement de conteneurs. Sur Lexikos, j'ajoute un rechargement sans interruption de service et un contrôle qualité local avant chaque commit. L'étape suivante est de rendre les tests bloquants dans la CI.

### Preuves

| Preuve | Type | Accès |
|---|---|---|
| `.github/workflows/deploy.yml` | Code | ✅ dépôts Lexikos et MyWebCV |
| Historique des exécutions GitHub Actions | Historique | ✅ |

---

## 📋 Actions à mener

| Action | Compétence | Priorité |
|---|---|---|
| Ajouter lint et tests Jest au workflow Lexikos, bloquants avant le déploiement | C22, C25 | Haute |
| Lancer ces vérifications sur chaque pull request Lexikos | C22 | Haute |
| Conteneuriser l'API Lexikos ou retirer le `docker-compose.yml` inutilisé | C23 | Moyenne |
| Poser un tag Git à chaque mise en production | C21 | Basse |
| Ajouter une supervision avec alertes | C20 | Basse |

## ❓ Éléments à confirmer

| Élément | Question |
|---|---|
| GitLab chez Accenture | La plateforme Git d'Accenture était-elle GitLab ? |
| Merge requests et conflits | Peux-tu décrire un conflit de fusion que tu as résolu en équipe ? |
