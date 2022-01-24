const ardoise = document.querySelector('.ardoise')
let grille = document.createElement('div');
let currentSize = document.createElement('div');
document.querySelector('body').appendChild(currentSize);
tailleDepart = 16;


//pour commencer, la fonction permettant de créer un nouveau quadrillage, d'une taille de départ de 16.

function nouvelleGrille(taille){
    let x = 0;
    let y = 0;
    ardoise.innerHTML = ""
    ardoise.style = `grid-template-columns: repeat(${taille},1fr);grid-template-rows: repeat(${taille},1fr)`;
    while (x < taille*taille){
        grille = document.createElement('div')
        grille.classList.add("carreau");
        ardoise.appendChild(grille)
        x++
        y = taille
    };
    colorier(0,0,0)
    currentSize.innerText = `On est actuellement sur une grille de ${y} x ${y} carreaux.`
}
nouvelleGrille(tailleDepart)


//ensuite le bouton permettant de changer la taille de la grille

const newSizeButton = document.querySelector('.nouvelleGrille');
newSizeButton.addEventListener('click', newSize);

function newSize(){
    let resultat = parseFloat(prompt("Quel quadrillage voulez vous ?"))
    if (resultat <= 0 || resultat >64){
        alert("Nombre trop grand (max = 64) ou trop petit (min = 1), veuillez reesayer")
        newSize()
    } else if (isNaN(resultat) === true){
        alert("Entrez seulement un chiffre !")
        newSize()
    } else {
        nouvelleGrille(resultat)
    }
}

//le bouton pour effacer l'ardoise en cours

const cleanupButton = document.querySelector('.cleanup');
cleanupButton.addEventListener('click', () =>{
    let carreau = Array.from(document.querySelectorAll('.carreau'));
    carreau.forEach(element => {
        element.style.backgroundColor = 'white'
    })
})

// et un bouton pour faire apparaître/disparaitre une "gomme"

const gommeButton = document.querySelector('.gomme');
function gommer(){
    gommeButton.addEventListener('click', () =>{
        gommeButton.hidden = true,
        colorier(255,255,255)
        let plusGommer = document.createElement('button')
        document.querySelector('.downButLeft').appendChild(plusGommer)
        plusGommer.innerText = "Plus gommer ?"
        plusGommer.addEventListener('click', () =>{
            colorier(0,0,0)
            gommeButton.hidden = false,
            plusGommer.hidden = true
        })
    })
}
gommeButton.addEventListener('click', gommer())

// la fonction puis le bouton pour colorier au hasard :)

function couleurAleatoire(){
    let carreau = Array.from(document.querySelectorAll('.carreau'));
        carreau.forEach(element => {
        let valueA = Math.floor(Math.random(255)*255)
        let valueB = Math.floor(Math.random(255)*255)
        let valueC = Math.floor(Math.random(255)*255)
        element.addEventListener('mouseover',() => {
            element.style.backgroundColor = `rgb(${valueA}, ${valueB}, ${valueC})`
        })
    })
}

const rainbowButton = document.querySelector('.arcEnCiel');
rainbowButton.addEventListener('click', couleurAleatoire)

// une autre pour choisir soi même sa couleur comme un grand !

const libreArbitre = document.querySelector('.libreArbitre');
libreArbitre.addEventListener('click',choisirCouleur)

function choisirCouleur(){
    let carreau = Array.from(document.querySelectorAll('.carreau'));
    carreau.forEach(element => {
        element.addEventListener('mouseover',() => {
        element.style.backgroundColor = libreArbitre.value;
        })
    })   
}
    //trouver un moyen de faire un pop up qui permettrait de choisir sa couleur, puis que le coloriage se fasse avec la couleur choisie
    //(et que ça ne soit pas handicapant pour les autres fonctions, hein)


// la fonction pour colorier qui est utilisée à chaque étape

function colorier(a,b,c){
    let carreau = Array.from(document.querySelectorAll('.carreau'));
    carreau.forEach(element => {
        element.addEventListener('mouseover',() => {
            element.style.backgroundColor = `rgb(${a}, ${b}, ${c})`
        })
    })
};