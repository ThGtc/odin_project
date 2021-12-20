const moves = ["pierre", "papier", "ciseaux"];
let playerChoice = "";
let computerChoice = "";
let finalResult = "";

/* On créé une fonction qui retourne au hasard Pierre Feuille ou Ciseau (servira + tard pour le tour de l'ordi) */

let computerPlay = () => {
    let result = moves[(Math.floor(Math.random() *3))];
    computerChoice = result;
    return result;
    }

function playerMove () {
    let playerSelection = prompt("Pierre, papier, ciseaux ?");
    if (playerSelection.toLowerCase() == "pierre") {
        playerChoice = playerSelection.toLowerCase();
        return playerChoice;
    } else if (playerSelection.toLowerCase() == "ciseaux") {
        playerChoice = playerSelection.toLowerCase();
        return playerChoice;
    } else  if (playerSelection.toLowerCase() == "papier") {
        playerChoice = playerSelection.toLowerCase();
        return playerChoice;
    } else {
        alert("Entre un choix valide !")
        playerMove()
    }
}

function playRound () {
    playerMove();
    computerPlay();
    let result = "Vous avez choisi " + playerChoice + ", l'ordinateur a joué " + computerChoice;
    let winner = "";
    function whoWins () {
        if ((playerChoice === "papier" && computerChoice == "pierre") || (playerChoice == "pierre" && computerChoice == "ciseaux") || (playerChoice == "ciseaux" && computerChoice == "papier")) {
            winner = "Tu as gagné ! :)";
        } else if ((playerChoice == "papier" && computerChoice == "ciseaux") || (playerChoice == "pierre" && computerChoice == "papier") || (playerChoice == "ciseaux" && computerChoice == "pierre")) {
            winner = "Tu as perdu :(";
        } else if ((playerChoice == "papier" && computerChoice == "papier") || (playerChoice == "pierre" && computerChoice == "pierre") || (playerChoice == "ciseaux" && computerChoice == "ciseaux")) {
            winner = "Pas de gagnant, match nul !"
        }
    }
    whoWins();
    finalResult = result + ". \n" + winner;
    return finalResult;
};

playRound();
alert(finalResult);
