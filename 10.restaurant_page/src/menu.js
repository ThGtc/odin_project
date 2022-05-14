import { content } from './index';
import { createHeader }  from "./header";
import { createFooter } from "./footer"

    /*
    Diviser la page en plusieurs parties : les entrées (un H2 central, en dessous notre boucle et les boîtes) / les plats (idem) / les desserts / et les formules...
    */

function createMenu(){
    content.innerHTML = "";
    createHeader();

    const menuArea = document.createElement('div');
    content.appendChild(menuArea);
    menuArea.setAttribute("id", "menuArea");

    const title = document.createElement('h2');
    menuArea.appendChild(title);
    title.innerHTML = "Salades"
    title.setAttribute("id","title")

    createBoxes(0, 10, 'MenuBox'); 
    //en réutilisant la fonction createBoxes, on peut générer autant de boîtes (y) que l'on souhaite pour notre partie
    //le "thing" = le nom donné aux ID de notre partie : title"thing", image"thing"... et le 'x', c'est pour s'y retrouver
    //tout ça permet ensuite de pouvoir les modifier individuellement, comme ci-dessous v

    titleMenuBox0.innerHTML = "Menu item number 1";
    imageMenuBox0.src = '../src/img/starter_0.jpg';
    imageMenuBox0.alt = 'vegSalad1';
    descriptionMenuBox0.innerHTML = "A very healthy vegan salad ! </br></br> & I cost 7.5€ !";

    titleMenuBox1.innerHTML = "Menu item number 2";
    imageMenuBox1.src = '../src/img/starter_1.jpg';
    imageMenuBox1.alt = 'vegSalad2';
    descriptionMenuBox1.innerHTML = "I am a superior salad ! </br></br> & I cost 10€ !";

    //etc, pour l'instant c'est lazy project donc tout sera généré de base dans la fonction.

    //.getElementById('MenuBox3').textContent = "Donc par ce système on pourrait imaginer pouvoir faire proprement chaque item du menu, après avoir généré auto l'ensemble des cases.."

    const otherTitle = document.createElement('h2');
    menuArea.appendChild(otherTitle);
    otherTitle.innerHTML = "Partie 2"

    createBoxes(0, 5, 'otherBoxes');
    document.getElementById('otherBoxes1').textContent = "I am diffenrent ! :)"

    const thirdPart = document.createElement('h2');
    menuArea.appendChild(thirdPart);
    thirdPart.innerHTML = "Partie 3"
    thirdPart.setAttribute("id","title")

    createBoxes(0, 2, 'moreBoxes');
    
    createFooter();
}

function createBoxes(x,y,thing){  //Notre fonction boucle pour pouvoir générer autant de content que l'on souhaite (need to update css)
    while (x < y){
        const menuBox = document.createElement('div') //créer la boîte mère
        menuArea.appendChild(menuBox);
        menuBox.setAttribute("id", `${thing}${x}`);

        const titleBox = document.createElement('h3'); //créer l'emplacement titre
        menuBox.appendChild(titleBox);
        titleBox.innerHTML = `Menu item number ${x+1}`
        titleBox.setAttribute("id",`title${thing}${x}`);


        const foodImg = document.createElement('img'); //créer l'emplacement illustration
        menuBox.appendChild(foodImg);
        foodImg.src = '../src/img/sloth-coffee.jpg'
        foodImg.setAttribute("id", `image${thing}${x}`);

        const foodDescription = document.createElement('p'); //créer la description
        menuBox.appendChild(foodDescription);
        foodDescription.innerHTML = "This is a random description. </br> </br> </br> Please wait for the sloth to finish his coffee. :)"
        foodDescription.setAttribute("id",`description${thing}${x}`);
        //poursuivre le modèle des boîtes en insérant un titre, un zone image et une zone description... ?
        // menuBox.textContent="Hello, je rempli du vide ! "
        // menuBox.textContent+="Bla bla bla Bla bla bla Bla bla bla Bla bla bla Bla bla bla Bla bla bla Bla bla bla Bla bla bla Bla bla bla Bla bla bla Bla bla bla "
        // menuBox.textContent+=" Et maintenant, on peut être rempli de choses sérieuses, stp ?"
        x++;
    }
}

export { createMenu }