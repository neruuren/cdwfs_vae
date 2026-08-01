# BLOC 2 : Concevoir et réaliser des applications et des services back-end sur des architectures serveur complexes

## Synthèse du bloc

**Connaissances, compétences et aptitudes mobilisées :**

- Maîtrise de Node.js/Express pour le développement backend
- Application de la POO et des principes SOLID (formation Java/Spring, mise en pratique sur Wanderline)
- Approche TDD (Test-Driven Development) sur les développements récents
- Administration de bases de données SQL et NoSQL (MongoDB)
- Conception, sécurisation et tests d'API REST
- Configuration d'environnements de développement sous Linux

**Comment avez-vous acquis ces compétences ?**

- Expérience A M F (2011-2015) - développement autonome d'une application intranet PHP/MySQL
- Formation M2i Java Full Stack (2018) - Java, Spring, SQL
- Formation Octo Academy « Pratiques de dev de qualité » (2020) - TDD
- 6 années d'expérience professionnelle chez Altima/Accenture (2018-2024) - SFCC backend
- Projets personnels et freelance (2024-2026) - Node.js/Express, MongoDB, API REST, tests automatisés

---

## ⚠️ Note sur les preuves et la confidentialité

**Contrainte professionnelle :** Durant mes 6 années chez Altima/Accenture, j'ai travaillé exclusivement sur des projets clients soumis à des clauses de confidentialité strictes (NDA). À chaque fin de mission, j'étais contractuellement tenu de supprimer tout document, code source ou capture d'écran relatif aux projets.

**Ce que je peux fournir comme preuves :**
| Type de preuve | Disponibilité |
|----------------|---------------|
| **Projets personnels** | ✅ Code source, sites en ligne, dépôts GitHub |
| **Certification Salesforce** | ✅ Certificat officiel SFCC B2C Commerce Developer |
| **Témoignages d'anciens collègues** | ⚠️ Attestations générales possibles sur demande |
| **Code source des projets clients** | ❌ Non disponible (NDA) |

**Projets personnels démontrables :**

- 🌐 Lexikos : https://lexikos.eu (Node.js/Express, MongoDB, API REST, JWT, intégration API Mistral AI, tests Jest)
- 🌐 Wanderline : https://wanderline.gregory-day.fr (repo afterLook — Node.js/Express, MongoDB, TDD, ~50 fichiers de tests backend, module de sauvegarde/restauration testé)
- 🌐 CV en ligne : https://cv.gregory-day.fr/ (Node.js/Express, interface admin, administration SEO)
- 📁 Dépôts GitHub personnels correspondants

---

## C7 : Configuration de l'environnement de développement (IDE, terminal)

**Niveau de maîtrise : 4** ⭐⭐⭐⭐

> Réalisé avec aisance, en autonomie totale

### Description des activités

**Contexte :**
Travail quotidien sous Linux avec VS Code comme IDE principal. Utilisation intensive du terminal pour l'administration système et le développement.

**Actions réalisées :**

- Configuration personnalisée de VS Code (extensions, snippets, paramètres)
- Utilisation quotidienne du terminal Linux pour :
  - Gestion des packages (npm, apt)
  - Commandes Git
  - Administration de serveurs (SSH)
  - Scripts bash pour automatisation
- Configuration d'environnements de développement Node.js alignés avec la production
- Gestion des variables d'environnement (.env) pour séparer dev/prod

**Résultats observés :**

- Environnement de développement optimisé et productif
- Déploiement fluide entre environnements local et production

**Preuves disponibles :**

- ✅ Configuration visible dans les projets GitHub (package.json, scripts npm)
- ✅ Serveurs de production configurés (Lexikos, WebCV)

---

## C8 : Programmation orientée objet, architectures MVC et frameworks

**Niveau de maîtrise : 4** ⭐⭐⭐⭐

> Réalisé avec aisance, en autonomie totale

### Description des activités

**Contexte :**
Formation initiale en Java/Spring avec POO, pratique professionnelle sur SFCC, puis conception en autonomie totale d'applications Node.js/Express structurées selon les principes SOLID.

**Actions réalisées :**

