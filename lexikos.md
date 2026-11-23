# Historique du projet

## L'origine : le jeu des petits papiers

Tout à commencé en jouant à un jeu très simple en étant enfant, lorsque je devais apprendre du vocabulaire en Anglais, je prenais des bouts de papiers avec écrit d'un côté le mot en Anglais, et de l'autre côté, sa traduction en Français. Tout les petits papiers étaient pliés puis mis dans un chapeau, ensuite, je les piochais un par un et essayait de retrouver la traduction du mot écrit. C'était plutôt efficace pour mémoriser le vocabulaire.
Plus tard, après avoir bien avancé mon parcours dans l'informatique, et lors d'un voyage à l'étranger, cette façon d'apprendre du vocabulaire s'est présentée à nouveau à moi. Cette fois-ci, un mot retrouvé faisait gagner 1 point, et à la fin du jeu, on comptait les points, et le perdant payait sa tournée. C'est à ce moment là que je me suis dit qu'il y avait peut-être quelquechose à faire pour informatiser le concept.

## Un premier POC en PHP

En revenant de voyage, j'ai bricolé un POC sur l'idée, avec les technos que j'avais apprises à l'époque, c'est à dire un petit serveur local apache qui faisait tourner phpMyAdmin pour générer dynamiquement du HTML, avec imbriqué du Javascript et du CSS. les donnnées étaient persistées dans une bdd MySQL. 
A l'époque, je n'étais pas encore un développeur professionnel, et le projet n'a pas été plus loin. Et puis les applis d'apprentissage de langues sont sorties, et je suis dis que l'idée était déjà reprise et je suis passé à autre chose, comme devenir un vrai développeur, me faire embaucher par Accenture et bosser sur des projets d'envergure.

## Pourquoi relancer le projet

### Les applis existantes ne me conviennent pas

Bien plus tard, après avoir passé un peut de temps sur les apps d'apprentissage de langue, j'ai ressenti une insatisfaction sur ce qu'on me proposait. En effet j'estime que l'utilisateur devrait être maître des mots qu'il souhaite apprendre. 

### Mon besoin : les mots inconnus des séries en VO

Cela fait longtemps que je cherche à améliorer mon Anglais. J'aime beaucoup regarder des films et des séries en version originale car j'estime que c'est mieux d'entendre les vrai voix des acteurs. Je met les sous-titre en Anglais, mais pour les sourds et malentendants, de ce fait, le mot écrit apparait au même moment que le mot est prononcé. Je trouve que c'est très important pour se faire l'oreil à la langue. ça arrive très souvent qu'il y ait des mots que je ne comprends pas. 
Un mot pas compris, je fait pause, recherche le mot dans un dictionnaire, comprends le sens de la phrase et continue. C'est bien, mais le mot n'est pas du tout mémorisé, et l'apprentissage n'avance pas beaucoup.

### Mon bagage technique : Accenture, SFCC, Vue.js

Chez Accenture, j'ai développé essentiellement en JavaScript. J'ai été formé pour maîtriser Saleforce Commerce Cloud (plateforme ecommerce), tout le développement backend se fait en JavaScript. on utilisait node.js en local pour faire tourner l'environnement de développement. 
De base, SFCC est une solution monolithique, mais, il y a eu une évolution, des fonctionnalités headless ont été proposées par l'éditeur. j'ais donc appris à maîtriser le framework frontend Vue.js qui utilise JavaScript. J'ai été séduit par cette idée de séparer les responsabilités entre le backend et le frontend. 

### Le déclic

Cela faisiait un moment que je cherchais une idée de projet perso à réaliser. Mes compétences de développeur ayant fait un énorme bon en avant gràce à mon expérience chez Accenture, j'ai décidé de me relancer sur le projet. Les apps existantes ne me conviennent pas, qu'à cela ne tienne, je créé la mienne.
il y a eu plein de phases, d'évolutions, de mise à jour majeures, de nouvelles idées en cours de route. je me suis passionné pendant des mois à faire avancer le projet.

