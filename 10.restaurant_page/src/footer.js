import { content } from './index';

function createFooter(){
    const footZone = document.createElement('footer');
    content.appendChild(footZone);
    const endZone = document.createElement('div');
    footZone.appendChild(endZone);
    endZone.setAttribute('id', 'endZone');
    endZone.textContent = "Restaurant La mangeoire de Lapinou - 22 rue des Carottes, 54321 Villefantoche - Ouvert de 9h à 21h en continu !"
}

export { createFooter }