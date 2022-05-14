import { createHeader }  from "./header";
import { createHome } from "./home";
import { createFooter } from "./footer"
const content = document.getElementById("content");

createHeader();
createHome();
createFooter();

export { content };

/*

> ensuite concept c'est pas trop dur : un premier bloc de texte, la photo du chef lapinou au milieu, encore un bloc de texte ?
> contact c'est peut-être un peu plus tricky ? un premier bloc avec toutes les infos de type tél, fb et cie... puis un second avec un formulaire de texte pour laisser ses réclamations, ensuite un autre pour dire comment tu as aimé...

/ et webpack à la fin pour le live serve (avec npx webpack --watch t'as juste besoin d'enregistrer ici et refresh nav)

// concrètement c'est un fonctionnement en onglets : il en faudra 3/4 qui seront dans un header (sticky ?) [FAIT]
thématique du resto : vegan healthy food, avec salades et autres trucs organiques
// le premier onglet sera la page d'accueil, sur laquelle tu vas atterrir en ouvrant le website
        > un bloc central avec dedans plusieurs catégories et les infos génériques : le concept (bloc 1), l'adresse (bloc 2) et un troisième tbd
        > du coup on aura toute l'intro : un poti mot d'accueil expliquant en quoi c'est génial
        > les infos utiles ?
        > un lien vers le menu ?
le second, ça sera le menu du resto et les machins proposés >> prévoir un modèle pour chaque plat qui sera répétable à l'envi (FAIT, plus qu'à habiller)
le troisième, les infos de contact  diverses et variées
le quatrième, un "notre concept" (photo du chef cuisinier = lapin) avec un poti formulaire pour laisser un avis suggestion


D'abord faire le look, ensuite les animations

concrètement ta page se présentera comme ça : 

[import header] > ici tout est toujours pareil
[import mainContent] > ici, selon la page le contenu va différer : soit l'accueil (par défaut), le menu, le concept, le contact
        > par défaut l'accueil s'affiche
        > mais il faut que si l'on clique par ex sur menu ça efface tout ce bloc pour le remplacer par menu...
[import footer] > lui, est ce que ne le ferait pas dans un module à part, comme header...
        > mais importé dans chacun des modules ppaux ?
        > comme ça il dégommerait pas la mise en page.

PLAN GÉNÉRAL :

> établir le contenu pour chaque partie :
        - pour le menu, on pourrait partir sur un méga menu en grid 2*2 avec les diff parties (plat/entrée/dessert) accessible via balise ?
        - ne pas oublier la possibilité de go back to top
        - pour le concept, un carré, une photo du maître des lieux ....
        - et le contact y ajouter un poti formulaire ? les horaires, la résa...
        - chaque partie (onglet) = un module différent !
        - la mécanique générale est établie, plus qu'à faire le contenu !
> ne pas oublier le CSS (général lui)

GL/HF, à la fin il ne doit rester qu'une balise div dans le HTML. :)

*/