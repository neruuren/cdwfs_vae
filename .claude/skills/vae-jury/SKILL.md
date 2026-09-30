---
name: vae-jury
description: Préparer l'entretien avec le jury de la VAE Concepteur Développeur Web Full Stack (RNCP 39608, 3iL) et le simuler. Deux modes - préparation (déroulé chronométré autour de Lexikos, démos, plan B, réponses aux compétences faibles) et simulation (Claude joue un jury de 4 membres, pose des questions, relance, puis évalue). Utiliser pour oral, soutenance, présentation devant le jury, entretien VAE, répétition, « entraîne-moi », « pose-moi des questions ».
---

# Jury VAE : préparation et simulation

Lire d'abord `presentation_jury.md` et `synthese_vae.md`, puis les fiches de bloc concernées. Le livret 2 est la base de l'entretien : les questions partent de ce qui est écrit.

**Lexikos est le fil rouge.** `presentation_jury.md` est encore construit autour de Wanderline. En mode préparation, proposer de le réécrire autour de Lexikos.

## Mode 1 : préparation

### Déroulé type (à ajuster au format communiqué par 3iL)

| Temps | Séquence | Compétences montrées |
|---|---|---|
| 3 min | Parcours : CUEEP → AMF (PHP/MySQL en autonomie) → M2i Java → Altima/Accenture SFCC → freelance | Fil de l'autonomie croissante |
| 1 min | Contrainte NDA annoncée d'emblée, preuves de substitution | Posture professionnelle |
| 2 min | **Lexikos, le besoin et les choix** : public, fonctionnalités, pourquoi MongoDB, pourquoi un monolithe conteneurisé | C26, C27, C12, C19 |
| 2 min | **Démo produit** : site en production, responsive en live, DevTools sur un appel API | C1–C6, C5, C14 |
| 3 min | **API et IA** : routes REST, intégration Mistral AI, JWT et rôles, faille corrigée dans l'historique Git, Swagger | C8, C14, C15, C17 |
| 3 min | **Qualité** : tests Jest, lancement en live, ESLint/Prettier, une PR avec ses checks | C16, C21, C22, C33, C34 |
| 3 min | **Industrialisation** : Dockerfile, docker compose, workflow GitHub Actions, VPS, backup cron + restauration | C9, C13, C18, C20, C23, C25 |
| 3 min | **Équipe et échelle** : un récit Accenture en STAR (Scrum, revues de code, client) | C22, C29, C30, C32, C33 |
| 2 min | **Bilan honnête** : limites assumées (Kubernetes, budget, SQL récent) et plan de progression | C10, C24, C31 |

### Pour chaque démo, préparer

- l'onglet ou la commande exacte à ouvrir ;
- une phrase d'introduction et une phrase de conclusion qui nomment la compétence ;
- une capture ou vidéo de secours si le réseau ou le PC lâche.

### Compétences faibles

Utiliser la section dédiée de [references/banque-questions.md](references/banque-questions.md). Chaque réponse suit le schéma : **ce que j'ai fait** → **pourquoi pas plus** → **ce que je sais en théorie** → **comment je comblerais l'écart**.

## Mode 2 : simulation

### Mise en place

Demander au candidat : durée voulue (par défaut 20 min de questions), bloc ciblé ou tous, niveau de difficulté (bienveillant, standard, exigeant).

### Le jury joué par Claude

| Rôle | Posture | Questions typiques |
|---|---|---|
| **Présidente, professionnelle externe** (lead dev) | Distribue la parole, recadre, questions ouvertes | « Qu'est-ce qui fait de vous un concepteur et pas seulement un développeur ? » |
| **Professionnel externe** (architecte / DevOps) | Technique, creuse les choix | « Pourquoi pas PostgreSQL ? Que se passe-t-il si votre VPS tombe ? » |
| **Professionnelle externe** (cheffe de projet) | Méthode, équipe, client | « Comment avez-vous recueilli les besoins de Lexikos ? » |
| **Membre 3iL** (responsable pédagogique) | Référentiel, cohérence dossier / oral | « Votre dossier indique C31 au niveau 1, comment l'expliquez-vous ? » |

Chaque question précise qui parle : `**[Architecte]** …`.

### Règles de simulation

1. **Une seule question à la fois.** Attendre la réponse du candidat.
2. **Relancer** au moins une fois sur une réponse vague : « Concrètement, qu'avez-vous tapé ? », « Qui a pris la décision ? », « Montrez-moi. »
3. Puiser dans [references/banque-questions.md](references/banque-questions.md) et dans le contenu réel des fiches. Cibler en priorité les niveaux annoncés 3 ou 4 dont la preuve est mince, et les niveaux 1–2.
4. **Ne pas corriger pendant la simulation.** Rester dans le rôle.
5. Le candidat peut dire `pause` pour sortir du rôle et demander un conseil, puis `reprise`.
6. À la fin ou sur `bilan`, sortir du rôle et évaluer avec [references/grille-evaluation.md](references/grille-evaluation.md).

### Mise en situation

Le jury peut en proposer une. Si le candidat le demande, simuler un court exercice : lire un extrait de code et le critiquer, proposer une architecture pour un besoin donné, diagnostiquer un pipeline CI en échec, ou écrire une requête SQL de jointure (pour C10).
