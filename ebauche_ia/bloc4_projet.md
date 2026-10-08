> ⚠️ **Brouillon généré par IA, non validé par le candidat.** Les niveaux et les formulations ne sont pas fiables. Matière brute à vérifier, pas un document à présenter.

# BLOC 4 : Gérer les projets numériques et collaborer à l'amélioration continue des systèmes d'information

> Sources recoupées le 2026-09-30 : CV en ligne (https://cv.gregory-day.fr/api/resume.json) et dépôt `neruuren/lexikos`.
> Les mentions `[À CONFIRMER]` signalent une affirmation que ni le CV ni les dépôts ne confirment. Elles sont listées en fin de fichier.

## Synthèse du bloc

**Connaissances, compétences et aptitudes mobilisées :**

- Recueil et analyse des besoins, conduite de projet de bout en bout en autonomie
- Méthode Scrum en équipe, organisation itérative en solo
- Suivi d'indicateurs : coûts d'IA, usage, capacité, performance
- Qualité du code : ESLint, Prettier, hooks de pré-commit, audits de sécurité et d'accessibilité
- Tests automatisés : unitaires, intégration, bout en bout, charge
- Documentation technique : README, runbooks, rapports de mesure, conventions pour les agents IA
- Veille technologique automatisée, en grande partie sur des sources anglophones
- Savoir-être indiqués sur mon CV : rigueur, méthode, priorisation, pragmatisme, analyse, sang-froid

**Comment avez-vous acquis ces compétences ?**

| Période | Source |
|---|---|
| 2011–2015 | A M F : je repère un besoin, je conçois et je fais adopter un outil de mon initiative |
| 2018 | M2i Formation : UML, Scrum, projet de billetterie de concerts réalisé en équipe |
| 2018–2024 | Altima/Accenture : travail en équipe projet sur des sites e-commerce |
| 2020 | Octo Academy « Pratiques de dev de qualité » : TDD |
| 2025–aujourd'hui | Lexikos : conduite complète d'un projet en production, du besoin à l'exploitation |

---

## ⚠️ Note sur les preuves et la confidentialité

Chez Altima/Accenture, je travaille sous clause de confidentialité. Les outils de suivi et les spécifications des clients ne sont pas accessibles. Je démontre la conduite de projet et la qualité sur Lexikos.

| Type de preuve | Disponibilité |
|---|---|
| Dépôt Lexikos : configurations qualité, tests, rapports de mesure, runbooks, suivi des coûts d'IA | ✅ |
| Certificat Octo Academy | ✅ |
| Attestations d'anciens collègues sur la pratique en équipe | ⚠️ À obtenir |
| Outils de suivi et spécifications des clients | ❌ NDA |

---

## C26 : Analyse des besoins des utilisateurs et parties prenantes

**Niveau de maîtrise : 3** ⭐⭐⭐

> Réalisé avec maîtrise et/ou de façon récurrente seul ou en collaboration

**Place occupée :** sur Lexikos et chez A M F, j'identifie seul le besoin et je définis les fonctionnalités. Chez Accenture, je contribue à la compréhension du besoin client.

### Situation 1 : Lexikos (2025–2026)

**Contexte :** je pars d'un constat personnel. En regardant des films et des séries en anglais, on rencontre des mots qu'on oublie aussitôt.

**Ce que j'ai fait :**
- Je définis le besoin : noter un mot rencontré, en obtenir la traduction, puis le mémoriser par des quiz et la répétition espacée.
- J'élargis ensuite le public à 4 langues d'interface : anglais, français, allemand, espagnol.
- J'ouvre une bêta à nombre de participants plafonné, réglable dans l'administration, pour tester le produit sur de vrais utilisateurs.
- Je recueille les retours avec un formulaire de feedback stocké en base.
- J'observe l'usage réel avec une télémétrie d'interface anonyme et un tableau d'analytics.
- J'enrichis le produit par itérations : prononciation, conversation avec un tuteur IA, découverte de mots, dimension ludique. Le lien précis entre les retours et ces choix reste à documenter `[À CONFIRMER]`.

**Recul :** je n'ai pas formalisé de personas ni d'entretiens utilisateurs écrits. C'est un point à renforcer.

### Situation 2 : A M F (2011–2015) et Altima/Accenture (2018–2024)

- **A M F :** sur la plateforme d'assistance technique de la maintenance Auchan, j'identifie un problème : les informations circulent mal entre techniciens et prestataires. Je conçois un outil intranet qui uniformise les communications. Il améliore la productivité et la satisfaction des appelants et des prestataires.
- **Picard :** le besoin de l'équipe marketing est de gagner en autonomie. Je conçois des pages personnalisables avec Page Designer.
- Je participe aux réunions de recueil des besoins avec les clients `[À CONFIRMER]`.

### Preuves

| Preuve | Type | Accès |
|---|---|---|
| Modèles `Feedback`, `UiEvent`, réglage `betaMaxParticipants`, tableau `/admin/analytics` | Code | ✅ dépôt Lexikos |
| Outil A M F et évolution de poste | CV, témoignage | ⚠️ |

---

## C27 : Étude de faisabilité technique

**Niveau de maîtrise : 2** ⭐⭐

> Réalisé ponctuellement avec un faible niveau de maîtrise / besoin d'une assistance modérée

**Place occupée :** j'évalue seul la faisabilité de mes projets, mais sans étude écrite formelle.

### Situation 1 : Lexikos (2025–2026)

**Ce que j'ai fait :**
- J'évalue le coût des fonctions d'IA avant de les ouvrir. Je renseigne le tarif par million de tokens de chaque modèle (`backend/config/aiPricing.js`), puis je mesure la consommation réelle.
- J'évalue la faisabilité de la synthèse vocale. Je choisis Piper, auto-hébergé, et je documente ses contraintes : un processus par langue, mémoire d'échange, licences des voix.
- Je vérifie par des tests de charge que l'infrastructure supporte le public visé.

**Recul :** ces évaluations sont réelles mais dispersées dans le code et les rapports. Il me manque un document de faisabilité unique, rédigé avant de lancer une fonctionnalité.

### Situation 2 : Altima/Accenture

- J'estime la complexité des tâches lors de la planification des sprints `[À CONFIRMER]`.
- Je signale les risques techniques dans un contexte de dette technique importante (Camaïeu, Picard).

### Preuves

| Preuve | Type | Accès |
|---|---|---|
| `backend/config/aiPricing.js`, `deploy/PIPER_TTS_RUNBOOK.md`, `loadtest/CAPACITE.md` | Code et documentation | ✅ dépôt Lexikos |

---

## C28 : Contribution au cahier des charges et spécifications techniques

**Niveau de maîtrise : 2** ⭐⭐

> Réalisé ponctuellement avec un faible niveau de maîtrise / besoin d'une assistance modérée

**Place occupée :** en équipe, je contribue aux spécifications sans en être le rédacteur principal.

### Situations

- **M2i (2018) :** je modélise en UML l'application de billetterie de concerts avec mon équipe.
- **Altima/Accenture (2018–2024) :** je relis les spécifications, je signale les points techniques et je propose des solutions `[À CONFIRMER]`.
- **Lexikos :** les choix techniques sont décrits dans `CLAUDE.md` : architecture, authentification, modèle de données, économie du jeu, paiements. C'est une spécification technique vivante, pas un cahier des charges rédigé en amont.

**Recul :** je n'ai jamais rédigé seul un cahier des charges ou une note de cadrage. Je peux en rédiger une pour une évolution de Lexikos, comme preuve.

### Preuves

| Preuve | Type | Accès |
|---|---|---|
| `CLAUDE.md` | Documentation | ✅ dépôt Lexikos |
| Contribution chez Accenture | Témoignage | ⚠️ NDA |

---

## C29 : Planification et conduite de projet (méthodologies Agile, V, cascade)

**Niveau de maîtrise : 3** ⭐⭐⭐

> Réalisé avec maîtrise et/ou de façon récurrente seul ou en collaboration

**Place occupée :** je conduis seul Lexikos. En équipe, j'applique la méthode du projet.

### Situation 1 : Lexikos (2025–2026)

**Ce que j'ai fait :**
- Je conduis le projet de façon itérative, par sessions de travail courtes. Chaque session a sa branche datée et se termine par une pull request (61 PR).
- Je livre en continu : chaque fusion sur `main` part en production.
- Je sécurise les étapes à risque avant de les ouvrir : bêta plafonnée, paiements testés avec des comptes de test, garde-fou contre les clés de paiement réelles hors production.
- Je mène le projet sur plus de 18 mois, de février 2025 à aujourd'hui.

### Situation 2 : M2i (2018) et Altima/Accenture (2018–2024)

- **M2i :** je réalise en équipe un projet de billetterie selon Scrum.
- **Accenture :** je travaille en Scrum : daily, planification de sprint, revue de sprint, rétrospective `[À CONFIRMER]`. Les sprints durent 2 à 3 semaines `[À CONFIRMER]`.

**Recul :** je n'ai pas pratiqué le cycle en V ou la cascade. Je sais expliquer quand ils conviennent : un besoin figé, des contraintes réglementaires.

### Preuves

| Preuve | Type | Accès |
|---|---|---|
| Branches datées et 61 PR | Historique GitHub | ✅ dépôt Lexikos |
| `deploy/PAYMENTS_RUNBOOK.md` | Documentation | ✅ dépôt Lexikos |
| Pratique Scrum en équipe | Témoignage | ⚠️ |

---

## C30 : Coordination des équipes de projet (outils collaboratifs)

**Niveau de maîtrise : 2** ⭐⭐

> Réalisé ponctuellement avec un faible niveau de maîtrise / besoin d'une assistance modérée

**Place occupée :** en équipe, je suis dans un rôle d'exécution, sans responsabilité de coordination formelle.

### Situations

- **M2i (2018) :** je coordonne le travail avec mon équipe sur le projet de billetterie.
- **Altima/Accenture (2018–2024) :** je suis mes tickets dans Jira `[À CONFIRMER]`. Je signale l'avancement et les blocages. J'échange au quotidien avec les autres développeurs.
- **System-U (2020) :** j'apporte un support technique aux webmasters du site SFCC.
- **Lexikos :** je coordonne le travail d'agents de code IA. J'encadre leur travail par des conventions écrites (`CLAUDE.md`) et des skills spécialisés, puis je relis tout ce qu'ils produisent.

**Recul :** je n'ai pas été Scrum Master ni lead technique. C'est cohérent avec mon poste de développeur.

### Preuves

| Preuve | Type | Accès |
|---|---|---|
| `CLAUDE.md`, `.claude/skills/` | Documentation | ✅ dépôt Lexikos |
| Travail en équipe chez Accenture | Témoignage | ⚠️ |

---

## C31 : Suivi des indicateurs de performance et gestion budgétaire

**Niveau de maîtrise : 2** ⭐⭐

> Réalisé ponctuellement avec un faible niveau de maîtrise / besoin d'une assistance modérée

**Place occupée :** sur Lexikos, je définis et je suis seul mes indicateurs. Chez Accenture, le budget ne relevait pas de mon poste.

### Situation 1 : Lexikos (2025–2026)

**Ce que j'ai fait :**
- Je trace chaque appel à l'IA avec son nombre de tokens et son coût (modèle `AiUsageEvent`, tarifs dans `aiPricing.js`).
- J'affiche ces coûts dans un onglet « Coûts IA » du tableau d'analytics.
- Je suis l'usage avec une télémétrie d'interface anonyme et des statistiques d'activité.
- Je définis des indicateurs techniques de capacité, avec des seuils qui déclenchent une augmentation des ressources.
- Je mesure les temps de réponse du serveur, avec l'en-tête `Server-Timing` et une route de mesure.

**Recul :** je ne suis pas encore le coût d'hébergement ni les frais de paiement dans un même tableau. Il n'existe pas de budget global du projet.

### Situation 2 : Altima/Accenture

- Je n'ai pas accès au budget des projets. Je connais les indicateurs de vélocité de l'équipe `[À CONFIRMER]`.

### Preuves

| Preuve | Type | Accès |
|---|---|---|
| `backend/config/aiPricing.js`, modèle `AiUsageEvent`, `frontend/src/analytics/` | Code | ✅ dépôt Lexikos |
| `loadtest/CAPACITE.md` : indicateurs de capacité | Rapport | ✅ dépôt Lexikos |

---

## C32 : Évaluations périodiques et rapports d'étape

**Niveau de maîtrise : 2** ⭐⭐

> Réalisé ponctuellement avec un faible niveau de maîtrise / besoin d'une assistance modérée

**Place occupée :** je rédige des rapports techniques sur mon projet. En équipe, je contribue aux revues.

### Situation 1 : Lexikos (septembre 2026)

**Ce que j'ai fait :**
- Je rédige `loadtest/MESURES.md`, un rapport de campagne de performance. Il part d'une mesure de référence, puis décrit six corrections, chacune avec son effet mesuré.
- J'en tire une conclusion chiffrée sur la capacité dans `CAPACITE.md`.
- Je documente les incidents et leur résolution. Par exemple, l'incident de sauvegarde du 2026-09-09 est décrit dans le runbook.

**Recul :** ce sont des rapports techniques, pas des rapports d'avancement projet. Je n'ai pas rédigé de rapport d'étape pour un commanditaire.

### Situation 2 : Altima/Accenture

- Je présente mes fonctionnalités en revue de sprint et je participe aux rétrospectives `[À CONFIRMER]`.

### Preuves

| Preuve | Type | Accès |
|---|---|---|
| `loadtest/MESURES.md`, `loadtest/CAPACITE.md`, `deploy/MONGODB_BACKUP_RUNBOOK.md` | Rapports | ✅ dépôt Lexikos |

---

## C33 : Revues de code et standards de l'entreprise

**Niveau de maîtrise : 4** ⭐⭐⭐⭐

> Réalisé avec aisance, en autonomie totale

**Place occupée :** je définis les standards de qualité de mes projets et je les fais respecter automatiquement.

### Situation 1 : Lexikos (2025–2026)

**Ce que j'ai fait :**
- J'impose des standards automatiques : ESLint 9 pour le back-end et le front-end, Prettier pour le formatage.
- J'installe un hook de pré-commit avec Husky et lint-staged. Il corrige le style et lance les tests back-end avant chaque commit.
- Je relis le diff complet de chaque pull request avant fusion (61 PR).
- Je mène des revues complètes du code avec des grilles spécialisées : sécurité (commit `0b516df`), accessibilité (commit `3cbd661`), architecture, performance.
- La revue de sécurité part d'un seul fichier, puis s'étend à tout le projet. Elle trouve 5 familles de failles, que je corrige et que je documente dans le message de commit.

### Situation 2 : Altima/Accenture (2018–2024)

- Je soumets mon code en revue avant chaque fusion et je prends en compte les retours.
- Je relis aussi le code de mes collègues `[À CONFIRMER]`.

### Évolution de ma pratique

En équipe, je pratique la revue entre pairs. Seul sur Lexikos, je la remplace par des outils automatiques et par des revues structurées avec des grilles de lecture.

### Preuves

| Preuve | Type | Accès |
|---|---|---|
| `backend/eslint.config.mjs`, `frontend/eslint.config.js`, `.prettierrc`, `.husky/pre-commit` | Configuration | ✅ dépôt Lexikos |
| Commits `0b516df`, `3cbd661` | Historique Git | ✅ dépôt Lexikos |
| Revues chez Accenture | Témoignage | ⚠️ NDA |

---

## C34 : Tests automatisés

**Niveau de maîtrise : 3** ⭐⭐⭐

> Réalisé avec maîtrise et/ou de façon récurrente seul ou en collaboration

**Place occupée :** je définis et j'applique seul la stratégie de test.

### Situation 1 : Lexikos (2025–2026)

**Ce que j'ai fait :**
- J'écris 89 fichiers de tests Jest pour le back-end, dont des tests d'intégration avec Supertest et une base MongoDB en mémoire.
- Je lance ces tests à chaque commit.
- Je réalise des tests de charge avec k6 pour valider la performance sous forte affluence.

**Difficulté et recul :** Lexikos n'a ni tests front-end ni tests de bout en bout. Les tests ne tournent pas dans la CI et la couverture de code n'est pas mesurée. Pour compléter ma stratégie, j'ajouterai des tests front avec Vitest, quelques parcours de bout en bout avec Playwright, puis je rendrai le tout bloquant dans la CI.

### Situation 2 : formation Octo Academy (05/2020)

- Je suis la formation « Pratiques de dev de qualité », centrée sur le TDD : écrire d'abord le test qui échoue, puis le code qui le fait passer.

### Preuves

| Preuve | Type | Accès |
|---|---|---|
| `backend/__tests__/`, `loadtest/` | Tests | ✅ dépôt Lexikos |
| Certificat Octo Academy (05/2020) | Certificat | ✅ |

---

## C35 : Documentation technique et partage des connaissances

**Niveau de maîtrise : 3** ⭐⭐⭐

> Réalisé avec maîtrise et/ou de façon récurrente seul ou en collaboration

**Place occupée :** je rédige et je maintiens seul toute la documentation de mes projets.

### Situation 1 : Lexikos (2025–2026)

**Ce que j'ai fait :**
- Je rédige un README en anglais : présentation et commandes.
- Je tiens à jour un `CLAUDE.md` très détaillé : architecture, authentification, modèle de domaine, paiements, e-mails, banc de charge, conventions. Il sert à tout contributeur, humain ou agent IA.
- J'écris 4 runbooks d'exploitation : paiements, synthèse vocale, Redis, sauvegardes MongoDB.
- J'écris des guides de configuration et de diagnostic de MongoDB (`MONGODB_LOCAL_SETUP.md`, `MONGODB_DIAGNOSTIC_GUIDE.md`).
- Je documente le banc de charge et ses résultats (`loadtest/README.md`, `MESURES.md`, `CAPACITE.md`).

**Résultat :** tout ce qu'il faut pour installer, lancer, tester, déployer et dépanner est dans le dépôt.

**Recul :** le README n'est pas à jour avec la richesse actuelle du projet. Il ne décrit ni la connexion par code OTP, ni les paiements, ni la PWA. Une partie de la documentation est en français, une autre en anglais.

### Situation 2 : Altima/Accenture

- **Accenture :** j'utilise une plateforme de documentation d'équipe comme Confluence `[À CONFIRMER]`.

### Preuves

| Preuve | Type | Accès |
|---|---|---|
| `README.md`, `CLAUDE.md`, `deploy/*.md`, `loadtest/*.md`, guides MongoDB | Documentation | ✅ dépôt Lexikos |

---

## Veille technologique multilingue (attendu du référentiel)

La fiche France Compétences du titre mentionne en bloc 4 une veille technologique en lien avec le projet et la maîtrise de l'anglais.

**Ce que je fais :**
- J'automatise ma veille avec n8n, que je déploie et j'administre sur un VPS.
- Je m'appuie sur la documentation officielle des outils, en anglais. Sur Lexikos, une règle impose de consulter cette documentation avant d'utiliser une bibliothèque. Un agent dédié la récupère.
- Je me forme avec des cours en anglais : React, Node.js, Docker et Kubernetes, sur Udemy.
- J'écris le README et les messages de commit de Lexikos en anglais.
- Lexikos lui-même est un outil d'apprentissage du vocabulaire anglais.

**À produire :** un rapport de veille court, qui cite quelques sources anglophones et ce que j'en ai tiré pour Lexikos.

---

## 📋 Actions à mener

| Action | Compétence | Priorité |
|---|---|---|
| Rédiger une note de cadrage pour une évolution de Lexikos | C27, C28 | Haute |
| Rédiger un rapport de veille multilingue | Veille | Haute |
| Ajouter des tests front et un test de bout en bout à Lexikos, puis les lancer en CI | C34 | Moyenne |
| Mettre à jour le README de Lexikos | C35 | Moyenne |
| Réunir coûts d'hébergement, d'IA et de paiement dans un même suivi | C31 | Basse |
| Obtenir des attestations sur la pratique Scrum et les revues de code chez Accenture | C29, C33 | Haute |

## ❓ Éléments à confirmer

| Élément | Question |
|---|---|
| Retours utilisateurs | Quelles fonctionnalités de Lexikos sont nées de retours de bêta-testeurs ? |
| Réunions client | Participais-tu aux réunions de recueil des besoins avec les clients chez Accenture ? |
| Scrum chez Accenture | Le CV ne mentionne Scrum que pour M2i. Quelles cérémonies pratiquais-tu chez Accenture, et quelle était la durée des sprints ? |
| Jira, Confluence | Quels outils de suivi et de documentation utilisais-tu chez Accenture ? |
| Estimation | Participais-tu à l'estimation des tâches, par exemple en story points ? |
| Spécifications | Relisais-tu et commentais-tu les spécifications techniques ? |
| Reviewer | Relisais-tu le code de tes collègues, ou seulement le tien était-il relu ? |
| Vélocité | Suivais-tu des indicateurs d'équipe comme la vélocité ? |
