
Sixième et dernier projet en vanilla JS dans le parcours "Full stack Javascript", avec webpack et le framework jest.

https://www.theodinproject.com/lessons/node-path-javascript-battleship

L'objectif de ce projet est de reproduire le jeu <a href="https://fr.wikipedia.org/wiki/Bataille_navale_(jeu)">bataille navale</a>, selon la logique 'Test driven development'. 
Donc dans un premier temps, réaliser tout le 'moteur' (les différents objets 'bateaux', 'plateau' puis 'joueur', permettant de jouer une partie complète, de la pose du bateau jusqu'à recevoir une attaque) du jeu en JS sans interface graphique. Vérifier par différents tests que chacune des étapes du jeu fonctionne et interagisse correctement.
Une fois cette étape effectuée, transposition des ces mécanismes de jeu dans une UI, sans revenir sur le fichier 'gameMechanisms.js'.

Projet en V1, fonctionnel mais sujet à plusieurs pistes d'améliorations : rendre le code moins 'spaghetti', le positionnement de l'ordinateur se ferait de manière random (actuellement des cases prédef), ses coups seraient plus intelligents (quand il toucherait un bateau, il irait par la suite attaquer les cases adjacentes) et intégrer la possibilité de jouer à deux joueurs 'humains'.