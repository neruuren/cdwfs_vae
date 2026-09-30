---
name: vae-coherence
description: Auditer la cohérence du dossier VAE Concepteur Développeur Web Full Stack (RNCP 39608) - niveaux identiques entre fichiers de bloc et synthèse, compteurs, preuves présentes pour chaque compétence, taux de couverture par rapport au repère 3iL de 80-85 %, trous du référentiel (veille multilingue, Swagger) et preuves qui dépendent seulement de Wanderline au lieu de Lexikos. Utiliser avant d'assembler le livret 2, après avoir modifié plusieurs compétences, ou sur « vérifie le dossier », « audit », « où en suis-je ».
---

# Audit de cohérence du dossier VAE

L'audit **ne modifie aucun fichier**. Il produit un rapport. Les corrections se font ensuite, sur demande, avec le skill `vae-competence`.

## Étapes

### 1. Niveaux

Lancer depuis la racine du dépôt :

```bash
python3 .claude/skills/vae-coherence/scripts/niveaux.py
```

Le script compare le niveau de chaque compétence entre les fichiers de bloc et le tableau de `synthese_vae.md`. Il affiche la répartition et le taux de compétences acquises. Vérifier ensuite à la main que les compteurs rédigés de la synthèse (« Répartition par niveau », listes « à renforcer » et « à acquérir ») correspondent à cette sortie.

### 2. Preuves

Pour chaque compétence, dans son fichier de bloc :
- une section « Preuves disponibles » existe et contient au moins une preuve marquée ✅ ;
- un niveau 3 ou 4 a une preuve accessible au jury, pas seulement « témoignage possible » ;
- les preuves annoncées « ✅ » correspondent à quelque chose qui existe. Si c'est vérifiable (lien, fichier), le vérifier. Sinon, le lister comme « à confirmer par le candidat ».

### 3. Dépendance à Wanderline

Lexikos est le projet de démonstration. Relever chaque compétence dont la preuve principale ne cite que Wanderline ou afterLook. Points connus au 2026-09-30 :

| Compétence | Preuve actuelle | Équivalent Lexikos à produire |
|---|---|---|
| C8 | SOLID documenté dans le README Wanderline | Section architecture du README Lexikos |
| C13 | Test e2e de restauration Wanderline | Restauration testée et documentée du mongodump Lexikos |
| C16, C34 | TDD, Supertest, Playwright sur Wanderline | Tests d'intégration et au moins un e2e sur Lexikos |
| C17 | Aucune | Swagger/OpenAPI sur l'API Lexikos |
| C22 | 76+ PR et CI bloquante sur Wanderline | Flux branche → PR → checks sur Lexikos |
| C25 | Pipeline 4 jobs Wanderline | Vérifier que le workflow Lexikos bloque le déploiement sur test rouge |

Mettre ce tableau à jour dans le rapport selon l'état réel des fichiers.

### 4. Couverture du référentiel

- Comparer avec `.claude/skills/vae-referentiel/references/competences.md` : chaque attendu majeur est-il couvert par au moins une phrase de la fiche ?
- Vérifier les points de vigilance du skill `vae-referentiel` : veille multilingue, SQL + NoSQL, API documentée, audit argumenté, guide de bonnes pratiques.

### 5. Cohérence des faits

Dates, noms d'employeurs, durées et chiffres identiques dans tous les fichiers (blocs, synthèse, présentation jury, README). Exemple : périodes AMF, Accenture, nombre de PR, nombre de tests.

### 6. Documents de préparation

Signaler si `presentation_jury.md` ou `synthese_vae.md` présentent encore Wanderline comme projet principal.

## Format du rapport

1. **Verdict** en une phrase : prêt pour le livret 2, ou non et pourquoi.
2. **Écarts bloquants** : incohérences de niveau, niveaux 3–4 sans preuve.
3. **Preuves à produire sur Lexikos**, par ordre de priorité.
4. **Trous du référentiel.**
5. **Incohérences de faits.**
6. **Couverture** : sortie du script.
