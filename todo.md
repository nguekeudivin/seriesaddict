# Contexte et regles

Nous devons continuer en implementant le desin des autres pages de la plateforme. L'implementation des autres pages de la plateformes doit suivre minitueusement le design systeme deja utilise pour les autres pages. Elle doit dont reprendre les usages et la logique utilises pour les autres pages.

# Pages a implemener

## Page Fiche serie

La fiche serie a un design preliminaire. Mais ce design preliminaire doit etre ameliorer pour avoir un design plus aboutit suivant les regles et la logiques ainsi que le design systeme implemente dans toues les autres pages.

## Page Saisons d'une serie

Cette page presente les saisons d'une serie. Avec les informations les plus pertinantes. Sur la page de la fiche serie on peut deja avoir la section qui montre deja un appercue et une idee concrete de ce a quoi cette page doit correspondre. Il faudra aller plus loin par rapport a ce qu'on a dans la page fiche pour un resultant plus pertinent.

## Page News d'une serie

Cette page presente les news d'une serie. Cette page devrait etre en accord avec la page `NewsListPage`, elle reprendra les codes de cette autre page et restera en accord avec cette derniere de maniere a pouvoir utiliser reutiliser les composants. Ici on ne demande pas d'extraire les composants dans `NewsListPage` pour les introduire dans la page news d'une serie. La precise permet juste de comprendre que les composants se devront d'etre similaires.

## Page avis d'une serie

Cette page liste les avis postees par les membres sur une serie. Cette page devra juste reprendre le design systeme de tout ce qui a deja ete fait.

## Page trailers d'une serie

Cette page presente les trailers d'une serie. Elle doit rester en parfait accord et coherence avec le contenu et le design des page `TrailersPages` et `TrailerDelaisPage`.

## Page Shop d'une serie

Cette page presente les artiches qui peuvent etre acheter pour une serie donnee. Elle doit reprendre les composants de la page `ShopPage`.

## Page Ajouter une serie a la serietheque

Cette page fait partie de l'ensemble `UserSpaceElements` c'est la page dans laquelle un utilise ajoute une serie a la serie tech. Elle devrait reprendre les meme logiques de design que la page `CreateListPage`. En effet elle s'inscrit dans la meme lance. Pendant `CreateListPage` permet de creer une liste. La page `Ajouter une serie a la serietheque` presente le process pour ajouter une page a la serietheque d'un utilisateur.

## Page demander d'amitie

Pour la page demande d'amitie, nous somme toujours dans l'ensemble `UserSpaceElements`. Elle permet a un utilisateur de faire une demande d'amitie a un autre utilisateur. Ici deux options s'offrent a nous : utiliser une page pour ce workflow ou bien utiliser un model. Nous supposons que vu les informations qui seront demandees qui sont supposees etre peu un models sera plus adapter.

## Page genres et tags

Les genres et les tags sont des elements qui sont utilises pour filtres des informations sur la plateforme. Avoir une page dedie a ces elements se trouve etre une decision judicieuse. Du coup il faut donc l'implementer. Cette page doit s'inspirer de la `CollectionsPage` dont elle reprendra les codes et les logiques du design.

## Page serietheque d'un membre

Pour un utilisateur connecte on a une page qui presente sa seritheque. Sur la plateforme on a egalement la page membres qui permet a un utilisateur de voir les autres membres de la plateforme. Ainsi pour un membre l'utilisateur connecte doit pouvoir en voir la seritheque. Donc cette page presente la serietheque d'un membre ouverte au public.

## Page listes d'un membre

Pour un utilisateur connecte on a une page qui presente sa seritheque. Sur la plateforme on a egalement la page membres qui permet a un utilisateur de voir les autres membres de la plateforme. Ainsi pour un membre l'utilisateur connecte doit pouvoir en voir les listes. Donc cette page presente les listes d'un membre ouvertes au public.

## Page amies d'un membre

Pour un utilisateur connecte on a une page qui presente sa seritheque. Sur la plateforme on a egalement la page membres qui permet a un utilisateur de voir les autres membres de la plateforme. Ainsi pour un membre l'utilisateur connecte doit pouvoir en voir les amies. Donc cette page presente les amies d'un membre ouverts au public.

# Page tous les coups de coeurs

La page tous les coups de coeurs remets en lumiere les series qui ont particulierement attirees l'attention.

# Page daily

La page daily est unpeu comme le blog de la plateforme. Donc son design doit suivre celui d'un blog moderne tout en gardant les codes, la logique et le design systeme de la plateforme.

# Page daily article details

Cette page est la page qui presente le details d'un article blog liste dans la page daily. Cette sera assez similaire a la page `ArticlePage` mais sans la section lateral droite. Ici on se focalise sur le contenus, les articles similaires et les commentaires.

# Page Nouvelles series ( Calendrier du mois)

La page nouvelles series presente les nouvelles series par mois. Donc on liste les series pour un mois donnee et on donne la possibilite a l'utilisateur de changer de mois. Pour le listing des series on reprends exactement les cards du listing de la page `SearchResultsPage`.

# Page Presse

La page presse est une page qui presente la revue de presse autours des series du moments. Elle peut s'apparenter a la page dilay aricle ou news list mais elle s'eloigne de ces dernieres car ici ce n'est pas le contenu cree par la plateforme mais plutot une aggretation des articles des journaux ou blogs externes. Son implementation doit bien evidement on ne le rappele plus suivre les codes, la logique et le design systeme de la plateforme.
