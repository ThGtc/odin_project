import { beginPositionning, pawns } from "./renderBoard.js";
import { Players } from "./gameMechanisms.js";

//pour le pop-up d'intro permettant de choisir le pseudo du joueur 1 :
const blur = document.getElementById('main');
const blur2 = document.getElementById('header');
const welcomeMsg = document.getElementById('welcomePopUp');

window.onload = function toggleWelcomeMsg(){
    blur.classList.toggle('active');
    blur2.classList.toggle('active');
    welcomeMsg.classList.toggle('active');
};

const humanVScomputerBtn =  document.getElementById('humanVScomputerBtn');
humanVScomputerBtn.addEventListener('click', ()=>{
    document.getElementById('player1Name').style.display = "inherit";
    document.getElementById('askName').value = "";
});

document.getElementById('player1Name').addEventListener('submit', (e)=>{
    e.preventDefault();
});

let player1; 

const confirmPlayer1Name = document.getElementById('confirmPlayer1Name');
confirmPlayer1Name.addEventListener('click', (e) =>{
    if(document.getElementById('askName').value !== ""){
        player1 = Players(document.getElementById('askName').value, "human");
        blur.classList.remove('active');
        blur2.classList.remove('active')
        welcomeMsg.classList.remove('active');
        document.querySelector('.displayBoard').style.visibility = "visible";
        document.getElementById(`playerInfo0`).innerHTML = player1.getPlayerName();
        beginPositionning(pawns);  
    };
});

export {player1}