## De l'usage perso à une appli ouverte

Quand j'ai commencé, il y a eu une intense réflexion sur le projet.
Initialement, je voulais juste informatiser le jeu avec les petits papiers, uniquement pour mon usage personnel. Puis, très vite je me suis dit que cela pourrait intéresser éventuellement d'autres personnes. ça impliquait mettre en place une interface, des regles, une persistance de data. J'ai donc commencé à réfléchir à la conception

## Les choix techniques de départ

Avant de me lancer sur Lexikos, j'ai voulu rajouter des cordes à mon arc. je me suis formé sur Express, ainsi que sur REACT.js. ça faisait longtemps que je voulais acquérir ces compétences
J'ai ensuite créé un template 'hello world' de projet. Il s'agit d'un monorepo avec un front REACT et une API REST Express/Node.js. L'architecture client/serveur est donc découplée. Je suis parti de ça pour initialiser le projet.
outillage posé dès le départ : ESLint, Prettier, Husky, Jest
Concernant la bdd, j'ai utilisé mongodb. Je n'avais pas encore d'expériences sur cette solution et je voulais essayer quelquechose de nouveau pour moi.
j'ai utilisé dès le début git et un repo github, c'est, je trouve une des choses les plus importante à maîtriser dans le quotidien d'un développeur.


# Le backend

## Le dictionnaire

### Premiers POC : l'utilisateur saisit ses mots

j'ai fait des POC. Puisque le USER est maitre des mots qu'il souhaite d'apprendre (c'est vraiment le plus important pour moi), au début, le user saisissait ses couples de mots langue cible/langue maternelle, le couple était associé dans la base, mais c'était donner beaucoup trop de confiance au user sur sa capacité à ne pas faire d'erreurs de saisie ou de traduction. ce qui ne tiens pas debout car la source d'erreurs de saisies et d'erreurs suite à des incompréhensions humaines est majorée. Je me suis donc dis qu'il fallait mettre en place un controle sur les traductions, mais aussi un dictionnaire.

J'ai aussi exploré l'idée de constituer le dictionnaire petit à petit, au fil des recherches des utilisateurs, donc de connecter l'appli à une API qui retourne la traduction par rapport au mot saisi, et que le retour soit enregistré dans la bdd.
j'ai essayé plusieurs fournisseurs de traduction proposant une entrée API. Certains étaient bien trop chères, d'autres peu précis. J'ai même envisagé serieusement de brancher une API de LLM mais les réponses n'étaient pas toujours cohérentes.
C'était donner trop de confiance dans le retour de l'API, le temps de réponse était trop long, il aurait fallut des années pour constituer une bdd solide, et le cout d'appels API faisait exploser les couts sur le long terme.

