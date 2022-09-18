import { Players, Ship, allBoats, Gameboard, boats } from "./gameMechanisms";
import { player1 } from "./index"

//pour générer un plateau vierge & pouvoir le réutiliser :
let currentPlayer = 0;
function renderGameboard(board){
    let x = 0;
    let y = ["A","B","C","D","E","F","G","H","I","J"];
    let z = 1;
    let i = 0;
    document.getElementById(`letters${board}`).innerHTML = "";
    document.getElementById(`numbers${board}`).innerHTML = "";
    let blanckNumber = document.createElement('div');
    document.getElementById(`numbers${board}`).appendChild(blanckNumber);
    document.getElementById(`gameboard${board}`).innerHTML = "";
    document.getElementById(`gameboard${board}`).style = `grid-template-columns: repeat(10,1fr);grid-template-rows: repeat(10,1fr)`;
    while (x < 10*10){
        if(z == 11){
            z = 1;
            i++;
        };
        
        let grille = document.createElement('div');
        grille.className = `cell${y[i]}${z}`;
        grille.id = `cell${y[i]}${z}board${board}`;
        document.getElementById(`gameboard${board}`).appendChild(grille);
        x++;
        z++;
    };

    y.forEach(letters => {
        let letter = document.createElement('div');
        letter.classList.add('letter');
        document.getElementById(`letters${board}`).appendChild(letter);
        letter.innerText = letters;

        let number = document.createElement('div');
        number.classList.add('number');
        document.getElementById(`numbers${board}`).appendChild(number);
        number.innerText = y.indexOf(letters)+1;
    });
};
renderGameboard(currentPlayer);

//pour générer une nouvelle partie :
let player2;
let horizontal;
let vertical;
let pawns = 0;
let occupiedCells = [];
let displayBoard = document.querySelector('.displayBoard');

document.getElementById('newGame').addEventListener('click', () => {
    if(player1 != undefined && player1.playerGameboard.getPlacedBoats != []){
        const askReset = confirm('Voulez vous vraiment recommencer la partie ? Attention, tout sera perdu !');
        if(askReset){
            window.location.reload()
        }else{
            return;
        };
    };
});

function beginPositionning(x){ //>>> l'argument x est le numéro du bateau dans le array allboats
    displayBoard.innerText = "";
    displayBoard.innerText = player1.getPlayerName() + ", positionnez vos différents bateaux :  " + allBoats[x].getName();
    horizontal = "";
    vertical = "";
    event.target.className = "";
    document.getElementById(`gameboard${currentPlayer}`).addEventListener('click', selectCell);
};

