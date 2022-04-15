//créer notre grille de jeu et les joueurs
const Gameboard = (() => {
    const boardGame = ['','','','','','','','',''];
    document.querySelector('.gameBoard').innerHTML = "";
    let x = 0;
    while (x < boardGame.length){
        const gameCell = document.createElement('div');
        document.querySelector('.gameBoard').appendChild(gameCell);
        gameCell.className = `cell${x}`;
        gameCell.innerHTML = boardGame[x];
        x++
    };
    return boardGame
})();

const Players = (() => {
    let realPlayer1 = "O"
    let realPlayer2 = "X"
    let player1 = () =>{
        return realPlayer1;
    };
    let player2 = () =>{
        return realPlayer2;
    };
    return {player1, player2};
})();

//assigner les pions...
const Pawns = (() => {
    const pawn = document.querySelectorAll('[class^="pawn"]')
    const leftScore = document.querySelector('.leftScore')
    const rightScore = document.querySelector('.rightScore');
    let realfirstPlayer = "";
    let firstPlayer = () => {
        return realfirstPlayer
    }
    let realcomputerPlayer = "";
    let computerPlayer = () => {
        return realcomputerPlayer
    }
    pawn.forEach(element => {
        element.addEventListener('click',e => {
            let x = e.target.name;
            document.querySelector('.newGame').style.display = "none";
            switch(true){
                case (x == Players.player1()):
                case (x == Players.player2()):
                    if(x == Players.player1()){
                        realfirstPlayer = x
                    } else if(x == Players.player2()){
                        realfirstPlayer = x;
                    };
                    leftScore.innerHTML = `Joueur 1 : </br> 0`
                    rightScore.innerHTML = `Joueur 2 : </br> 0`
                    break;
                case (x == "IA"):
                    realfirstPlayer = Players.player1(); //toi les O
                    realcomputerPlayer = Players.player2(); //l'ordi jouera les X
                    leftScore.innerHTML = `Humain : </br> 0`
                    rightScore.innerHTML = `Ordi : </br> 0`
                    break;
                }
            });
    });
    return {leftScore, rightScore, firstPlayer, computerPlayer};
})(); 

// et ensuite interagir avec le plateau :
const GameMechanism = (() =>{
    const cells = Array.from(document.querySelectorAll('[class^="cell"]'));
    let turns = 0;
    let lastTurn = ""
    let winner = "";
    let player1Score = 0;
    let player2Score = 0;
    let displayWinner = document.querySelector('.winner');
    document.querySelector('.resetGame').addEventListener('click', () => {
        document.querySelector('.newGame').style.display = "flex";
        Pawns.leftScore.innerHTML = "";
        Pawns.rightScore.innerHTML = "";
        player1Score = 0;
        player2Score = 0;
        clearAfterGame()
    })
    cells.forEach(element => {
        element.addEventListener('click',() => {
            if (element.innerHTML != ""){
                return
            } else if (turns == 0){ //pour jouer le premier tour
                element.innerHTML = Pawns.firstPlayer();
                lastTurn = Pawns.firstPlayer();
                updateGameboard()
                if(Pawns.computerPlayer() != ""){
                    playIA();
                    return;
                };
                turns++;
            } else {
                switch(true){
                    case (lastTurn == "X"):
                        element.innerHTML = Players.player1()
                        turns++
                        lastTurn = Players.player1()
                        updateGameboard()
                        if(Pawns.computerPlayer() != ""){
                            playIA();
                            break;
                        };
                        break; 
                    case (lastTurn == "O"):
                        if(Pawns.computerPlayer() != ""){
                            playIA();
                            turns++
                            lastTurn = Players.player2()
                            return;
                        };
                        element.innerHTML = Players.player2()
                        updateGameboard()
                        turns++
                        lastTurn = Players.player2()
                        break;
                };
            }
            function playIA(){    
                if (Gameboard.includes("") == false){
                    return
                }
                placePawn()
                updateGameboard()
                function placePawn(){
                    let getRandomNum = () => {return Math.floor(Math.random()*Gameboard.length)}
                    let chosenCell = document.querySelector(`.cell${getRandomNum()}`)
                    if (chosenCell.innerHTML == ""){
                        chosenCell.innerHTML = Players.player2()
                    } else {
                        placePawn()
                    }
                }
                turns++;
                lastTurn = Players.player2();
                return
            }
            function updateGameboard(){
                let x = 0;
                while (x < Gameboard.length){
                    Gameboard[x] = document.querySelector(`.cell${x}`).innerHTML
                    x++
                };
            };
            //pour désigner un vainquer
            const endGame = (() => {
                const winningCombos = [
                    [Gameboard[0], Gameboard[1], Gameboard[2]],
                    [Gameboard[3] , Gameboard[4] , Gameboard[5]],
                    [Gameboard[6] , Gameboard[7] , Gameboard[8]],
                    [Gameboard[0] , Gameboard[4] , Gameboard[8]],
                    [Gameboard[2] , Gameboard[4] , Gameboard[6]],
                    [Gameboard[0] , Gameboard[3] , Gameboard[6]],
                    [Gameboard[1] , Gameboard[4] , Gameboard[7]],
                    [Gameboard[2] , Gameboard[5] , Gameboard[8]]
                ]
                winningCombos.forEach(e => {
                    const OisWinning = (currentPawn) => currentPawn == "O";
                    const XisWinning = (currentPawn) => currentPawn == "X";
                    if (e.every(OisWinning) == true){
                        winner = "O"
                        clearAfterGame()
                    } else if (e.every(XisWinning) == true){
                        displayWinner.innerHTML = "Victoire des croix !"
                        winner = "X"
                        clearAfterGame()
                    }
                })
                if (Gameboard.includes("") == false){
                    if (winner == ""){
                        displayWinner.innerHTML = "Match nul !"
                        clearAfterGame()
                    } else {return}
                }
            })();
        })
    });
    function clearAfterGame(){
        let x = 0;
        while (x < Gameboard.length){
            Gameboard[x] = ""
            x++
        };
        updateLeaderBoard()
        winner = ""
        cells.forEach(element => element.innerHTML = "")
        turns = 0
    }
    function updateLeaderBoard(){
        switch(true){
            case(winner == "X" && Pawns.computerPlayer() != ""):
                player2Score++
                displayWinneer.innerHTML = "Victoire de l'ordi ! 🤖"
                Pawns.rightScore.innerHTML = `Ordi : </br> ${player2Score}`
            break;
            case(Pawns.firstPlayer() == "O" && winner == "O"):
            case(Pawns.firstPlayer() == "X" && winner == "X"):
                player1Score++
                displayWinner.innerHTML = "Vous avez gagné ! 🥳"
                if(Pawns.computerPlayer() != ""){Pawns.leftScore.innerHTML = `Humain : </br> ${player1Score}`}
                else{Pawns.leftScore.innerHTML = `Joueur 1 : </br> ${player1Score}`}
                break;
            case(Pawns.firstPlayer() == "O" && winner == "X"):
            case(Pawns.firstPlayer() == "X" && winner == "O"):
                player2Score++
                displayWinner.innerHTML = "Victoire du joueur 2 ! 🥳"
                Pawns.rightScore.innerHTML = `Joueur 2 : </br> ${player2Score}`
                break;
        }
    }
})();