# Gabarit d'une fiche compétence

Copier ce bloc dans le fichier de bloc, à la place de la fiche existante, en conservant le titre `## Cn : …` déjà utilisé.

```markdown
## Cn : <intitulé court>

**Niveau de maîtrise : N** ⭐…

> <libellé du niveau N>

**Place occupée :** <j'exécute et je produis | je mobilise des moyens | j'encadre | je fixe des objectifs opérationnels | je définis des orientations>. <Une phrase qui précise.>

### Situation 1 : <Lexikos, période>

**Contexte :** <projet, besoin, période, seul ou en équipe, public visé>.

**Ce que j'ai fait :**
- <verbe d'action> <quoi> <avec quoi> <pourquoi>
- …

**Ressources mobilisées :** <outils, langages, documentations, personnes, formations>.

**Choix et arbitrages :** <option retenue, option écartée, raison>.

**Résultat :** <effet observable, chiffré si possible>.

**Difficulté et recul :** <problème rencontré, résolution, ce que j'en retiens>.

### Situation 2 : <Accenture, AMF ou WebCV, période>

<même structure, plus courte>

### Évolution de ma pratique

<Comment ma manière de faire a changé entre la première situation et aujourd'hui.>

### Preuves

| Preuve | Type | Accès |
|---|---|---|
| <ex. dépôt Lexikos, commit abc123> | Code | ✅ public |
| <ex. attestation d'un collègue Accenture> | Témoignage | ⚠️ à obtenir |
| <ex. certificat SFCC> | Certification | ✅ annexe |
```

## Exemple de phrase attendue

Faible : « J'ai fait des API REST. »

Attendu : « Je conçois l'API REST de Lexikos, une application d'apprentissage du vocabulaire. J'organise les routes par ressource et je renvoie des codes HTTP explicites. J'intègre l'API de Mistral AI pour générer des packs de vocabulaire. J'isole cet appel dans un service testé avec Jest, pour pouvoir changer de fournisseur sans toucher aux routes. »
