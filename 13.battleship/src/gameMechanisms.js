const Ship = (name, size) => {
    const n = name;
    const s = size;
    let getSize = () => size;
    let damages = Array(s);
    const getDamages = () => damages;

    function getHit(x){
        if(x < getSize()){
            damages[x] = "x";
        }else{return "pas bon"};
    };

    function isSunk(){
        return !damages.includes(undefined);
    };
    
    return {
        getName: () => n,
        getSize,
        getDamages,
        isSunk,
        getHit,
    };
};

let carrier = Ship("Porte-avions", 5);//ne peut pas être appelé 2 fois, sinon conflit entre les deux joueurs avec le même statut isSunk pour les deux
let battleship = Ship("Croiseur", 4);
let destroyer = Ship("Torpilleur", 3);
let submarine = Ship("Sous-Marin", 3);
let patrolBoat = Ship("Patrouilleur", 2);

let allBoats = [carrier, battleship, destroyer, submarine, patrolBoat];

const Gameboard = () => {
    let horizontalPositions = ["A","B","C","D","E","F","G","H","I","J"];
    let placedBoats = [];
    let finalMessage = "";
    let allPositions = [];
    function placeBoat(boat, horizontalPos, verticalPos, orientation){
        allPositions = [];
        const boatDetails = boat;
        let horizontalIndex = horizontalPositions.indexOf(horizontalPos);
        const getStartingPoint = () => horizontalPos+verticalPos;
        const getEndPoint = () => {
            switch(true){
                case(orientation == "north"):
                    if(horizontalPositions[horizontalIndex-(boat.getSize()-1)] === undefined){
                        return "invalid orientation";
                    }else{
                        return horizontalPositions[horizontalIndex-(boat.getSize()-1)]+verticalPos;
                    };
                case(orientation == "south"):
                    if(horizontalPositions[horizontalIndex+(boat.getSize()-1)] === undefined){
                        return "invalid orientation";
                    }else{
                        return horizontalPositions[horizontalIndex+(boat.getSize()-1)]+verticalPos;
                    };
                case(orientation == "east"):
                    if(parseInt(verticalPos)+(boat.getSize()-1) > 10){
                        return "invalid orientation";
                    }else{
                        return (horizontalPos+(parseInt(verticalPos)+(boat.getSize()-1)));
                    };
                case(orientation == "west"):
                    if((parseInt(verticalPos)-(boat.getSize()-1)) < 0){
                        return "invalid orientation";
                    }else{
                        return horizontalPos+(parseInt(verticalPos)-(boat.getSize()-1));
                    };
            };
        };
        function getBetweenPos(){
            let intermediateCoord;
            allPositions = [];
            switch(true){
                case(orientation == "west" || orientation == "north"):
                    allPositions.push(getEndPoint());
                    if(orientation == "west"){
                        intermediateCoord = (parseInt(verticalPos)-(boat.getSize()-1));
                        for(let x = 0; x < (boat.getSize()-2); x++){
                            intermediateCoord++;
                            allPositions.push(horizontalPos+intermediateCoord);
                        };
                    };
                    if(orientation == "north"){
                        for(let x = horizontalPositions.indexOf(getEndPoint()[0])+1; x < horizontalPositions.indexOf(getStartingPoint()[0]); x++){
                            allPositions.push(horizontalPositions[x]+verticalPos);
                        };
                    };
                    allPositions.push(getStartingPoint());
                    if(allPositions.length != boat.getSize()){
                        console.log('something went very wrong, I think');
                    };
                    break;
                case(orientation == "east" || orientation == "south"):
                    allPositions.push(getStartingPoint());
                    if(orientation == "east"){
                        let intermediateCoord = parseInt(verticalPos);
                        for(let x = 0; x < (boat.getSize()-2); x++){
                            intermediateCoord++;
                            allPositions.push(horizontalPos+intermediateCoord);
                        };
                    }
                    if(orientation == "south"){
                        for(let x = horizontalIndex+1; x < horizontalIndex+boat.getSize()-1; x++){
                            allPositions.push(horizontalPositions[x]+verticalPos);
                        }
                    }
                    allPositions.push(getEndPoint());
            };
        };
        const coveredArea = () => {
            if(getEndPoint() == "invalid orientation"){
                finalMessage = "try again, your ship is in the wrong orientation";
                return finalMessage;
            }else{
                if(checkSpots() == "Nope"){
                    finalMessage = "someone is already here, you need to relocate your ship";
                    return finalMessage;
                }else{
                    getBetweenPos();
                    finalMessage = allPositions;
                    return finalMessage;
                };
            };
        };
        function checkSpots(){
            for (const boats of placedBoats){
                for (const positions of allPositions){
                    if(boats[1].includes(positions)){
                        return "Nope";
                    };
                };
            };
        };
        if(coveredArea() != "invalid orientation, pls relocate this ship" && coveredArea() != "someone already here, move your asses"){
            placedBoats.push([boatDetails, coveredArea()]);
        };
        return finalMessage;
    };

    function recieveAttack(attackedCell){
        if(misses.includes(attackedCell) || goodHits.includes(attackedCell)){
            return "spot already attacked !";
        };
        let outcome = "manqué";
        for (const boats of placedBoats){
            if(boats[1].includes(attackedCell)){ //on vérifie que parmi les spots couverts, il y ait la cellule attaquée
                boats[1].indexOf(attackedCell);
                let positionToHit = boats[1].indexOf(attackedCell); //si oui, on va prendre la position de la cell dans l'array du bateau
                boats[0].getHit(positionToHit); //puis reporter cela dans l'objet en lui même
                goodHits.push(attackedCell);
                if(boats[0].isSunk() === true){ //et si le bateau a son statut "coulé" true : boum
                    sunkenBoats.push(boats[0].getName()); //on l'envoie dans le cimetière des bateaux
                    return `${boats[0].getName()} coulé !`;
                };
                return "touché";
            };
        };
        misses.push(attackedCell); //sinon ça continue et à la fin lorsque toutes les options ont été épuisées, on envoie la cellule à attaquer dans les loupés
        return outcome;
    };
    let misses = [];
    let goodHits = [];
    const getGoodHits = () => goodHits;
    const getMisses = () => misses;
    let sunkenBoats = [];

    return {
        //partie pas forcément nécessaire, mais garder pour les tests ?
        placedBoats,
        getSpecificBoat: (x) => placedBoats[x],
        getSpots : () => allPositions,
        //fin de la partie
        sunkenBoats,
        getPlacedBoats: () => placedBoats,
        recieveAttack,
        getMisses,
        getGoodHits,
        placeBoat,
    };
};

const Players = (name, type) =>{
    const typeOfPlayer = type;
    let playerGameboard = Gameboard();
    const timeToPlay = false; //projet humanVShuman = permettrait d'introduire un tour par tour
    return {
        getPlayerName: () => name,
        typeOfPlayer,
        timeToPlay,
        playerGameboard,
    };
};

export { Ship, allBoats, Gameboard, Players};