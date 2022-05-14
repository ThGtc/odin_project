import { content } from './index';
import { displayPage } from './displayPages'
import { createHome } from './home';
import { createMenu } from './menu';
import { createFooter } from './footer';

//ici, notre header : obligé de créer un import pour display les pages du header cause les deux fonction s'invoquent mutuellement.

const navBarElements = ["Accueil", "Menu", "Concept", "Contact"];

function createHeader(){

    const superTitle = document.createElement('div');
    content.appendChild(superTitle);
    superTitle.setAttribute("id", "superTitle");

    const titleThing = document.createElement('h1');
    superTitle.appendChild(titleThing);
    titleThing.innerHTML = "La Mangeoire de Lapinou";

    const navBar = document.createElement('div');
    superTitle.appendChild(navBar);
    navBar.setAttribute("id", "navBar");

    populateHeader();
    
}

function populateHeader(){
    let x = 0;
    while (x < navBarElements.length){
        const navBox = document.createElement('div')
        navBar.appendChild(navBox);
        navBox.setAttribute("id", `navBox${x}`);
        navBox.innerHTML = navBarElements[x];
        navBox.addEventListener('click',displayPage);
        x++;
    }
}


export { createHeader }