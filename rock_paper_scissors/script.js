/* on commence par déclarer les bases : les coups, les choix des joueurs puis le résultat final*/

const moves = ["pierre", "papier", "ciseaux"];
let playerChoice = "";
let computerChoice = "";
let winOrLose = "";
let playerScore = 0;
let computerScore = 0;
let scoreBoard = "";

/* on créé une fonction qui retourne au hasard Pierre Feuille ou Ciseau (pour le tour de l'ordi) */

let computerPlay = () => {
    let result = moves[(Math.floor(Math.random() *3))];
    computerChoice = result;
    }

/* puis une fonction pour enregistrer le choix du joueur, en faisant attention à la casse des choix*/

function playerMove () {
    playerChoice = prompt("Pierre, papier, ciseaux ?").toLowerCase();
    if ((playerChoice != "pierre") && (playerChoice != "papier") && (playerChoice != "ciseaux")) {
        alert("Entre un choix valide !")
        playerMove()
    }
}

/* ensuite une fonction pour jouer une manche, qui fait appel aux deux précédentes fonctions, avec les différents résultats : victoire, défaite ou égalité*/

function playRound () {
    playerMove();
    computerPlay();
    let result = "Vous avez choisi " + playerChoice + ", l'ordinateur a joué " + computerChoice;
    let winner = "";
    function whoWins () {
        if ((playerChoice === "papier" && computerChoice == "pierre") || (playerChoice == "pierre" && computerChoice == "ciseaux") ||
        (playerChoice == "ciseaux" && computerChoice == "papier")) {
            winner = "Tu as gagné ! :)";
            winOrLose = "win";
        } else if ((playerChoice == "papier" && computerChoice == "ciseaux") || (playerChoice == "pierre" && computerChoice == "papier") ||
        (playerChoice == "ciseaux" && computerChoice == "pierre")) {
            winner = "Tu as perdu ! :(";
            winOrLose = "lose";
        } else if ((playerChoice == "papier" && computerChoice == "papier") || (playerChoice == "pierre" && computerChoice == "pierre") || 
        (playerChoice == "ciseaux" && computerChoice == "ciseaux")) {
            winner = "Pas de gagnant, match nul !"
            winOrLose = "draw";
        }
    }
    whoWins();
    let finalResult = result + ". \n" + winner;
    return finalResult;
};

/* le jeu est prêt, à présent on peut faire une fonction pour jouer 1 manche, avec un tableau des scores*/

function gameOn () {
    console.log(playRound())
    if (winOrLose == "win") {
            playerScore ++;
    } else if (winOrLose == "lose") {
            computerScore ++;
    }
    scoreBoard = "Le score est de " + playerScore + " pour toi et de " + computerScore + " pour ton adversaire invisible. :)"
    if (playerScore == 5) {
        alert("Tu as gagné, beau gosse !")
        console.log("Fin du match, victoire du joueur humain !")
    } else if (computerScore == 5) {
        alert("Bouh, tu as perdu !")
        console.log("Fin du match, victoire de l'ordinateur !")
    }
}

/* et finalement, une boucle pour jouer une partie en 5 manches, comme paramétré au dessus*/

while ((playerScore < 5) && (computerScore < 5)) {
    gameOn()
    console.log(scoreBoard)
};