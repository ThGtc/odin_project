import { content } from './index';
import { createMenu } from './menu';

function createHome(){

    const main = document.createElement('div');
    content.appendChild(main);
    main.setAttribute("id", "main");

    const firstBox = document.createElement('div');
    main.appendChild(firstBox);
    firstBox.setAttribute("id", "contentBox1")
    firstBox.innerHTML+="Votre nouveau concept de restaurant végan, situé en plein coeur de la vieille ville. </br>" + 
                        "Tout le monde y trouvera son bonheur, petits et grands ! </br>" + "</br>" + 
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eveniet earum cumque vitae, numquam sunt odit quaerat fugiat reiciendis, " +
                        "ratione culpa cum iste quasi dolores nihil aspernatur quo repellat optio." + 
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eveniet earum cumque vitae, numquam sunt odit quaerat fugiat reiciendis, " +
                        "ratione culpa cum iste quasi dolores nihil aspernatur quo repellat optio." +
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eveniet earum cumque vitae, numquam sunt odit quaerat fugiat reiciendis, " +
                        "ratione culpa cum iste quasi dolores nihil aspernatur quo repellat optio." + 
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eveniet earum cumque vitae, numquam sunt odit quaerat fugiat reiciendis, " +
                        "ratione culpa cum iste quasi dolores nihil aspernatur quo repellat optio." +
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eveniet earum cumque vitae, numquam sunt odit quaerat fugiat reiciendis, " +
                        "ratione culpa cum iste quasi dolores nihil aspernatur quo repellat optio." + 
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium eveniet earum cumque vitae, numquam sunt odit quaerat fugiat reiciendis, " +
                        "ratione culpa cum iste quasi dolores nihil aspernatur quo repellat optio.";

    const secondBox = document.createElement('div');
    main.appendChild(secondBox);
    secondBox.setAttribute("id", "contentBox2")
    secondBox.innerHTML = `<div> Pour consulter notre carte, c'est <button id="callMenu"> par ici !</button></div>`;
    const callMenu = document.getElementById('callMenu');
    callMenu.addEventListener('click', createMenu);
    
    const thirdBox = document.createElement('div');
    main.appendChild(thirdBox);
    thirdBox.setAttribute("id", "contentBox")
    thirdBox.innerText = "Un petit peu plus de texte par là.";

}

function createContentBox(x, boxName){
    document.createElement('div');
    x.appendChild(contentBox1);
    contentBox1.setAttribute("id", "main")
}

export { createHome }