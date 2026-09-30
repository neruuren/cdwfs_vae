# Référentiel RNCP 39608 : texte officiel des compétences

> Généré depuis `competences.csv` (texte officiel recopié à l'identique).
> « Attendus » et « Preuve Lexikos » sont des aides de rédaction, pas du texte officiel.

---

## BLOC 1 : Concevoir et réaliser des interfaces utilisateurs adaptatives et des expériences interactives front-end.

*Activité : Front-End - Conception et réalisation des interfaces utilisateurs adaptatives et de l'expérience interactive.*

### C1

> Concevoir et structurer des interfaces web en utilisant le langage HTML5 en appliquant des pratiques de codage sémantique avancées pour produire des sites conformes aux exigences des standards d'accessibilité du W3C et à l'optimisation pour le référencement (SEO).

- **Attendus :** Balises sémantiques HTML5, hiérarchie des titres, attributs ARIA et alt, conformité RGAA/WCAG, balises meta, données structurées, sitemap, audit Lighthouse.
- **Preuve Lexikos :** Structure sémantique des pages React, audit Lighthouse accessibilité et SEO.

### C2

> Créer et Intégrer, grâce au CSS3, des interfaces intuitives pour les utilisateurs (UI), en tenant compte de la compréhension approfondie de l'expérience utilisateurs (UX) et des meilleures pratiques en matière de design d'interaction

- **Attendus :** Intégration fidèle de maquettes, architecture CSS maintenable (BEM, Sass, utility-first), cohérence UI, retours UX, états d'interaction.
- **Preuve Lexikos :** Interface Tailwind, parcours quiz et répétition espacée.

### C3

> Élaborer et réaliser des interfaces web adaptatives en utilisant des techniques de Responsive Web Design, notamment avec l'aide d'un Framework dédié pour assurer une expérience utilisateur cohérente et de qualité sur tous types de terminaux.

- **Attendus :** Mobile-first, media queries, flex et grid, framework CSS dédié, tests multi-terminaux.
- **Preuve Lexikos :** Responsive Tailwind démontrable en live via DevTools.

### C4

> Implémenter des interactions côté client en utilisant JavaScript et TypeScript et respectant les standards ECMAScript pour concevoir des fonctionnalités interactives (validation de formulaires, animations…) permettant d’améliorer l’engagement utilisateur et l’interactivité du site web.

- **Attendus :** ES6+, TypeScript, manipulation du DOM, validation de formulaires, animations, gestion d'événements.
- **Preuve Lexikos :** Quiz interactifs, validation des formulaires, logique de répétition espacée.

### C5

> Optimiser la communication asynchrone entre les utilisateurs et les serveurs en développant des requêtes AJAX pour accroître la réactivité et la performance des applications web.

- **Attendus :** fetch/axios, async/await, gestion des erreurs et états de chargement, JSON, optimisation des échanges.
- **Preuve Lexikos :** Appels à l'API Lexikos visibles dans l'onglet Réseau.

### C6

> Structurer et Intégrer des interfaces utilisateur riches et réactives adaptées aux besoins spécifiques du projet en sélectionnant et utilisant des bibliothèques et des frameworks modernes pour améliorer la productivité et la maintenabilité du code.

- **Attendus :** Choix argumenté d'un framework, composants, gestion d'état, routage, maintenabilité.
- **Preuve Lexikos :** Application React complète en production.

---

## BLOC 2 : Concevoir et réaliser des applications et des services back-end sur des architectures serveur complexes.

*Activité : Back End – Conception et développement d'applications et API reposant sur des infrastructures de serveurs et de bases de données*

### C7

> Configurer et personnaliser l’environnement de développement en paramétrant un IDE et en utilisant le terminal afin de l'aligner de l'environnement de production cible.

- **Attendus :** IDE paramétré (extensions, linters, formatage), terminal, variables d'environnement, parité dev/prod.
- **Preuve Lexikos :** VS Code + ESLint/Prettier, docker compose local identique à la prod.

### C8

> Élaborer et implémenter des solutions back-end en appliquant la programmation orientée objet (POO), en utilisant des architectures MVC ainsi que les Frameworks adaptés pour structurer un code robuste et maintenable.

- **Attendus :** POO, MVC, principes SOLID, framework back-end, séparation des responsabilités.
- **Preuve Lexikos :** Express organisé en routes, contrôleurs, services, modèles.

### C9

> Optimiser et sécuriser les serveurs web, en ajustant les paramètres serveur et en employant des commandes avancées via le terminal pour améliorer les performances et la sécurité (SSH, MFA) des applications web en fonction de son OS (Linux, Windows).

- **Attendus :** Configuration serveur web, reverse proxy, HTTPS, SSH par clé, MFA, pare-feu, mises à jour, réglages de performance.
- **Preuve Lexikos :** VPS OVH : HTTPS, accès SSH, conteneurs.

### C10

> Élaborer et administrer des bases de données relationnelles (telles que MySQL ou PostgreSQL) et en utilisant SQL et en respectant les principes de normalisation pour assurer l'intégrité, la performance et la sécurité des données.

- **Attendus :** Modélisation relationnelle, normalisation, SQL (jointures, index, transactions), droits, MySQL/PostgreSQL.
- **Preuve Lexikos :** Pas de SQL sur Lexikos : s'appuyer sur AMF et la formation M2i.

### C11

> Concevoir et gérer l'administration des bases de données NoSQL, telles que le stockage de documents, les bases de données clé-valeur, en colonne ou les graphes, en tenant compte du besoin de l'application, pour optimiser et fluidifier l'utilisation de grandes volumétries de données non structurées.

- **Attendus :** Modélisation orientée documents, index, agrégations, administration MongoDB, volumétrie.
- **Preuve Lexikos :** Schémas Mongoose, MongoDB conteneurisé.

### C12

> Arbitrer et décider du choix entre les bases de données relationnelles et NoSQL en tenant compte des caractéristiques de chaque catégorie de base de données pour optimiser l'application en fonction de ses besoins.

- **Attendus :** Critères de choix SQL vs NoSQL : structure des données, relations, cohérence, évolutivité.
- **Preuve Lexikos :** Argumentaire du choix MongoDB pour Lexikos.

### C13

> Mettre en œuvre des stratégies de sauvegarde et de récupération en tenant compte des politiques de sécurité et de continuité d'entreprise pour protéger les données contre les pertes et les sinistres.

- **Attendus :** Politique de sauvegarde, fréquence, rétention, stockage externalisé, restauration testée, PRA/PCA.
- **Preuve Lexikos :** Script backup-mongodb.sh + cron + rétention 30 jours. Restauration testée à documenter.

### C14

> Concevoir des API (application programming interface) en utilisant des architectures et des langages de programmation pertinents en prenant en compte les besoins d'intégration et d'interopérabilité des systèmes pour faciliter et optimiser les échanges de données entre différents services.

- **Attendus :** Conception REST, ressources, verbes et codes HTTP, versionnement, interopérabilité, intégration de services tiers.
- **Preuve Lexikos :** API REST + intégration Mistral AI et service email.

### C15

> Sécuriser les API, en mettant en œuvre des protocoles d'authentification et d'autorisation en utilisant des outils et des pratiques de sécurité standardisés pour protéger les données et les interactions contre les accès non autorisés et les vulnérabilités.

- **Attendus :** Authentification (JWT, OAuth2), autorisation par rôles, hachage des mots de passe, OWASP API, CORS, rate limiting.
- **Preuve Lexikos :** JWT + bcrypt + rôles, faille d'accès corrigée et traçable dans Git.

### C16

> Réaliser différents tests sur les API (tests unitaires, d'intégration, de charge et de performance) avec des frameworks pour garantir la fiabilité et la robustesse des API dans des conditions d'utilisation variées et à fort trafic.

- **Attendus :** Tests unitaires, d'intégration, de charge et de performance sur l'API, frameworks dédiés.
- **Preuve Lexikos :** Tests Jest des services. Intégration, charge et TDD restent à montrer sur Lexikos.

### C17

> Réaliser et maintenir la documentation de l'API en collaboration avec les développeurs, en utilisant des outils tels que Swagger pour les API ou des générateurs de documentation de code dans le but de faciliter la maintenabilité et l'évolutivité de l'API.

- **Attendus :** Documentation OpenAPI/Swagger, génération de doc de code, tenue à jour avec l'équipe.
- **Preuve Lexikos :** À implémenter : Swagger sur l'API Lexikos.

---

## BLOC 3 : Élaborer, intégrer et optimiser les architectures de systèmes d'information et garantir l'industrialisation du développement.

*Activité : Architectures Systèmes d'Information, Cloud and Devops pour l'intégration et la livraison continue des solutions logicielles.*

### C18

> Évaluer les besoins et intégrer les solutions cloud, en tenant compte des exigences de flexibilité et d'évolutivité, pour améliorer et moderniser les architectures des systèmes d'information.

- **Attendus :** Analyse des besoins cloud (IaaS, PaaS, SaaS), flexibilité, évolutivité, modernisation du SI.
- **Preuve Lexikos :** Choix VPS OVH, services tiers (Mistral AI).

### C19

> Analyser les besoins techniques en s'appuyant sur des connaissances avancées des structures telles que monolithiques, microservices, serverless ou n-tiers pour sélectionner l'architecture d'application la plus appropriée aux exigences spécifiques du projet.

- **Attendus :** Monolithe, microservices, serverless, n-tiers : critères de choix argumentés.
- **Preuve Lexikos :** Monolithe conteneurisé, API prête pour un client mobile.

### C20

> Administrer et rationaliser les plateformes cloud en collaborant avec des experts et, en optimisant la mobilisation des ressources et des données hébergées pour assurer l'équilibre entre la performance élevée et la gestion budgétaire efficace des services cloud.

- **Attendus :** Administration d'une plateforme cloud, dimensionnement, coûts, collaboration avec des experts.
- **Preuve Lexikos :** Administration du VPS, suivi des coûts d'hébergement.

### C21

> Assurer la gestion et le suivi des révisions de code source à l’aide d'un logiciel de gestion de versions comme Git afin de garantir la traçabilité des changements et la coordination des versions au sein de l’équipe de développement.

- **Attendus :** Git : branches, commits atomiques, messages normés, tags, historique, traçabilité.
- **Preuve Lexikos :** Historique Git du dépôt Lexikos.

### C22

> Définir et appliquer des procédures de fusion de code et de résolution de conflits à l'aide de plateformes telles que GitHub ou GitLab pour faciliter le travail collaboratif, la révision de code et l'intégration continue (CI).

- **Attendus :** Stratégie de branches, pull/merge requests, revue, résolution de conflits, CI sur PR.
- **Preuve Lexikos :** À montrer : flux branche → PR → checks sur Lexikos (aujourd'hui surtout sur Wanderline).

### C23

> Développer des environnements virtualisés en utilisant une plateforme conteneurisation pour standardiser et simplifier le déploiement d'applications sur tous types d'infrastructure.

- **Attendus :** Dockerfile, images, docker compose, volumes, réseaux, parité des environnements.
- **Preuve Lexikos :** Docker compose en production avec MongoDB conteneurisé.

### C24

> Coordonner les containeurs avec des logiciels d'orchestration en garantissant l'activité des pipelines d'intégration et de déploiement continus pour optimiser la résilience et la performance des applications.

- **Attendus :** Orchestration (Kubernetes, Swarm), résilience, scaling, lien avec les pipelines CI/CD.
- **Preuve Lexikos :** Non pratiqué : argumenter l'arbitrage docker compose.

### C25

> Automatiser la gestion et le déploiement des ressources cloud en appliquant les principes DevOps et en paramétrant les mesures de sécurité des applications et des données hébergées pour l’optimisation continue des processus de développement et de déploiement.

- **Attendus :** Pipeline CI/CD, déploiement automatisé, gestion des secrets, sécurité, infrastructure as code.
- **Preuve Lexikos :** Workflow GitHub Actions de Lexikos. Vérifier que les tests bloquent le déploiement.

---

## BLOC 4 : Gérer les projets numériques et collaborer à l'amélioration continue des systèmes d'information.

*Activité : Étude, Management de Projet Numérique et amélioration continue du SI.*

### C26

> Analyser les besoins des utilisateurs et des parties prenantes à partir de résultats d'enquêtes et d'interviews pour identifier les objectifs et déterminer les fonctionnalités du projet numérique.

- **Attendus :** Enquêtes, interviews, personas, recueil et priorisation des besoins, objectifs du projet.
- **Preuve Lexikos :** Cadrage de Lexikos : public cible, fonctionnalités priorisées.

### C27

> Étudier et évaluer la faisabilité du projet en tenant compte de la mobilisation des ressources humaines et matériels disponibles et nécessaires et de la pertinence et la faisabilité technique du projet numérique, afin d'atteindre les objectifs de l'application.

- **Attendus :** Étude de faisabilité technique, humaine et matérielle, analyse des risques.
- **Preuve Lexikos :** Faisabilité de l'intégration IA, coûts d'API, contraintes d'hébergement.

### C28

> Collaborer activement à la rédaction du cahier des charges fonctionnels et/ou à la note de cadrage en évaluant les différentes solutions techniques et les performances attendues pour chaque fonctionnalité afin de définir les modalités du projet.

- **Attendus :** Cahier des charges fonctionnel, note de cadrage, comparaison de solutions, exigences de performance.
- **Preuve Lexikos :** Rédiger a posteriori une note de cadrage Lexikos comme preuve.

### C29

> Planifier et conduire le projet en appliquant des méthodologies de gestion de projet (méthodologie en V, en cascade ou Agile) selon le contexte, pour une planification et exécution efficaces des projets informatiques en respectant le plan de projet établi et en tenant compte des risques identifiés.

- **Attendus :** Méthodes Agile, V, cascade : choix selon le contexte, planification, gestion des risques.
- **Preuve Lexikos :** Organisation itérative de Lexikos. Renfort : 6 ans de Scrum chez Accenture.

### C30

> Coordonner les équipes de projet, en utilisant des outils collaboratifs pour la planification et le suivi des tâches et en accompagnant les compétences individuelles et collectives de l'équipe afin de garantir l'alignement des ressources avec les besoins du projet et d'ajuster la planification en fonction des écarts identifiés.

- **Attendus :** Outils collaboratifs (Jira, Trello, GitHub Projects), suivi des tâches, accompagnement de l'équipe.
- **Preuve Lexikos :** Renfort Accenture. Sur Lexikos : tableau de tâches ou issues GitHub.

### C31

> Effectuer un suivi continu des indicateurs de performance, en intégrant des outils de suivi budgétaire et de gestion des coûts, pour maintenir une gestion financière précise et proactive du projet.

- **Attendus :** KPI, suivi budgétaire, coûts, outils de pilotage financier.
- **Preuve Lexikos :** Coûts d'infra et d'API Mistral de Lexikos, à chiffrer.

### C32

> Réaliser des évaluations périodiques de l'avancement de projet par des revues de performance et des rapports d'étape, pour mesurer l'atteinte des objectifs et l'efficacité des méthodologies de gestion de projet mises en œuvre.

- **Attendus :** Revues de projet, rapports d'étape, rétrospectives, mesure des objectifs.
- **Preuve Lexikos :** Renfort Scrum Accenture (sprint reviews, rétros).

### C33

> Effectuer des revues de code en utilisant des outils d'analyse en respectant les principes de développement et les standards de l'entreprise, pour assurer une qualité et une maintenabilité élevées du code.

- **Attendus :** Revue de code, outils d'analyse statique (ESLint, SonarQube), standards, hooks.
- **Preuve Lexikos :** ESLint/Prettier, revues de PR. Renfort : revues quotidiennes chez Accenture.

### C34

> Concevoir et mettre en œuvre des tests automatisés en employant les meilleures pratiques et outils de test et en tenant compte des contraintes techniques et des exigences de performance pour valider la fiabilité et l'efficacité des applications.

- **Attendus :** Stratégie de tests automatisés (pyramide), unitaires, intégration, e2e, couverture, performance.
- **Preuve Lexikos :** Jest sur Lexikos. e2e et couverture à ajouter pour égaler Wanderline.

### C35

> Mettre en place, éditer et maintenir les documentations techniques complètes des applications et partager les connaissances au sein de l'équipe, en utilisant des plateformes collaboratives pour faciliter la maintenance et assurer l'évolutivité des systèmes.

- **Attendus :** Documentation technique, README, guides d'exploitation, wiki, partage de connaissances.
- **Preuve Lexikos :** Guides MongoDB (setup, diagnostic), README.