function selectCell(){
    horizontal = event.target.className;
    let beginCell = parseInt(horizontal.slice(5,7));
    let boatSize = parseInt(allBoats[pawns].getSize());
    let horizontalPositions = ["A","B","C","D","E","F","G","H","I","J"];
    let horizontalIndex = horizontalPositions.indexOf(horizontal.slice(4,5));
    let x = beginCell;
    let y = horizontalIndex;
    
    let northOrientation = document.getElementsByClassName('cell'+ horizontalPositions[horizontalIndex-boatSize+1] + beginCell)[0];
    let southOrientation = document.getElementsByClassName('cell'+ horizontalPositions[horizontalIndex+boatSize-1] + beginCell)[0];
    let eastOrientation = document.getElementsByClassName('cell'+ horizontal.slice(4,5) + (beginCell+boatSize-1))[0];
    let westOrientation = document.getElementsByClassName('cell'+ horizontal.slice(4,5) + (beginCell-boatSize+1))[0];
    let possibleOutcomes = [northOrientation, southOrientation, eastOrientation, westOrientation];
    const orientation = ["north", "south", "east", "west"];

    if(horizontal != ""){
        possibleOutcomes = [northOrientation, southOrientation, eastOrientation, westOrientation]
        function checkSpots(){
            while(y != horizontalIndex-boatSize){//check les cellules vers le nord puis l'ouest afin de vérifier s'il n'y a un bateau sur la route
                if(occupiedCells.includes('cell'+horizontalPositions[y]+beginCell)){ //vérifie le nord
                    possibleOutcomes.splice(0,1,undefined);
                };
                y--;
                while(x != beginCell-boatSize){ //vérifie l'ouest
                    if(occupiedCells.includes('cell'+horizontal.slice(4,5)+x)){
                        possibleOutcomes.splice(3,1,undefined);
                    };
                    x--;
                };
            };
            x = beginCell;
            y = horizontalIndex;
            while(y != horizontalIndex+boatSize){//check les cellules vers le sud puis l'est
                if(occupiedCells.includes('cell'+horizontalPositions[y]+beginCell)){ //vérifie le sud
                    possibleOutcomes.splice(1,1,undefined);
                };
                y++
                while(x != beginCell+boatSize){ //vérifie l'est
                    if(occupiedCells.includes('cell'+horizontal.slice(4,5)+x)){
                        possibleOutcomes.splice(2,1,undefined);
                    };
                    x++;
                };
            };
        };

        displayBoard.innerText += ". Bateau positionné en " + (horizontal.slice(4,7)) + ". Sélectionnez l'autre extrémité du navire.";
        document.getElementById(`gameboard${currentPlayer}`).removeEventListener('click', selectCell);
        checkSpots();
        possibleOutcomes.forEach(function (el) {
            if(el != undefined){
                el.style.backgroundColor = "green";
                el.addEventListener('click', selectSecondCell);
            };
        });
    };

    function selectSecondCell(){
        vertical = event.target.className;
        if(vertical == horizontal){
            document.getElementById(`gameboard${currentPlayer}`).removeEventListener('click', selectSecondCell);
            alert ("la case de fin ne peut pas être la même que celle du début !");
            vertical = "";
            document.getElementById(`gameboard${currentPlayer}`).addEventListener('click', selectSecondCell);
            return;
        };
        if(vertical != "" && vertical != horizontal){
            possibleOutcomes.forEach(function (el) {
                if(el != undefined){
                    el.style.backgroundColor = "";
                    el.style.border = "solid black";
                    if(el.className == vertical){
                        player1.playerGameboard.placeBoat(allBoats[pawns],horizontal.slice(4,5),horizontal.slice(5,7),(orientation[possibleOutcomes.indexOf(el)]));
                        player1.playerGameboard.getSpots().forEach(function (el){
                            let cell = "cell"+el;
                            occupiedCells.push(cell);
                            document.getElementsByClassName(cell)[0].style.backgroundColor = "purple";
                            document.getElementsByClassName(cell)[0].className = "";
                        });
                    };
                    el.removeEventListener('click', selectSecondCell);
                };
            });
            pawns++;
            if(pawns == 5){
                displayBoard.innerText = "Tous les bateaux ont été positionnés, commencer le jeu ?";
                let startGameBtn = document.createElement('button');
                startGameBtn.id = "startGameBtn";
                startGameBtn.innerText = "Commencer";
                displayBoard.appendChild(startGameBtn);
                startGameBtn.addEventListener('click', iniateAttack);
                pawns = 0;
                return;
            };
            beginPositionning(pawns);
        };
    };
};

function generateComputerBoard(){
    renderGameboard(1);//permet de créer un second gameBoard : ajouter la possibilité de le faire par/pour un humain, avec pose des pions et tout et tout ?
    player2 = Players("Computer", "computer");
    document.getElementById(`playerInfo1`).innerHTML = player2.getPlayerName();
    player2.playerGameboard.placeBoat(Ship("Porte-avions", 5), "A", 1, "east");//là c'est du prédef mais il doit y avoir une pirouette permettant de faire un random chiffre, lettre et orientation via random+array
    player2.playerGameboard.placeBoat(Ship("Croiseur", 4), "F", 6, "south");
    player2.playerGameboard.placeBoat(Ship("Torpilleur", 3), "E", 3, "west");
    player2.playerGameboard.placeBoat(Ship("Sous-Marin", 3), "J", 1, "north");
    player2.playerGameboard.placeBoat(Ship("Patrouilleur", 2), "D", 4, "south");
};

