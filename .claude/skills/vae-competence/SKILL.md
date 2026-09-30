---
name: vae-competence
description: Rédiger, enrichir ou réviser la fiche d'une compétence du titre CDWFS (C1 à C35) pour le livret 2 de la VAE - niveau de maîtrise justifié, contexte, place occupée, actions, ressources, résultats, preuves, évolution. Utiliser dès que l'utilisateur demande d'écrire, détailler, améliorer ou réévaluer une compétence (« rédige C17 », « détaille C12 », « mon niveau en C10 est-il juste ? », « reprends le bloc 2 »).
---

# Rédiger une fiche compétence

## Avant d'écrire

1. Lire le texte officiel de la compétence et ses attendus dans `.claude/skills/vae-referentiel/references/competences.md`.
2. Lire la fiche existante dans le fichier de bloc :
   - C1–C6 : `bloc1_frontend.md`
   - C7–C17 : `bloc2_backend.md`
   - C18–C25 : `bloc3_devops.md`
   - C26–C35 : `bloc4_projet.md`
3. Relever ce qui manque par rapport au gabarit et aux attendus.
4. **Poser des questions au candidat** pour chaque information manquante (voir « Questions à poser »). Ne rien inventer. Si le candidat n'est pas disponible, écrire `[À COMPLÉTER : question]` à l'endroit exact.

## Principes

- **Lexikos d'abord.** La situation principale vient de Lexikos. Accenture, WebCV et AMF viennent en renfort, surtout pour l'équipe, l'échelle et l'ancienneté.
- **Au moins deux situations** par compétence si possible : une récente (Lexikos) et une plus ancienne ou en équipe (Accenture, AMF). Cela montre l'évolution.
- **Méthode STAR** pour chaque situation : Situation, Tâche, Action, Résultat.
- **Ce que j'ai fait moi**, distinct de ce que l'équipe a fait.
- **Pourquoi** chaque choix technique, avec l'alternative écartée.
- **Recul** : une difficulté rencontrée et ce que j'en ai appris.
- Règles France VAE : « je », présent, verbes d'action, phrases courtes, jargon expliqué en une incise. Liste de verbes : [references/verbes-action.md](references/verbes-action.md).

## Gabarit

Le gabarit complet est dans [references/gabarit-competence.md](references/gabarit-competence.md). Il reprend la structure déjà utilisée dans les fichiers de bloc et ajoute : place occupée, ressources mobilisées, évolution, recul.

## Justifier le niveau

| Niveau | Il faut pouvoir écrire… |
|---|---|
| 4 | « Je le fais régulièrement, seul, sans aide, et je sais l'expliquer à d'autres. » Plusieurs situations, dont une en production. |
| 3 | « Je l'ai fait plusieurs fois, seul ou en équipe, avec maîtrise. » Au moins une situation complète et prouvée. |
| 2 | « Je l'ai fait ponctuellement, avec de l'aide ou il y a longtemps. » |
| 1 | « Je ne l'ai pas pratiqué ou seulement en observateur. » |

Contrôle d'honnêteté : si la fiche ne contient pas de preuve à la hauteur du niveau annoncé, **le signaler** au candidat et proposer soit une preuve à produire, soit un niveau plus bas. Un niveau surévalué se voit à l'oral et fragilise tout le dossier.

## Questions à poser

- Dans quel contexte précis ? Quel projet, quelle année, quelle durée ?
- Quel était ton rôle ? Seul ou en équipe, et combien de personnes ?
- Qu'as-tu fait toi-même, concrètement, étape par étape ?
- Avec quels outils, quelles docs, quelles personnes ?
- Pourquoi ce choix plutôt qu'un autre ?
- Quel résultat ? Chiffré si possible (temps, score Lighthouse, nombre de tests, couverture, utilisateurs).
- Quelle difficulté, et comment l'as-tu résolue ?
- Quelle preuve peut voir le jury ? Lien, commit, capture, certificat, attestation ?
- Que ferais-tu différemment aujourd'hui ?

## Après l'écriture

1. Si le niveau change, mettre à jour **dans le même temps** `synthese_vae.md` : tableau du bloc, tableau de répartition, compteurs, listes « à renforcer » et « à acquérir ».
2. Si une preuve est à produire, l'ajouter au tableau « Actions à mener » en fin de fichier de bloc.
3. Vérifier la cohérence avec le skill `vae-coherence` si plusieurs fiches ont changé.
