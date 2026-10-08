# Banque de questions du jury

Les questions partent de Lexikos sauf mention contraire. Adapter au contenu réel du livret.

## Ouverture

- Présentez-vous en trois minutes et dites-nous pourquoi ce titre.
- Quelle réalisation vous rend le plus fier, et pourquoi ?
- Qu'est-ce qui distingue un concepteur d'un développeur, et où vous situez-vous ?

## Bloc 1 : front-end

- Comment garantissez-vous l'accessibilité de Lexikos ? Quel score Lighthouse, et qu'avez-vous corrigé ?
- Pourquoi Tailwind plutôt que Sass ou un framework à composants ?
- Montrez-nous le comportement mobile. Quels points de rupture et pourquoi ?
- Comment gérez-vous l'état de chargement et les erreurs d'un appel API côté React ?
- Si vous deviez refaire ce front sans framework, par quoi commenceriez-vous ?

## Bloc 2 : back-end

- Décrivez l'organisation de votre code Express. Où est la logique métier ?
- Pourquoi MongoDB ? Dans quel cas auriez-vous choisi PostgreSQL ?
- Modélisez au tableau le schéma relationnel de Lexikos s'il devait passer en SQL. (C10)
- Comment un utilisateur prouve-t-il son identité ? Où est stocké le token ? Que se passe-t-il à expiration ?
- Parlez-nous de la faille d'accès que vous avez corrigée : comment l'avez-vous découverte ?
- Comment testez-vous l'appel à Mistral AI sans payer d'appel réel ?
- Comment un développeur qui arrive découvre-t-il votre API ? (C17)
- Votre sauvegarde fonctionne-t-elle ? Quand avez-vous testé une restauration pour la dernière fois ?
- Comment sécurisez-vous l'accès SSH à votre VPS ?

## Bloc 3 : architecture et DevOps

- Dessinez l'architecture de Lexikos en production.
- Pourquoi un monolithe ? À partir de quand passeriez-vous aux microservices ?
- Décrivez votre pipeline de la PR à la production. Un test rouge bloque-t-il le déploiement ?
- Où sont vos secrets ? Qui peut les lire ?
- Pourquoi docker compose et pas Kubernetes ? Qu'apporterait Kubernetes ? (C24)
- Combien coûte Lexikos par mois, et comment réduiriez-vous ce coût ? (C20, C31)
- Comment résolvez-vous un conflit de merge ? Racontez un conflit difficile en équipe chez Accenture.

## Bloc 4 : projet et qualité

- Comment avez-vous défini les fonctionnalités de Lexikos ? Qui sont les utilisateurs ?
- Avez-vous écrit une note de cadrage ? Montrez-la. (C28)
- Comment avez-vous évalué la faisabilité de l'intégration IA ? (C27)
- Décrivez un sprint type chez Accenture. Quel était votre rôle dans les cérémonies ?
- Avez-vous déjà coordonné des personnes ? Comment ? (C30)
- Quels indicateurs suivez-vous sur un projet ? (C31, C32)
- Comment se passe une revue de code chez vous ? Qu'est-ce qui vous fait refuser une PR ?
- Quelle est votre stratégie de tests ? Pourquoi pas plus de tests e2e ?
- Comment faites-vous votre veille ? En quelle langue lisez-vous ? Citez une source et un apprentissage récent.
- Comment utilisez-vous l'IA dans votre travail, et comment en contrôlez-vous la qualité ?

## Compétences faibles : pièges et angles de réponse

| Compétence | Piège | Angle de réponse |
|---|---|---|
| C10 SQL | « Écrivez une jointure. » | Pratique AMF 2011–2015 et M2i 2018. Savoir écrire jointure, index, transaction. Montrer le modèle relationnel équivalent de Lexikos. |
| C17 Swagger | « Montrez la doc de l'API. » | Swagger Lexikos réalisé avant l'oral. Sinon, le dire et montrer le plan. |
| C24 Kubernetes | « Qu'est-ce qu'un pod ? » | Notions : pod, deployment, service, ingress. Arbitrage coût et complexité à l'échelle de Lexikos. |
| C27 Faisabilité | « Montrez une étude. » | Analyse de faisabilité Lexikos : coût API Mistral, hébergement, temps disponible, risques. |
| C28 Cahier des charges | « Qui l'a rédigé ? » | Contributeur chez Accenture. Note de cadrage Lexikos rédigée seul. |
| C30 Coordination | « Avez-vous encadré ? » | Rôle d'exécution assumé. Accompagnement de nouveaux, revues, entraide. |
| C31 Budget | « Quel budget ? » | Hors rôle chez Accenture. Suivi des coûts d'infra et d'API en freelance. |
| C32 Rapports d'étape | « Montrez un rapport. » | Sprint reviews et rétros Scrum. Rapport d'étape Lexikos possible. |

## Questions de fin

- Si nous ne validons qu'une partie des blocs, que ferez-vous ?
- Où vous voyez-vous dans trois ans ?
- Y a-t-il quelque chose que votre dossier ne dit pas et que nous devrions savoir ?