- **Formation Java/Spring (M2i 2018) :**
  - Apprentissage des concepts POO (encapsulation, héritage, polymorphisme)
  - Développement d'applications avec architecture MVC
  - Utilisation de Spring Boot pour les API REST

- **Node.js/Express (projets personnels) :**
  - Architecture MVC sur Lexikos, WebCV et Wanderline
  - Structuration du code en modules (routes, controllers, models, services)
  - Middleware pour l'authentification et la validation
  - **Wanderline** : application des 5 principes SOLID (responsabilité unique, ouvert/fermé, substitution de Liskov, ségrégation des interfaces, inversion des dépendances) et de design patterns quand ils apportent de la clarté, méthodologie documentée dans le dépôt

- **SFCC chez Accenture :**
  - Développement backend sur la plateforme Salesforce Commerce Cloud
  - Utilisation des controllers SFCC et du modèle de données propriétaire

**Résultats observés :**

- Applications structurées et maintenables
- Code modulaire facilitant les évolutions
- Architecture testable (l'inversion des dépendances permet les tests unitaires avec doublures)

**Preuves disponibles :**

- ✅ Architecture visible dans le code de Lexikos, WebCV et Wanderline (SOLID documenté dans le README)
- ✅ Certification SFCC B2C Commerce Developer
- ⚠️ Projets SFCC clients : témoignage possible (NDA)

---

## C9 : Optimisation et sécurisation des serveurs web

**Niveau de maîtrise : 3** ⭐⭐⭐

> Réalisé avec maîtrise et/ou de façon récurrente seul ou en collaboration

### Description des activités

**Contexte :**
Déploiement et maintenance de serveurs pour les projets personnels sous Linux.

**Actions réalisées :**

- Configuration de serveurs Node.js en production
- Mise en place de HTTPS (certificats SSL/TLS)
- Sécurisation des accès SSH (clés, désactivation mot de passe)
- Configuration de reverse proxy (Nginx)
- Gestion des processus avec PM2

**Résultats observés :**

- Serveurs sécurisés et stables en production
- Sites accessibles en HTTPS

**Preuves disponibles :**

- ✅ Sites en production sécurisés : https://lexikos.eu, https://cv.gregory-day.fr/
- ✅ Configuration serveur documentable

---

## C10 : Bases de données relationnelles (SQL, MySQL, PostgreSQL)

**Niveau de maîtrise : 2** ⭐⭐

> Réalisé ponctuellement avec un faible niveau de maîtrise / besoin d'une assistance modérée

### Description des activités

**Contexte :**
Pratique professionnelle de MySQL chez A M F (2011-2015), apprentissage formalisé en formation, mais peu d'utilisation récente (SFCC utilise son propre système de données, projets personnels sur MongoDB).

**Actions réalisées :**

- **Expérience A M F (2011-2015) :**
  - Conception et administration de la base MySQL de l'application intranet développée en autonomie (PHP/MySQL)
  - Modélisation des tables, requêtes CRUD, jointures

- **Formation M2i (2018) :**
  - Apprentissage SQL : SELECT, INSERT, UPDATE, DELETE
  - Jointures, agrégations, sous-requêtes
  - Principes de normalisation des données

- **Pratique ponctuelle depuis :**
  - Requêtes SQL pour des analyses ponctuelles
  - Pas d'administration de base de données SQL en production récemment

**Résultats observés :**

- Capacité à écrire des requêtes SQL de complexité moyenne
- Compréhension des principes relationnels

**Preuves disponibles :**

- ⚠️ Expérience A M F ancienne (2011-2015), pas de preuve matérielle récente
- 📋 Option pour renforcer : mini-projet personnel utilisant PostgreSQL ou MySQL

---

## C11 : Bases de données NoSQL (MongoDB, etc.)

**Niveau de maîtrise : 3** ⭐⭐⭐

> Réalisé avec maîtrise et/ou de façon récurrente seul ou en collaboration

### Description des activités

**Contexte :**
Utilisation de MongoDB sur les trois projets personnels en production (Lexikos, WebCV, Wanderline).

**Actions réalisées :**

- Conception des schémas de données MongoDB pour Lexikos, WebCV et Wanderline
- Utilisation de Mongoose pour la modélisation des données
- Opérations CRUD sur les collections
- Indexation pour optimiser les performances
- Gestion des relations entre documents (références, populate)
- Scripts de migration de données (Wanderline)
- MongoDB conteneurisé (Docker) en production, base en mémoire (mongodb-memory-server) pour les tests

**Résultats observés :**

- Base de données fonctionnelle et performante
- Schéma adapté aux besoins de l'application

**Preuves disponibles :**

- ✅ Schéma MongoDB visible dans le code de Lexikos
- ✅ Application en production utilisant MongoDB

---

## C12 : Choix entre bases relationnelles et NoSQL

**Niveau de maîtrise : 3** ⭐⭐⭐

> Réalisé avec maîtrise et/ou de façon récurrente seul ou en collaboration

### Description des activités

**Contexte :**
Choix technologiques pour les projets personnels.

**Actions réalisées :**

- Analyse des besoins pour Lexikos : données flexibles, pas de relations complexes → MongoDB
- Compréhension des cas d'usage :
  - SQL : transactions, relations complexes, intégrité référentielle
  - NoSQL : flexibilité du schéma, scalabilité horizontale, données non structurées

**Résultats observés :**

- Choix technologique adapté aux besoins du projet
- Capacité à justifier le choix auprès d'un jury

**Preuves disponibles :**

- ✅ Justification du choix MongoDB pour Lexikos

---

## C13 : Stratégies de sauvegarde et récupération des données

**Niveau de maîtrise : 3** ⭐⭐⭐

> Réalisé avec maîtrise et/ou de façon récurrente seul ou en collaboration

### Description des activités

**Contexte :**
Mise en place de stratégies de sauvegarde automatisées et testées sur les projets en production.

**Actions réalisées :**

- **Lexikos :** script de sauvegarde MongoDB automatisé (`backup-mongodb.sh`) exécuté par cron : mongodump dans le conteneur Docker, compression des archives, rotation avec rétention de 30 jours
- **Wanderline :** module de sauvegarde/restauration intégré à l'application (BackupService), couvert par des tests unitaires et par un test end-to-end du cycle complet sauvegarde → restauration
- Sauvegarde des fichiers de configuration serveur
- Exclusion des fichiers `.env` de production lors des déploiements pour ne jamais écraser les secrets

**Résultats observés :**

- Sauvegardes automatisées, régulières et vérifiables
- Procédure de restauration testée (et non simplement supposée fonctionner)

**Preuves disponibles :**

- ✅ Script `backup-mongodb.sh` avec cron et rétention (dépôt Lexikos)
- ✅ BackupService et ses tests, test e2e de restauration (dépôt afterLook/Wanderline)

---

## C14 : Conception d'API REST

**Niveau de maîtrise : 3** ⭐⭐⭐

> Réalisé avec maîtrise et/ou de façon récurrente seul ou en collaboration

### Description des activités

**Contexte :**
Conception d'API REST complètes pour Lexikos, le WebCV et Wanderline.

**Actions réalisées :**

- **Lexikos :**
  - API REST pour la gestion des données de l'application
  - Routes organisées par ressources (RESTful)
  - Gestion des codes de réponse HTTP appropriés
  - Intégration de services tiers : API Mistral AI (traduction, génération de packs de vocabulaire), service d'envoi d'emails

- **WebCV :**
  - API pour l'interface d'administration
  - Endpoints pour la mise à jour du contenu (CV web + version imprimable, réglages SEO)

- **Wanderline :**
  - API REST conçue en TDD (routes photos, articles, pinpoints, timeline, backup, administration)
  - Endpoints de partage public de contenus

**Résultats observés :**

- API fonctionnelles et utilisées en production sur trois applications
- Architecture RESTful cohérente, interopérabilité avec des services externes (Mistral AI)

**Preuves disponibles :**

- ✅ API en production sur Lexikos, WebCV et Wanderline
- ✅ Code source disponible

---

## C15 : Sécurisation des API (authentification, autorisation)

**Niveau de maîtrise : 3** ⭐⭐⭐

> Réalisé avec maîtrise et/ou de façon récurrente seul ou en collaboration

### Description des activités

**Contexte :**
Sécurisation des API avec authentification JWT sur les trois projets en production (Lexikos, WebCV, Wanderline).

**Actions réalisées :**

- Implémentation de l'authentification par JWT (JSON Web Tokens)
- Middleware de vérification des tokens
- Gestion des rôles et permissions (rôles `user`/`admin` sur Wanderline, promotion admin via script dédié, aucun compte admin par défaut)
- Protection des routes sensibles, correction d'une faille d'accès public à des ressources protégées sur Lexikos (traçable dans l'historique Git)
- Hashage des mots de passe (bcrypt)
- Gestion des secrets hors dépôt (variables d'environnement, `.env` exclus du versioning et des déploiements)

**Résultats observés :**

- API sécurisées avec authentification robuste
- Accès contrôlé aux ressources protégées, séparation claire des rôles

**Preuves disponibles :**

- ✅ Authentification JWT + bcrypt visible sur les trois dépôts
- ✅ Tests automatisés couvrant les scénarios d'authentification (login/logout e2e sur Wanderline)

---

## C16 : Tests des API (unitaires, intégration, charge)

**Niveau de maîtrise : 3** ⭐⭐⭐

> Réalisé avec maîtrise et/ou de façon récurrente seul ou en collaboration

### Description des activités

**Contexte :**
Formation Octo Academy « Pratiques de dev de qualité » (TDD, 2020), puis mise en pratique systématique sur les projets personnels récents.

**Actions réalisées :**

- **Wanderline (TDD) :** toute nouvelle fonctionnalité démarre par l'écriture du test qui échoue, avant le code qui le fait passer
  - ~50 fichiers de tests backend : tests unitaires et d'intégration des routes API avec Jest + Supertest
  - Base de données de test en mémoire (mongodb-memory-server) pour des tests d'intégration isolés et reproductibles
  - Mesure de la couverture de code (`jest --coverage`), exécutée dans la CI
- **Lexikos :** tests Jest des services backend (services Mistral AI, service email, serveur, scripts d'import)
- Tests exécutés automatiquement en pré-commit (hook Husky) et dans le pipeline GitHub Actions, bloquants avant tout déploiement
- Tests manuels complémentaires des API avec Postman

**Résultats observés :**

- Régressions détectées avant la mise en production
- Refactorisations sécurisées par la couverture de tests

**Preuves disponibles :**

- ✅ Suites de tests visibles dans les dépôts afterLook/Wanderline et Lexikos
- ✅ Exécution des tests visible dans l'historique GitHub Actions
- ✅ Certification Octo Academy « Pratiques de dev de qualité » (TDD)
- 📋 Marge de progression : tests de charge/performance (k6, Artillery) non pratiqués à ce jour

---

## C17 : Documentation des API (Swagger, etc.)

**Niveau de maîtrise : 1** ⭐

> Jamais réalisé ou participation mineure

### Description des activités

**Contexte :**
Connaissance de Swagger mais pas encore mis en pratique.

**Actions réalisées :**

- Documentation informelle des endpoints (README, commentaires)
- Pas d'utilisation de Swagger/OpenAPI à ce jour

**Résultats observés :**

- API fonctionnelles mais documentation formelle absente

**Preuves disponibles :**

- ⚠️ Compétence à acquérir
- 📋 À faire : documenter l'API Lexikos avec Swagger

---

## 📋 Actions à mener pour renforcer le dossier

| Compétence              | Action                                                   | Priorité | Statut       |
| ----------------------- | -------------------------------------------------------- | -------- | ------------ |
| **C17** (Documentation) | Documenter une API (Lexikos ou Wanderline) avec Swagger  | Haute    | ⏳ À faire   |
| **C10** (SQL)           | Option : mini-projet avec PostgreSQL ou MySQL            | Basse    | ⏳ Optionnel |
| **C16** (Tests)         | ~~Ajouter des tests Jest~~                               | -        | ✅ Fait      |
| **C13** (Sauvegardes)   | ~~Automatiser les backups MongoDB avec cron~~            | -        | ✅ Fait      |

> 💡 **Conseil :** C17 (Swagger) est désormais la seule compétence du bloc au niveau 1. C'est le dernier vrai chantier technique du dossier (~2-3h avec swagger-jsdoc + swagger-ui-express).
