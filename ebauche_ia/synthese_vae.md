> ⚠️ **Brouillon généré par IA, non validé par le candidat.** Les niveaux et les formulations ne sont pas fiables. Matière brute à vérifier, pas un document à présenter.

# 📊 Synthèse VAE - Concepteur Développeur Web Full Stack (RNCP 39608)

> Ce document donne l'état du dossier : niveaux, couverture, points faibles, plan d'action.
> Tout ce qui concerne l'oral (démonstrations, réponses types, kit) est dans [presentation_jury.md](presentation_jury.md).

> **Dernière mise à jour :** 30 septembre 2026 (version initiale : février 2026)
> **Objectif :** obtention du titre de niveau 6 (Bac+3), certifié par 3iL
> **Projet de démonstration unique :** Lexikos (https://lexikos.eu), dépôt `neruuren/lexikos`

---

## 🎯 Vue d'ensemble des compétences

### Légende des niveaux

| Niveau | Signification | Statut |
| ------ | ------------- | ------ |
| 4 | Réalisé avec aisance, en autonomie totale | 🟢 Acquis |
| 3 | Réalisé avec maîtrise, seul ou en collaboration | 🟢 Acquis |
| 2 | Réalisé ponctuellement, assistance modérée | 🟡 À renforcer |
| 1 | Jamais réalisé ou participation mineure | 🔴 À acquérir |

---

## 📋 Tableau récapitulatif des 35 compétences

### BLOC 1 : Front-end (C1-C6)

| #   | Compétence | Niveau | Statut | Preuve principale |
| --- | ---------- | ------ | ------ | ----------------- |
| C1  | HTML5, SEO, accessibilité | 4 | 🟢 | Audit d'accessibilité Lexikos, 297 attributs ARIA, prérendu SEO, sitemap |
| C2  | CSS3, UI/UX | 4 | 🟢 | Tailwind, mode sombre, reprise responsive et tactile ; refontes Accenture |
| C3  | Responsive, framework CSS | 4 | 🟢 | Lexikos mobile-first, PWA installable |
| C4  | JavaScript, TypeScript | 4 | 🟢 | 18 hooks, mode hors ligne ; JS depuis 2011, TypeScript sur le POC headless |
| C5  | AJAX, asynchrone | 4 | 🟢 | Instance axios, renouvellement du jeton, WebSocket ; panier Picard |
| C6  | Frameworks | 4 | 🟢 | React 19, i18n en 4 langues ; Vue.js et Nuxt.js chez Accenture |

**Bloc 1 : ✅ validé.** Toutes les compétences sont au niveau 4.

---

### BLOC 2 : Back-end (C7-C17)

| #   | Compétence | Niveau | Statut | Preuve principale |
| --- | ---------- | ------ | ------ | ----------------- |
| C7  | IDE, terminal | 4 | 🟢 | Conteneurs de dev, Husky, conventions pour agents IA |
| C8  | POO, MVC, frameworks | 4 | 🟢 | Express en couches (34 routes, 57 services, 30 modèles) ; M2i Java |
| C9  | Sécurisation serveurs | 3 | 🟢 | VPS OVH : Nginx, HTTPS, PM2 en cluster, SSH par clé |
| C10 | SQL | 2 | 🟡 | MySQL chez A M F (2011-2015), BTS, M2i ; rien de récent |
| C11 | NoSQL | 4 | 🟢 | 30 modèles, audit d'index mesuré, Redis ciblé |
| C12 | Choix SQL / NoSQL | 3 | 🟢 | Choix MongoDB argumenté, paiements protégés côté serveur |
| C13 | Sauvegardes | 3 | 🟢 | Cron 2 fois par jour, copie hors site B2, script de restauration, runbook |
| C14 | API REST | 3 | 🟢 | API `/api/v1`, Mistral, OpenAI, Stripe, PayPal ; intégrations Accenture |
| C15 | Sécurité API | 3 | 🟢 | Code OTP, JWT et refresh token, audit de sécurité du 2026-08-28 |
| C16 | Tests API | 4 | 🟢 | 89 fichiers Jest, Supertest, tests de charge k6 |
| C17 | Documentation API | 1 | 🔴 | Aucune documentation Swagger ; **priorité technique** |

**Bloc 2 : 🟢 quasi validé.** Il reste C17 (Swagger) et C10 à argumenter.

---

### BLOC 3 : Architecture, cloud, DevOps (C18-C25)

| #   | Compétence | Niveau | Statut | Preuve principale |
| --- | ---------- | ------ | ------ | ----------------- |
| C18 | Solutions cloud | 3 | 🟢 | VPS OVH, B2, IA en SaaS ; SFCC en PaaS pendant 5 ans |
| C19 | Architectures | 3 | 🟢 | Monolithe modulaire, processus WebSocket séparé, PWA ; POC headless |
| C20 | Administration cloud | 3 | 🟢 | Dimensionnement mesuré, indicateurs de capacité, 4 runbooks |
| C21 | Git | 4 | 🟢 | 1 088 commits, 102 branches datées |
| C22 | Fusion, CI | 3 | 🟢 | 61 pull requests, hook Husky ; pas encore de vérification CI sur les PR |
| C23 | Conteneurs | 3 | 🟢 | MongoDB et Redis en conteneurs ; Dockerfile et Compose sur MyWebCV |
| C24 | Orchestration | 1 | 🔴 | Théorie (cours Udemy Docker & Kubernetes) ; arbitrage argumenté |
| C25 | CI/CD | 3 | 🟢 | Déploiement SSH automatisé sans interruption ; tests pas encore en CI |

**Bloc 3 : 🟢 couvert.** C24 reste au niveau 1. C25 repasse au niveau 4 dès que les tests bloquent le déploiement.

---

### BLOC 4 : Projet et qualité (C26-C35)

| #   | Compétence | Niveau | Statut | Preuve principale |
| --- | ---------- | ------ | ------ | ----------------- |
| C26 | Analyse des besoins | 3 | 🟢 | Besoin Lexikos, bêta plafonnée, feedback, télémétrie ; outil A M F |
| C27 | Faisabilité | 2 | 🟡 | Coûts IA, capacité, synthèse vocale évalués, mais pas d'étude écrite |
| C28 | Cahier des charges | 2 | 🟡 | `CLAUDE.md` comme spécification vivante ; contributeur en équipe |
| C29 | Méthodes, planification | 3 | 🟢 | Lexikos itératif sur 18 mois ; Scrum en formation et chez Accenture |
| C30 | Coordination | 2 | 🟡 | Rôle d'exécution en équipe ; encadrement d'agents IA |
| C31 | Indicateurs, budget | 2 | 🟡 | Coûts IA par token, analytics, seuils de capacité |
| C32 | Rapports d'étape | 2 | 🟡 | Rapport de campagne de charge, suivi d'incident |
| C33 | Revues de code | 4 | 🟢 | ESLint, Prettier, Husky, audits de sécurité et d'accessibilité |
| C34 | Tests automatisés | 3 | 🟢 | Jest, Supertest, k6 ; ni tests front ni tests de bout en bout |
| C35 | Documentation | 3 | 🟢 | `CLAUDE.md`, 4 runbooks, rapports de charge, guides MongoDB |

**Bloc 4 : 🟢 largement couvert.** Les niveaux 2 correspondent surtout à des activités de chef de projet.

**Veille technologique multilingue :** attendue par la fiche France Compétences en bloc 4. Elle est couverte par n8n, la documentation officielle en anglais et des cours en anglais. Un rapport de veille reste à rédiger.

---

## 📈 Synthèse globale

### Répartition par niveau

| Niveau | Nombre | Pourcentage |
| ------ | ------ | ----------- |
| 🟢 Niveau 4 | 12 | 34% |
| 🟢 Niveau 3 | 15 | 43% |
| 🟡 Niveau 2 | 6 | 17% |
| 🔴 Niveau 1 | 2 | 6% |

### Compétences acquises (niveau 3-4) : 27/35 (77%)

### Compétences à renforcer (niveau 2) : 6/35 — C10, C27, C28, C30, C31, C32

### Compétences à acquérir (niveau 1) : 2/35 — C17, C24

> **Repère 3iL :** couvrir environ 80 à 85 % des compétences. Avec Swagger (C17 au niveau 3), le dossier atteint 28/35, soit 80 %.
>
> **Changements du 30 septembre 2026 :** recoupement avec le CV et le dépôt Lexikos. C11 et C16 passent à 4, C31 passe à 2. C25 passe de 4 à 3, parce que la CI de Lexikos, seul projet montré, ne lance pas les tests.

---

## 🔴 Compétences de niveau 1 : analyse

| Compétence | Importance | Action |
| ---------- | ---------- | ------ |
| **C17** - Documentation d'API | **Haute** | Documenter l'API Lexikos en OpenAPI avec Swagger UI. C'est la seule action qui fait passer le seuil de 80 %. |
| **C24** - Orchestration | Faible\* | Théorie acquise en formation. Argumenter pourquoi PM2 en cluster suffit pour un seul serveur et environ 1 600 joueurs actifs. |

> \*Généralement considérée comme secondaire pour un profil développeur de niveau 6.

## 🟡 Compétences de niveau 2 : angles de défense

| Compétence | Angle pour le jury |
| ---------- | ------------------ |
| **C10** - SQL | MySQL en autonomie chez A M F, BTS et M2i. Montrer le modèle relationnel équivalent de Lexikos. |
| **C27/C28** - Faisabilité, spécifications | Évaluations réelles sur Lexikos (coûts IA, capacité). Rédiger une note de cadrage pour une évolution. |
| **C30** - Coordination | Rôle d'exécution assumé, cohérent avec le titre. Encadrement d'agents IA par des conventions écrites. |
| **C31** - Indicateurs, budget | Suivi réel des coûts d'IA et de la capacité. Pas de budget global. |
| **C32** - Rapports | Rapport de campagne de charge avec six corrections mesurées. |

---

## 📝 Plan d'action restant

### Technique, sur le dépôt Lexikos

1. ⏳ **Swagger** sur l'API : C17 de 1 à 3, seuil de 80 % atteint
2. ⏳ **Tests dans la CI**, bloquants avant déploiement et sur les PR : C22 et C25
3. ⏳ Test de restauration automatique de la dernière sauvegarde : C13
4. ⏳ Tests front (Vitest) et quelques parcours de bout en bout (Playwright) : C34
5. ⏳ Optionnel : conteneuriser l'API, pour montrer un Dockerfile sur Lexikos : C23

### Documents

1. ⏳ Note de cadrage d'une évolution de Lexikos : C27, C28
2. ⏳ Rapport de veille multilingue : bloc 4
3. ⏳ Schéma d'architecture de Lexikos
4. ⏳ Captures d'un audit Lighthouse

### Préparation orale

1. Répondre aux éléments marqués `[À CONFIRMER]` dans les fichiers de bloc
2. Obtenir 1 ou 2 attestations d'anciens collègues d'Accenture
3. Suivre [presentation_jury.md](presentation_jury.md), qui regroupe démonstrations, réponses types et kit

---

## ✅ Conclusion

### Position actuelle : solide

- **27 compétences sur 35** au niveau 3 ou 4 (77 %)
- Bloc 1 validé, blocs 2 et 3 couverts, bloc 4 largement couvert
- **Lexikos** fournit à lui seul des preuves complètes : 1 088 commits, 89 fichiers de tests, tests de charge, audit de sécurité, runbooks

### Ce qui reste

- **Swagger (C17)** pour passer le seuil de 80 %
- **Tests dans la CI** pour consolider C22, C25 et C34
- Le reste est de la **rédaction** et de la **préparation orale**

### Les compétences faibles sont défendables

- C24 (orchestration) : arbitrage argumenté par des mesures de capacité
- C10 (SQL) : expérience A M F et formation, choix NoSQL argumenté
- C30 et C31 : rôle de développeur assumé, avec un vrai suivi des coûts sur Lexikos
