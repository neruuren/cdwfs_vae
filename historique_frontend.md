pour le frontend. Elle porte sur 675 commits qui touchent frontend/, du 22 février 2025 au 14 novembre 2026. Les vagues sont les mêmes que côté backend, mais le récit ne se recoupe qu'en partie : le frontend raconte surtout l'expérience, le design, la PWA, l'i18n et le SEO.

1. Le squelette (février–mars 2025)
Le premier frontend arrive le 22/02. Il est séparé du backend en mars pour Render. Husky est en place dès ce moment.
2. Une application de quiz mobile (juin–juillet 2025)
3 juin : bases React, menu burger, mode sombre, qui devient le mode par défaut le jour même. Une page de statistiques est ajoutée.
Le quiz s'affine vite : 10 tours avec une proposition de relancer, focus automatique, minuteur, quiz dans une fenêtre modale. Le 06/06, le quiz est refait pour ne plus appeler l'API à chaque question.
Gamification visible : statistiques dans le profil, toasts de badges animés, UserStats en haut du menu.
08/06 : l'application change de nom, de « Vocabulary Learner » à Lexikos. Les données utilisateur sont stockées côté client pour éviter des appels API, et un spinner commun est utilisé partout.
17–18/06 : les pages quiz, ajout de mot, accueil et profil sont rendues dynamiques selon les langues choisies.
Juillet : admin découpé en pages (utilisateurs, scripts, jobs planifiés), Word Packs, pied de page, classement, chatbox avec notifications, choix de langue en deux étapes, chargement progressif de /my-words.
3. La vitrine et la boutique (septembre 2025)
04/09 : première landing page.
11–12/09 : arrivée de l'i18n, avec aussi les CGV, un favicon et les réglages d'indexation par les robots.
La place de marché des Word Packs est retravaillée : cartes, filtres, packs jetés, packs utilisables dans les deux sens de langue.
21–28/09 : l'économie apparaît à l'écran. On y trouve :
la modale de gain de Lexi et les FloatingReward ;
la boutique avec PayPal et Stripe ;
les indices payés en Kos ;
une pause du minuteur payée en Lexi (5 pauses de 5 s au maximum) ;
le cadeau quotidien de Lexi pour les pionniers. Une bonne partie de ces mécanismes sera supprimée un an plus tard.
Textes légaux et premiers ajustements responsive du quiz.
4. Le dictionnaire visible et le compte complet (janvier–mars 2026)
Nouvelle identité (21–22/01) : nom, logo, favicon et CSS.
Pages qui suivent le passage à Wiktionary : Pick a lemma (catégories, sons, sens), POS et genre dans les suggestions, recherche de mot depuis la landing page, cartes de mots redessinées.
Session : rafraîchissement automatique du jeton, suppression du « flash » de la page de connexion, mot de passe oublié, lien magique.
Compte : changement d'e-mail, de mot de passe, de nom et d'avatar, suppression du compte vérifiée par e-mail, préférences de newsletter.
05/02 : l'i18n est appliquée partout, avec le manifest.json.
Nouveau style du quiz. Abandonner un quiz en cours conserve désormais les points. Une page « How it works » est ajoutée.
14/02 : premières fonctions PWA, avec les icônes et les méta SEO pour Twitter. La page À propos et le lien vers le CV de Gregory arrivent aussi.
Retours de beta, formulaire de contact, analytics, classement déplacé dans le profil.
23/02 : historique des quiz, pré-rendu des pages publiques, articles. Le premier tutoriel arrive le 2 mars.
5. La refonte « Lumen » (fin août 2026)
24–25/08 : nouveau design de type jeu, « Lumen », appliqué à l'habillage commun, à l'accueil, au quiz, aux badges, au classement, à la boutique, puis aux pages publiques. Les pictos du Lexi et du Kos changent.
Connexion par OTP, retrait des Word Packs, gestion d'erreur et modales unifiées.
Admin isolé sous /admin avec sa propre connexion, jobs redessinés, explorateur de documents.
Écran de prononciation (25/08) et /discover (27/08).
L'économie du 27/08 se voit à l'écran : la Souffle apparaît, la pause gratuite et les prix en cours de jeu disparaissent. Un correctif traite une boucle de rendu qui vidait la réserve de Souffle.
28/08 : passe navigateur moderne. Les modales passent en <dialog> natif avec la Popover API, les téléchargements utilisent la File System Access API, et le responsive est revu sur tout le site (cibles tactiles, typographie fluide, admin utilisable sur mobile).
31/08 : nouvelle landing page, nouvel accueil et nouvel en-tête.
6. Audits et industrialisation (septembre 2026)
03/09 : audits de code. Un audit d'accessibilité (HTML/JSX) et un audit des bonnes pratiques React corrigent les anti-patterns : dépendances d'effets en trop, état dérivé, requêtes à chaque frappe. Les gros composants sont découpés (AdminSettings, ArticleManager, PickALemma) et les doublons Stripe/PayPal unifiés.
04/09 : Lighthouse. CSS critique, i18n en chunks séparés, bannière d'installation de la PWA, fil d'Ariane dans les jeux.
index.html sort du cache pour que les mises à jour s'appliquent. Il y a aussi un texte dédié à Firefox pour l'installation de la PWA et une politique de cookies.
Nouveaux éléments de jeu :
mots en attente ;
prononciation de phrases ;
barre d'XP ;
overlay de réparation de série ;
« Jeux » renommé « Activités » ;
incitations à alterner mémorisation et prononciation.
14/09 : conversation IA. 15/09 : vrai mode hors ligne avec une petite base dans le navigateur.
Tutoriel enrichi, puis 24/09 : nouvelle landing page avec un guide de démarrage qui remplace « How it works ». Phrases d'attente farfelues pendant les chargements.
Saisons, facturation, plafond de la beta, analytics admin.
7. Le poli (octobre 2026)
Confirmations remplacées par une modale maison, spinner pendant une mise à jour, connexion réparée après un rafraîchissement JWT raté.
Batch quiz, nouvelle page de mot, définitions traduites, overlays de dépense de Kos, cartes d'activités harmonisées.
19–21/10 : grande vague de refontes : en-tête, profil, place de marché, toasts système, nouveaux avatars générés avec leur nom, icônes de la PWA, page 404 commune, étiquette beta sur mobile.
Analyse IPA puis Azure à l'écran. Aide pour la permission du micro (25/10).
29/10 : montée de version de React et de Vite, ajustements pour tablette.
8. Rétention et finitions (novembre 2026)
Animation de passage de niveau, notifications push, paiements dans une fenêtre modale, nouvel accueil (/app), page des quêtes (02/11).
Économie, lots A à D, avec l'explication visuelle du pass boost. Les réglages du quiz côté joueur sont supprimés.
Détails de jeu : minuteur sur le bouton « suivant », IPA dans l'historique, dernier choix de prononciation mémorisé, toast de badge qu'on peut balayer, transition du chat.
Contenu public : bouton de partage des articles, liste d'articles ouverte aux visiteurs, nouvelles images de la landing page avec un script pour les générer.
Droits RGPD (portabilité, réclamation auprès de la CNIL) et suppression du mot « IA » dans l'interface.
Ce qui se dégage
Trois générations visuelles : une interface fonctionnelle sombre (2025), la nouvelle identité de janvier 2026, puis le design de jeu Lumen (août 2026), suivi en octobre et novembre de refontes page par page.
D'un site à une application installable : manifest et PWA en février 2026, installation et cache maîtrisés en septembre, puis vrai hors ligne. Cela impose les miroirs quizLogic avec le backend.
La vitrine publique s'est construite par couches : landing page (sept. 2025), pré-rendu et articles (févr. 2026), guide de démarrage (sept. 2026), puis articles ouverts aux visiteurs, partage et images (nov. 2026). Le SEO y a pesé de plus en plus.
Ce que l'économie montre a été inversé. En septembre 2025, l'écran mettait en avant les dépenses en jeu : pauses, indices en Kos. Depuis août 2026, il montre le rythme et la récompense : Souffle, série, overlays de gain, pass boost.
La qualité est passée par des audits. À partir de septembre 2026, le code frontend est revu de façon systématique (accessibilité, bonnes pratiques React, Lighthouse) au lieu d'être corrigé au fil de l'eau.