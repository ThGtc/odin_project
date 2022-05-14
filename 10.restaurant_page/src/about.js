import { content } from './index';
import { createHeader }  from "./header";
import { createFooter } from "./footer"


function createAbout(){
    content.innerHTML = "";
    createHeader();

    const main = document.createElement('div');
    content.appendChild(main);
    main.setAttribute("id", "main");
    
    const title = document.createElement('h2');
    main.appendChild(title);
    title.innerHTML = "À propos de nous..."
    title.setAttribute("id","title")

    const firstBox = document.createElement('div');
    main.appendChild(firstBox);
    firstBox.setAttribute("id", "aboutBox")

    const subtitle = document.createElement('h3');
    firstBox.appendChild(subtitle);
    subtitle.innerHTML = "Le chef !"
    title.setAttribute("id","title")

    const chiefCook = document.createElement('img');
    firstBox.appendChild(chiefCook);
    chiefCook.src = '../src/img/chiefcook.jpg';
    title.setAttribute("id","title")

    const chiefPresentation = document.createElement('p');
    firstBox.appendChild(chiefPresentation);
    chiefPresentation.innerHTML = "Chef lapinou, des années d'expérience pour vous proposer la meilleure nourriture qui soit. Et en plus, il est doux !"
    title.setAttribute("id","title")

    // const secondBox = document.createElement('div');
    // main.appendChild(secondBox);
    // secondBox.setAttribute("id", "contentBox")
    // secondBox.innerText = "Awesome food, option 2";

    // const thirdBox = document.createElement('div');
    // main.appendChild(thirdBox);
    // thirdBox.setAttribute("id", "contentBox")
    // thirdBox.innerText = "Even more awesome food, option 3 !";

    createFooter ();
}

export { createAbout }