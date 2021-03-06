/* on commence par déclarer les bases : les coups, les choix des joueurs puis le résultat final*/

const moves = ["pierre", "papier", "ciseaux"];
let playerChoice = "";
let computerChoice = "";
let winOrLose = "";
let playerScore = 0;
let computerScore = 0;
let scoreBoard = "";
let displayResult = document.querySelector('#roundResult');
let replay = document.createElement('button');
replay.classList.add("replay");
replay.innerText = "Rejouer ?";

// on créé une fonction qui retourne au hasard Pierre Feuille ou Ciseau (pour le tour de l'ordi) */

let computerPlay = () => {
    let result = moves[(Math.floor(Math.random() *3))];
    computerChoice = result;
    };

// une fonction pour jouer une manche, qui fait appel aux deux précédentes fonctions, avec les différents résultats : victoire, défaite ou égalité*/

function playRound () {
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
    displayResult.textContent = finalResult;
};

// les mécanismes sont prêts, à présent on fait une fonction pour jouer 1 manche, avec un tableau des scores*/

function gameOn () {
    playRound()
    if (winOrLose == "win") {
            playerScore ++;
    } else if (winOrLose == "lose") {
            computerScore ++;
    }
    scoreBoard = "Le score est de " + playerScore + " pour toi et de " + computerScore + " pour ton adversaire invisible. :)"
    if (playerScore == 5) {
        alert("Tu as gagné, félicitations !")
        displayResult.textContent = "Fin du match, victoire du joueur humain !"
    } else if (computerScore == 5) {
        alert("Bouh, tu as perdu !")
        displayResult.textContent = "Fin du match, victoire de l'ordinateur !"
    } if ((playerScore == 5) || (computerScore == 5)){
        document.querySelector('.results').appendChild(replay)
        replay.hidden = false,
        buttons.forEach((button) => {
            button.disabled = true
            button.style.opacity = '25%'
        });
    };
};

// un event listener qui appelle&joue une manche lorsque l'on clique sur l'un des boutons & enregistre le choix du joueur

let displayScore = document.querySelector('#scoreboard');
let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener('click',() => {
        playerChoice = button.className,
        gameOn()
        displayScore.textContent = scoreBoard
    })
});

// enfin, on paramètre le bouton qui apparaît pour recommencer lorsque le score est arrivé à 5

replay.addEventListener('click', () => {
    playerScore = 0,
    computerScore = 0
    buttons.forEach((button) => {
        button.disabled = false,
        button.style.opacity = '100%'
    })
    displayResult.textContent = " ",
    displayScore.textContent = " ",
    replay.hidden = true
});