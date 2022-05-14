import { content } from './index';
import { createHeader }  from "./header";
import { createFooter } from "./footer"


function createContact(){
    content.innerHTML = "";
    createHeader();

    const main = document.createElement('div');
    content.appendChild(main);
    main.setAttribute("id", "main");

    const formArea = document.createElement('div');
    formArea.setAttribute('id', 'formArea');
    main.appendChild(formArea);

    const formTitle = document.createElement('h3');
    formTitle.setAttribute('id', 'formTitle');
    formTitle.innerHTML = "Dites nous tout";
    formArea.appendChild(formTitle);

    const form = document.createElement('form');
    formArea.appendChild(form);
    form.method="post";
    form.action="";
    form.setAttribute('class', 'form');
    form.setAttribute('id', 'form');
    form.innerHTML = `
    <div class="formQuestion">
        <label for="firstName">Votre nom/prénom</label>
        <input type="text" name="firstName" id="firstName" required>
    </div>
    <div class="formQuestion">
            <label for="mail">Votre mail</label>
            <input type="email" name="mail" id="mail" required>
    </div>
    <div class="formQuestion">
            <label for="comment">Votre commentaire</label>
            <textarea id "comment" name "comment" rows="5" cols="33" required></textarea>
    </div>
    <button type="submit" form="form" class="signUpFormButton">Envoyer votre commentaire</button>
    `
    const otherInfos = document.createElement('h3');
    otherInfos.setAttribute('id', 'otherInfos');
    main.appendChild(otherInfos);
    otherInfos.innerHTML = "D'autres infos utiles"
    
    
    // const firstBox = document.createElement('div');
    // main.appendChild(firstBox);
    // firstBox.setAttribute("id", "contentBox")
    // firstBox.textContent="Hello there";

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

export { createContact }