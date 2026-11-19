voici l'histoire de Lexikos vue depuis le backend. Elle couvre 1 271 commits, dont 539 touchent backend/, entre le 21 février 2025 et le 11 novembre 2026. Le travail s'est fait par vagues, avec des pauses de plusieurs mois entre elles.

1. Les fondations (février–mars 2025)
Premier commit backend le 21/02/2025. En mars, backend et frontend sont séparés et adaptés à l'hébergement Render.
L'outillage est posé tôt : ESLint, Prettier, Husky et Jest. La discipline de tests date donc du premier mois.
2. Le quiz et la gamification (juin–juillet 2025)
Juin : l'application prend forme. Il y a le quiz, les statistiques, une première gamification (points, série, badges) et un portail admin avec bannissement.
Les contrôleurs sont réorganisés et la logique métier passe dans des services. C'est l'architecture actuelle.
Changement majeur du 07/06 : la façon d'enregistrer les mots en base est refaite (« huge optimisation »). Le quiz ne fait plus d'appel API à chaque question.
Les mots partagés passent d'abord par la base, puis par une API externe de traduction et d'enrichissement. Le multilingue arrive à la fin juin.
30/06 : premiers jobs admin (lancement manuel, planification cron, import de fichiers) et premiers Word Packs.
Juillet : classement, chat (le début du chat communautaire), page des réglages admin avec plafond de mots, KPI de la base.
3. Les dictionnaires, l'IA et l'argent (septembre–octobre 2025)
Les anciennes API sont remplacées par Google, puis par DeepL en second avis. Mistral arrive le 11/09 avec ses prompts réglables depuis Settings, qui devient un singleton.
Synonymes acceptés dans le quiz, champ entrySource, définitions enrichies.
Les Word Packs sont générés par Mistral, avec une place de marché où l'on peut aussi jeter un pack.
Mode maintenance (18/09).
21/09 : naissance de l'économie. Le Lexi et le Kos apparaissent, avec des gains de Lexi par bonne réponse, une boutique, PayPal et Stripe (25/09) et des indices payés en Kos. Ce dernier choix sera abandonné plus tard.
Les badges passent dans une collection de récompenses et deviennent attribuables à la main.
4. Le grand dictionnaire Wiktionary (janvier–mars 2026)
Refonte du modèle de vocabulaire : variantes, lemmes, sens et prononciations, importés depuis les dumps Wiktionary (importWikiDumps). Le script est optimisé pendant des semaines (points de reprise, journaux, insertions par lots).
Arrivée de la page « Pick a lemma », des catégories, du genre grammatical et des catégories grammaticales (POS) dans les suggestions.
Auth refaite : jetons d'accès et de rafraîchissement JWT, cookie de rafraîchissement, e-mails avec modèles, mot de passe oublié, lien magique, newsletter.
Sécurité (février) : trust proxy, Helmet, limiteurs de débit partout et bannissement automatique de 24 h.
Fonctions déblocables par niveau, rachat avec le crédit pionnier, taux de conversion Lexi→Kos dans Settings.
Analytics, retours de beta, formulaire de contact, historique des quiz, liste TOEIC.
23/02 : articles générés par l'IA, pré-rendu des pages publiques, sitemap.
5. La grande refonte (fin août 2026)
Après cinq mois de pause, la reprise se fait avec Claude Code et elle est radicale :

Connexion par code OTP à 4 chiffres par e-mail, à la place du mot de passe et du lien magique.
Suppression totale des Word Packs, puis de DeepL et des collections mortes.
Admin isolé sous /admin, sauvegardes depuis l'admin, explorateur de documents façon Compass.
25/08 : jeu de prononciation. D'abord jugé sur la transcription, il est ensuite jugé « par le son, pas l'orthographe ». La règle d'honnêteté plutôt que d'indulgence date de là.
27/08 : l'économie actuelle est fondée en une série de commits :
les montants sont décidés par le serveur ;
le Kos a une source ;
le Souffle limite la prononciation, le quiz reste libre ;
on vend le rythme, pas l'accès ;
la série peut être rachetée ;
la difficulté n'est plus payante et l'aide coûte du progrès.
/discover : on colle un texte, on obtient un thème IA, avec une bibliothèque du domaine public.
Passe de sécurité sur tout le site (écritures admin et dictionnaire, HTML assaini, bornes sur les regex et sur Levenshtein), llms.txt.
6. Montée en puissance (septembre 2026)
Prononciation de phrases et TTS local Piper, avec une voix réglable par langue.
File d'attente des mots (queued) et statut consolidation, ce qui donne le modèle actuel des places actives.
14/09 : conversation IA, limitée par la Voix.
15/09 : vrai mode hors ligne, avec une petite base dans le navigateur. Les miroirs quizLogic (« KEEP IN SYNC ») viennent de là.
Audit de performance en sept vagues : Redis, cluster sur tous les cœurs, mode test de charge.
Audit de difficulté et de monétisation, plafond d'utilisateurs de la beta, saisons, facturation, plafond quotidien de Lexi, analytics des utilisateurs et des coûts IA.
7. Qualité du jugement et de l'audio (octobre 2026)
Licences des voix : Piper est abandonné pour le TTS OpenAI dans les quatre langues, et un cache des phrases (texte et audio) est ajouté.
Analyse phonétique avec comparaison IPA, puis Azure Pronunciation Assessment le 21/10. Azure devient le seul juge.
Bibliothèque Gutenberg dans l'admin, pagination de /discover, récupération en local du cache audio de prod.
Montée de Mongoose 8 à 9 le 30/10.
8. Rétention, conformité, finitions (novembre 2026)
Notifications push, e-mails de relance, discussions dans les retours, paiements dans une fenêtre modale.
Économie, lots A à D, et pass boost.
Logique commune des jeux fusionnée, refonte de la déconnexion et reconnexion.
RGPD : droit à la portabilité et droit de réclamation auprès de la CNIL. Le terme « IA » est banni de l'interface, et les articles sont ouverts au public.
Derniers correctifs : silences coupés dans l'audio, homographes et POS, IPA.
Ce qui se dégage
Le cœur du produit s'est déplacé. L'application est partie d'une liste de mots avec un quiz. Elle est devenue une plateforme à trois jeux : quiz, prononciation jugée par Azure et conversation, avec du contenu généré : articles et /discover.
Le dictionnaire a connu trois générations : API externes, puis Mistral et DeepL, puis Wiktionary importé et complété par Mistral. C'est la source la plus constante de scripts de réparation et de relinking.
L'économie a été pensée deux fois. La version de septembre 2025 faisait payer les indices. La refonte d'août 2026 la remplace par un principe qui reste un invariant : on paie l'accès et le confort, jamais la performance.
Le travail a changé de rythme. Il y a eu de longues pauses (oct. 2025–janv. 2026, mars–août 2026). Depuis août 2026, le débit est bien plus élevé et les messages de commit plus structurés. La règle « un correctif de données livre aussi un job de réparation » et la documentation par domaine datent de cette période.