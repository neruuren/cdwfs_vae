# CLAUDE.md

Dépôt de préparation de la **VAE du titre « Concepteur Développeur Web Full Stack »**, RNCP 39608, niveau 6 (Bac+3).
Ce n'est pas un projet de code : ce sont des documents Markdown qui servent à rédiger le livret 2 et à préparer l'oral.

## Le titre visé

- **Certificateur** : Association pour la gestion de 3iL (3iL Ingénieurs). Fiche enregistrée le 2024-10-01, échéance 2029-10-01.
- **Voie VAE** : livret 1 (recevabilité) → livret 2 (dossier de validation) → entretien avec le jury.
- **Jury** : 4 membres, dont 2 professionnels externes avec au moins 5 ans d'expérience. Validation totale ou partielle, bloc par bloc.
- **4 blocs, 35 compétences** : Bloc 1 front-end (C1–C6), Bloc 2 back-end (C7–C17), Bloc 3 architecture/cloud/DevOps (C18–C25), Bloc 4 gestion de projet et qualité (C26–C35).
- Le détail officiel, les modalités d'évaluation et la procédure sont dans le skill `vae-referentiel`.

## Projet de démonstration : Lexikos

**Lexikos** (https://lexikos.eu) est le projet fil rouge. Toute démonstration, tout exemple et toute préparation d'oral part de Lexikos en priorité.
Stack : Node.js/Express, React, Tailwind, MongoDB, API REST + JWT, intégration Mistral AI, Docker compose sur VPS OVH, GitHub Actions, backups cron mongodump.

Renforts : Altima/Accenture 2018–2024 (e-commerce SFCC, Scrum, sous NDA), WebCV (cv.gregory-day.fr), AMF 2011–2015 (PHP/MySQL). Wanderline existe mais n'est plus le projet vitrine : une preuve qui ne repose que sur Wanderline doit trouver son équivalent Lexikos.

## Carte des fichiers

| Fichier | Rôle |
|---|---|
| `competences.csv` | Référentiel source : texte officiel de C1–C35 (séparateur `;`) |
| `bloc1_frontend.md` … `bloc4_projet.md` | Une fiche par compétence : niveau, contexte, actions, résultats, preuves. **Source de vérité des niveaux.** |
| `synthese_vae.md` | Tableaux de niveaux, stratégie de preuves, réponses types au jury |
| `presentation_jury.md` | Stratégie et déroulé de l'oral (encore centré sur Wanderline, à basculer vers Lexikos) |
| `README.md` | Consignes du dossier : échelle 1–4, place occupée, questions de synthèse par bloc |

## Règles

- **Un niveau se modifie d'abord dans le fichier de bloc**, puis dans `synthese_vae.md` (tableau du bloc, répartition, compteurs). Les deux doivent toujours concorder.
- **Échelle de maîtrise** : 1 jamais ou participation mineure, 2 ponctuel avec assistance, 3 maîtrisé ou récurrent, 4 aisance et autonomie totale.
- **Écrire comme France VAE le demande** : en français, au « je », au présent, verbes d'action, phrases courtes, jargon expliqué.
- **Ne jamais inventer** une expérience, un chiffre, une date ou une preuve. S'il manque une information, poser la question au candidat.
- **NDA Accenture** : pas de code ni de capture client. Preuves de substitution : certification SFCC, attestations de collègues, même compétence démontrée sur Lexikos.
- Les niveaux faibles s'assument et s'argumentent. Ne pas gonfler un niveau.

## Skills du projet

| Skill | Quand l'utiliser |
|---|---|
| `vae-referentiel` | Toute question sur le titre, les compétences, les modalités d'évaluation ou la procédure 3iL |
| `vae-competence` | Rédiger ou réviser la fiche d'une compétence Cn |
| `vae-livret2` | Assembler, structurer, relire ou exporter le dossier de validation |
| `vae-jury` | Préparer l'oral ou simuler un entretien avec le jury |
| `vae-coherence` | Auditer le dossier : niveaux, preuves, couverture, dépendances à Wanderline |
