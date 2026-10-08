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

**Lexikos** (https://lexikos.eu, dépôt local `~/development/lexikos`) est le **seul projet montré**. Toute démonstration, tout exemple et toute preuve technique viennent de Lexikos.
Stack : React 19 + Vite + Tailwind (PWA, i18n 4 langues), Node.js/Express en couches, MongoDB + Redis, connexion par code OTP + JWT et refresh token, Mistral AI, Stripe/PayPal, VPS OVH avec Nginx et PM2 en cluster, déploiement GitHub Actions par SSH, sauvegardes cron + copie Backblaze B2, tests Jest et k6.

Récits sans démonstration : Altima/Accenture 2018–2024 (e-commerce SFCC, sous NDA) et A M F 2011–2015 (PHP/MySQL). MyWebCV peut servir de preuve écrite secondaire.

**Aucun autre projet personnel n'est cité**, ni dans les fichiers ni à l'oral, en dehors de Lexikos et de MyWebCV. Le candidat veut un seul site de démonstration.

## Carte des fichiers

| Fichier | Rôle |
|---|---|
| `competences.csv` | Référentiel source : texte officiel de C1–C35 (séparateur `;`) |
| `positionnement_initial.md` | Grille d'auto-positionnement remplie par le candidat (état A–D par compétence). **Source de vérité tant que les fiches ne sont pas réécrites.** |
| `ebauche_ia/` | Premier jet produit par des IA (fiches de bloc, synthèse, présentation jury). **Non validé, niveaux non fiables.** Matière brute uniquement. |
| `README.md` | Consignes du dossier : échelle 1–4, place occupée, questions de synthèse par bloc |

## Rôle de l'IA dans ce dépôt

Le premier jet a été rédigé trop vite par des IA. Il ne reflète ni le niveau réel ni la voix du candidat. Désormais :

- **L'IA ne rédige pas les fiches.** Elle pose les questions, relance comme un jury, extrait des faits vérifiables du dépôt Lexikos (`~/development/lexikos`), relit et signale les incohérences.
- **Le candidat écrit ses fiches avec ses mots.** L'IA peut corriger l'orthographe ou signaler une phrase floue, mais ne réécrit pas le style.
- **Un niveau = ce que le candidat sait expliquer à l'oral, sans notes.** Une fonctionnalité de Lexikos que le candidat ne sait pas réexpliquer ne justifie pas un niveau 3 ou 4.
- Le contenu de `ebauche_ia/` ne se recopie pas tel quel. On peut s'en servir comme liste de pistes à vérifier.
- Le candidat a développé Lexikos avec une forte aide de l'IA, en gardant la main sur l'architecture. Ce point s'assume dans le dossier, avec ses mots.

## Règles

- **Un niveau se fixe à partir de `positionnement_initial.md`**, rempli par le candidat. Les fiches rédigées plus tard doivent concorder avec cette grille.
- **Échelle de maîtrise** : 1 jamais ou participation mineure, 2 ponctuel avec assistance, 3 maîtrisé ou récurrent, 4 aisance et autonomie totale.
- **Écrire comme France VAE le demande** : en français, au « je », au présent, verbes d'action, phrases courtes, jargon expliqué.
- **Ne jamais inventer** une expérience, un chiffre, une date ou une preuve. S'il manque une information, poser la question au candidat.
- **NDA Accenture** : pas de code ni de capture client. Preuves de substitution : certification SFCC, attestations de collègues, même compétence démontrée sur Lexikos.
- Les niveaux faibles s'assument et s'argumentent. Ne pas gonfler un niveau.

## Skills du projet

> ⚠️ Les skills ont été écrits pour l'ancienne organisation (fiches de bloc à la racine, IA rédactrice). Ils pointent maintenant vers `ebauche_ia/` et sont à adapter : `vae-competence` passera en mode entretien (l'IA interroge, le candidat rédige). D'ici là, ne pas utiliser `vae-competence` pour rédiger une fiche.

| Skill | Quand l'utiliser |
|---|---|
| `vae-referentiel` | Toute question sur le titre, les compétences, les modalités d'évaluation ou la procédure 3iL |
| `vae-competence` | Rédiger ou réviser la fiche d'une compétence Cn |
| `vae-livret2` | Assembler, structurer, relire ou exporter le dossier de validation |
| `vae-jury` | Préparer l'oral ou simuler un entretien avec le jury |
| `vae-coherence` | Auditer le dossier : niveaux, preuves, couverture, mentions de projets hors Lexikos |
