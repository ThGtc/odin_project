import { content } from './index';
import { createHeader }  from "./header";
import { createHome } from './home';
import { createMenu } from './menu';
import { createAbout } from './about';
import { createContact } from './contact';
import { createFooter } from './footer';


function displayPage(){
    switch(true){
        case(this.innerHTML == "Accueil"):
            content.innerHTML = "";
            createHeader()
            createHome()
            createFooter()
            return;
        case(this.innerHTML == "Menu"):
            createMenu()
            return;
        case(this.innerHTML == "Concept"):
            createAbout()
            return;
        case(this.innerHTML == "Contact"):
            createContact()
        return;
    }
    console.log(this.innerText)
}

export { displayPage }