Tout cela m'a permis de comprendre que j'avais besoin pour chaque mot saisi par le user, de savoir son PartOfSpeech (partie grammaticale, pluriel/singulier, verbe à l'infinitif/conjugué... ), ainsi que les traductions possibles.

### La solution : importer Wiktionary

A force de tester divers solutions, c'est devenu clair qu'il fallait que mon appli utilise son propre dictionnaire, présent dans la bdd, donc, requétable très rapidement. J'ai recherché les solutions openSource et ait trouvé la solution wiktionnary (licence CC BY-SA 4.0). J'ai créé un script d'importation qui télécharge les dumps dans les langues souhaitées, les parcourt entièrement et en extrait uniquement les données souhaitées pour les besoins du projet.
wiktionnary m'a permis d'importer lemmes, variantes, partOfSpeech, catégories. Le script est optimisé pendant des semaines (points de reprise, journaux, insertions par lots).

### Quatre langues dès le départ

J'ai dans mon entourage plusieurs personnes désireuses d'apprendre une langue étrangère. je voulais que dès le départ ma solution propose plusieurs langues. Mais je ne voulais en proposer trop d'un coup pour ne pas me surcharger. Je me suis dis que 4 langues suffiraient au départ. quitte à en rajouter plus tard. Les 4 langues de base sont le Français, l'Anglais, l'Espagnol, l'Allemand. L'idée c'est que ce soit utilisable dans n'importe quelle combinaison. Par exempe, un Allemand peut y apprendre l'Espagnol. L'interface est écrite dans la langue maternelle de l'utilisateur (la landing page s'affiche dans la langue du navigateur avec un fallback sur l'anglais, puis le user sélectionne sa langue maternelle lors de la création de son compte).
avec les 4 langues combinées, il y 5,3 Million de mots racine qui sont liés à des variations (conjugaisons, divers formes grammaticales), ainsi qu'à des traductions. Le dictionnaire installé est donc très complet.
Le dictionnaire ainsi que la stack technique étant en place, j'avais des bases solides pour continuer à avancer sur le projet. 

## l'architecture

L'API REST Express est découpée en routes, controllers, services, modèles. 
les routes définissent tout les endpoints de l'API, elles permettent de lier une URL à un controlleur. Elle indique aussi quels contrôles passer avant le controlleur : être connecté, ne pas dépasser le nombre de requètes autorisées.
Les controlleurs coordonnent. un controlleur lit la requète http, appelle les bons services, puis renvoie une réponse en json.
C'est dans les services que sont écrites les règles métiers (calculs, décisions). Par exemple, la fonction answerService.js dont le rôle est de vérifer si une réponse de quiz est correcte.
Les modèles décrivent les collections de MongoDB, c'est aussi là que sont écrites les fonctions d'interraction avec la base de données (lecture, écriture).



## l'authentification

fonctionne avec des jetons JWT. un utilisateur authentifié se voit octroyé un token avec une durée de vie de 15 min, le token est inséré dans les requetes qui parcourent les routes qui sont protégées par un middleware d'authentification.
un autre token est généré qui lui à une durée de vie de 30 jours. Ce 2 eme token est un cookie http. quand le token de 15 min est expiré, le 2eme token de 30 jours est contrôlé pour regénérer le token de 15min, en même temps que celui de 30jours. Ainsi, un user peux ne jamais se faire déloguer s'il utilise l'appli régulièrment. Alors qu'un utilisateur banni se verra sa possibilité de renouvellement de cookie suspendue.
Les users n'ont pas de password à retenir. un code OTP est envoyé à l'adresse mail à chaque fois qu'un user souhaite se connecter. J'ai mis ça en place après avoir parlé à des utilisateurs que ça rebute totalement de devoir mémoriser un password, et même, c'est une pratique qui est pour certains totalement rédhibitoire. Cela à été une surprise pour moi de constater, après le retour de plusieurs utilisateurs que la façon de s'authentifier ancestrale, donc avec le couple login/password, qui est considérée comme allant de sois par les gens qui baignent dans l'informatique, ne l'est pas pour d'autres. Mais voila, il ne faut pas hésiter à inover.

## Les quiz

### activité de mémorisatinon.

Le choix des mots : Le serveur pioche dans le vocabulaire de l'élève et fait passer en priorité les mots à réviser. Les mots déjà maîtrisés ne reviennent que pour un contrôle de temps en temps.
La correction : le serveur tolère les petites fautes de frappe. une réponse juste fait monter la jauge 'écrit' du mot (de 0 à 10), une réponse fausse la fait baisser.

### activité de prononciation.

Le choix des mots : le serveur pioche dans le vocabulaire de l'élève, en priorité les mots dont la jauge 'oral' est la plus basse. En mode phrase, un LLM génère de courtes phrases contenant le mot, et le serveur vérifie que le mot y figure bien avant de les proposer.
L'écoute : un modèle de synthèse vocale lit le mot ou la phrase pour donner le modèle à imiter.
La correction : l'élève s'enregistre, un modèle de transcription convertit l'audio en texte, puis le serveur compare ce texte au mot attendu, avec la même tolérance que pour le quiz. Une prononciation juste fait monter la jauge 'oral' du mot (de 0 à 10).
Chaque session consomme du Souffle, une réserve d'énergie qui se recharge avec le temps, car les appels aux modèles ont un coût.


## La gamification

XP et niveaux : monter de niveau débloque des fonctionnalités.
Série (streak) : on enchaîne les jours d'activité. Une série cassée peut être rachetée, avec des limites.
Badges : ils sont attribués selon des seuils (nombre de quiz, mots maîtrisés…).
Saisons : un classement remis à zéro toutes les 2 semaines.

## L'économie

Les Lexi se gagnent en jouant, avec un plafond par jour. Il est également possible de les acheter avec des Euros. Kos est la monnaie premium, achetée ou obtenue en convertissant des Lexi.
Je ne fait payer ce qui coûte et rien d'autre :
L'activité de mémorisation est gratuite et illimitée car elle ne coute rien à faire tourner (à part quelques ressources de serveur).
La prononciation et la conversation consomment de l'énergie, parce que chaque tour appelle un modèle payant.
Il y a deux réserves d'énergie séparées, le Souffle et la Voix car une conversation coûte environ dix fois plus cher qu'une prononciation.
les deux réserves d'énergie se renouvellent toutes seules avec le temps, mais il est possible d'accélérer la régénération en dépensant des Kos.
côté gestion :
2 moyens de paiements sont implémentés, Stripe et Paypal. les factures PDF numérotées sont générées. Le coût de chaque appel à un modèle est enregistré, pour savoir combien coûte un utilisateur.les prix, plafonds et packs de lexi et de Kos se modifient depuis l'admin, sans redéployer.
Actuellement, la phase beta est en cours, les achats dans la boutique se font sur des comptes stripe et paypal de test. Lorsque la beta sera terminée, les véritables moyens de paiements seront ouverts et toutes les sommes achetées lors de la beta seront remises à 0 via un job. Les testeurs de la phase beta recevront un badge de pionnier qui leur permettra de générer quelques Lexi / semaine gratuitement en remerciements de leur aide apportée.
Equilibrer une économie de jeu est difficile. Il faut que gagner soit motivant sans que ça impacte les ventes.

anecdote de comportement d'utilisateur :
J'avais mis dès le départ le bouton pour les pionniers pour générer des Lexi. il y avait une limite quotidienne d'une certaine somme. Certains utilisateurs allaient dans le jeu pour cliquer sur le bouton pour générer des Lexi. Et après ça, ils ne le dépensaient pas, ils utilisaient juste les fonctionnalités gratuites. Moi, je pensais que les joueurs n'allaient utiliser le bouton de génération que parcequ'ils avaient besoin de faire des achats dans le jeu (plus d'activité de prononciation par exemple), et bien non. Donc ils se sont retrouvé avec des sommes importantes de Lexi non dépensées, ça faussait complétement les statistiques autour de l'économie. En voyant ça, j'ai désactivé la fonctionnalité, ça à entrainé lors arret total de fréquentation. Amusant pour des testeurs.




## TODO


la prononciation : un modèle qui génère des phrases, un modèle qui génère une voix pour dire la phrase, un modèle qui analyse si la prononciation est correcte.  Mise en place d'un cache pour sauvegarder les phrases générées afin de les réutiliser. 
la conversation
la mise en place du projet sur un VPS
la sauvegarde de la base de données sur un hébergeur indépendant
la boutique
le système qui permet de générer des listes de mots en partant d'un sujet ou d'un livre libre de droits.
la page profil
les pages légales
l'interface admin!!!!


énorme difficulté pour moi : satisfaire les exigences des utilisateurs!!!!

