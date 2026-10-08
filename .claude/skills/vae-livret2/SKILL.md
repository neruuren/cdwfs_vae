---
name: vae-livret2
description: Construire, structurer, relire ou exporter le livret 2 (dossier de validation) de la VAE Concepteur Développeur Web Full Stack RNCP 39608 à partir des fichiers de bloc du dépôt. Utiliser quand l'utilisateur parle de livret 2, dossier de validation, dossier VAE à rendre, transposition dans le formulaire 3iL, nombre de pages, annexes ou export Word/PDF du dossier.
---

# Livret 2 : dossier de validation

## Principe

Les fichiers `bloc1_frontend.md` à `bloc4_projet.md` sont la **matière**. Le livret 2 est le **produit** : un document lisible par un jury, structuré, sans émojis ni notes internes, qui tient en **80 pages hors annexes**.

Le livret s'assemble dans un fichier `livret2/livret2.md` à la racine du dépôt, avec les annexes dans `livret2/annexes/`. Les fichiers de bloc restent la source. On ne corrige pas une compétence dans le livret : on la corrige dans le bloc, puis on régénère.

## Étapes

1. **Vérifier le format officiel.** Si le candidat a reçu le formulaire de livret 2 de 3iL, il prime : lire sa structure et transposer section par section. Sinon, suivre [references/structure-livret2.md](references/structure-livret2.md).
2. **Contrôler la matière** avec le skill `vae-coherence`. Ne pas assembler un dossier dont les niveaux ou les preuves se contredisent.
3. **Assembler** dans l'ordre de la structure. Pour chaque compétence, reprendre la fiche du bloc et la nettoyer :
   - retirer émojis, étoiles, notes « ⏳ à faire », tableaux d'actions internes, commentaires stratégiques destinés au candidat ;
   - garder niveau, place occupée, situations, preuves ;
   - réécrire au « je » et au présent si besoin.
4. **Respecter le budget de pages** donné dans la structure. Si un bloc dépasse, raccourcir les situations secondaires, jamais la situation Lexikos.
5. **Numéroter les annexes** et y renvoyer depuis le texte (« voir annexe B3 »).
6. **Relire** avec [references/checklist-relecture.md](references/checklist-relecture.md).
7. **Exporter** si demandé : format Word avec le skill `anthropic-skills:docx`, PDF avec `anthropic-skills:pdf`.

## Ce qu'on ne met pas dans le livret

- La stratégie d'oral, les réponses préparées, les « angles de défense ».
- Le vocabulaire de la préparation (« fil rouge », « renfort », « point faible »).
- Des preuves qui n'existent pas encore. Une preuve à produire reste hors du livret tant qu'elle n'est pas faite.
- Des noms de clients sous NDA au-delà de ce que le candidat accepte d'écrire. Lui demander en cas de doute.

## Gestion du NDA dans le livret

Mettre une seule fois, au début de la partie expérience, un paragraphe sobre : nature de la contrainte, preuves de substitution (certification SFCC, attestations, compétences démontrées sur Lexikos). Ne pas le répéter dans chaque bloc.