function iniateAttack(){ //permet de cliquer sur les cells pour lancer une l'attaque :
    generateComputerBoard();
    displayBoard.innerText = "";
    document.querySelector('.messageBoards').style.visibility = "visible";
    document.querySelector('.histoTitle').style.visibility = "visible";
    document.getElementById('historyBoard0').style.visibility = "visible";
    document.getElementById('historyBoard1').style.visibility = "visible";
    document.querySelector('.historyBoards').style.visibility = "visible";
    document.getElementById('gameInterface0').addEventListener('click', launchAttack);
    document.getElementById('gameInterface1').addEventListener('click', launchAttack);
}

function launchAttack(){
    let hittenCell = event.target.id[4]+event.target.id[5];
    if(event.target.id[6] == "0"){
        hittenCell += event.target.id[6];
    };
    if(event.target.id.includes("board1")){ //et celui-là du joueur ordinateur
        let outcome = player2.playerGameboard.recieveAttack(hittenCell);
        if(outcome.includes("spot already attacked")){
            return;
        }else{
            displayBoard.innerText = player1.getPlayerName() + " attaque la case " + hittenCell + " de son adversaire. " + outcome + " !";
            document.getElementById('historyBoard1').innerHTML += "<br> </br>" + displayBoard.innerText;
            document.getElementById('historyBoard1').scrollTop = document.getElementById('historyBoard1').scrollHeight;
            updateBoard(hittenCell, outcome, 1);
            hitRandomly();
        };
    };
    if(player1.playerGameboard.sunkenBoats.length == 5 || player2.playerGameboard.sunkenBoats.length == 5){
        let winner;
        if(player1.playerGameboard.sunkenBoats.length == 5){
            winner = player2.getPlayerName();
        }else{
            winner = player1.getPlayerName();
        };
        alert("We have a winner");
        displayBoard.innerText = winner + " remporte la partie !";
        document.getElementById('gameInterface0').removeEventListener('click', launchAttack);
        document.getElementById('gameInterface1').removeEventListener('click', launchAttack);
    };
};

function hitRandomly(){
    let cellToHit;
    getRandCell();
    function getRandCell(){
        let horizontalPositions = ["A","B","C","D","E","F","G","H","I","J"];
        let randomX = horizontalPositions[Math.floor(Math.random()*9)];
        let randomY = Math.floor(Math.random()*10+1);
        cellToHit = randomX + randomY;
        if((player1.playerGameboard.getMisses().includes(cellToHit)) || (player1.playerGameboard.getGoodHits().includes(cellToHit))){
            getRandCell();
        }else{
            attack();
        };
    };
    function attack(){
        let outcome = player1.playerGameboard.recieveAttack(cellToHit);
        document.getElementById('historyBoard0').innerHTML += "<br> </br>" + player2.getPlayerName() + " attaque la case " + cellToHit + " de son adversaire." 
            + outcome;
        updateBoard(cellToHit,outcome,0);
        document.getElementById('historyBoard0').scrollTop = document.getElementById('historyBoard0').scrollHeight;
    };
};

function updateBoard(hittenCell, outcome, boardNum){
    if(outcome == "touché" || outcome.includes("coulé")){
        document.getElementById('cell'+hittenCell+`board${boardNum}`).innerText = "📍";
        document.getElementById('cell'+hittenCell+`board${boardNum}`).className = "cellHitten";
        if(outcome.includes("coulé")){
            updateBoatCemetery(boardNum);
        };
    }else if(outcome == "manqué"){
        document.getElementById('cell'+hittenCell+`board${boardNum}`).innerText = "❌";
        document.getElementById('cell'+hittenCell+`board${boardNum}`).className = "cellMissed";
    };
};

function updateBoatCemetery(boardNum){
    let deadBoat = document.createElement('li');
    document.getElementById(`sunkenBoats${boardNum}`).appendChild(deadBoat);
    document.getElementById(`boatCemetery${boardNum}`).style.visibility = "visible";
    if(boardNum == 0){
        deadBoat.innerText = player1.playerGameboard.sunkenBoats[player1.playerGameboard.sunkenBoats.length-1];
    }else if(boardNum == 1){
        deadBoat.innerText = player2.playerGameboard.sunkenBoats[player2.playerGameboard.sunkenBoats.length-1];
    };
};

export {beginPositionning, pawns}