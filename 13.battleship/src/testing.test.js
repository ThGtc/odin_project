import { Gameboard, Ship, Players } from './gameMechanisms.js';

let carrier = Ship("Aircraft Carrier", 5);
let battleship = Ship("Battleship", 4);
let destroyer = Ship("Destroyer", 3);
let submarine = Ship("Submarine", 3);
let patrolBoat = Ship("Patrouilleur", 2);

//on simule un joueur qui pose quelque bateaux puis reçoit des coups par-ci par là:
let toto = Players("toto", "human");
toto.playerGameboard.placeBoat(destroyer, "F", 9, "west");
toto.playerGameboard.placeBoat(carrier, "A", 1, "east");
toto.playerGameboard.placeBoat(submarine, "C", 1, "east");
toto.playerGameboard.placeBoat(patrolBoat, "G", 9, "east");
toto.playerGameboard.recieveAttack("G7");
toto.playerGameboard.recieveAttack("G8");
toto.playerGameboard.recieveAttack("G9");
toto.playerGameboard.recieveAttack("C1");
toto.playerGameboard.recieveAttack("C2");

test('check sunk status of a boat', () => {
    expect(Ship("Aircraft Carrier", 5).isSunk()).toBe(false);
});

test('place a boat, correctly', () => {
    expect(Gameboard().placeBoat(carrier,"B",1, "east")).toStrictEqual(["B1", "B2", "B3", "B4", "B5"]);
});

test('place a boat, badly (the boat would be out of the gameboard w/ that orientation)', () => {
    expect(Gameboard().placeBoat(carrier,"A",1, "west")).toBe("try again, your ship is in the wrong orientation");
});

test('attack a position, but miss', () => {
    expect(Gameboard().recieveAttack("E7")).toBe("manqué");
});

test('checking that toto indeed placed some boats', () => {
    expect(toto.playerGameboard.getPlacedBoats()).not.toStrictEqual([])
});

test('attack a position, successfully', () => {
    expect(toto.playerGameboard.recieveAttack("A2")).toBe("touché")
});

test('see some misses hits', () => {
    expect(toto.playerGameboard.getMisses()).not.toStrictEqual([]);
});

test('place a boat, wrongly, badly, again (this time via toto)', () => {
    expect(toto.playerGameboard.placeBoat(battleship,"A",1, "east")).toBe("someone is already here, you need to relocate your ship");
});

test('attack an already attacked cell', () => {
    expect(toto.playerGameboard.recieveAttack("G9")).toBe("spot already attacked !");
});

test('attack again poor Toto, just for the sake of it :)', () => {
    expect(toto.playerGameboard.recieveAttack("G10")).toBe("Patrouilleur coulé !");
});