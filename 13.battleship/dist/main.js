(()=>{"use strict";var e={d:(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{T:()=>h});const t=(e,t)=>{const n=e;let a=()=>t,l=Array(t);return{getName:()=>n,getSize:a,getDamages:()=>l,isSunk:function(){return!l.includes(void 0)},getHit:function(e){if(!(e<a()))return"pas bon";l[e]="x"}}};let n=[t("Porte-avions",5),t("Croiseur",4),t("Torpilleur",3),t("Sous-Marin",3),t("Patrouilleur",2)];const a=()=>{let e=["A","B","C","D","E","F","G","H","I","J"],t=[],n="",a=[],l=[],o=[],r=[];return{placedBoats:t,getSpecificBoat:e=>t[e],getSpots:()=>a,sunkenBoats:r,getPlacedBoats:()=>t,recieveAttack:function(e){if(l.includes(e)||o.includes(e))return"spot already attacked !";for(const n of t)if(n[1].includes(e)){n[1].indexOf(e);let t=n[1].indexOf(e);return n[0].getHit(t),o.push(e),!0===n[0].isSunk()?(r.push(n[0].getName()),`${n[0].getName()} coulé !`):"touché"}return l.push(e),"manqué"},getMisses:()=>l,getGoodHits:()=>o,placeBoat:function(l,o,r,i){a=[];const s=l;let d=e.indexOf(o);const c=()=>o+r,m=()=>{switch(!0){case"north"==i:return void 0===e[d-(l.getSize()-1)]?"invalid orientation":e[d-(l.getSize()-1)]+r;case"south"==i:return void 0===e[d+(l.getSize()-1)]?"invalid orientation":e[d+(l.getSize()-1)]+r;case"east"==i:return parseInt(r)+(l.getSize()-1)>10?"invalid orientation":o+(parseInt(r)+(l.getSize()-1));case"west"==i:return parseInt(r)-(l.getSize()-1)<0?"invalid orientation":o+(parseInt(r)-(l.getSize()-1))}},u=()=>"invalid orientation"==m()?(n="try again, your ship is in the wrong orientation",n):"Nope"==function(){for(const e of t)for(const t of a)if(e[1].includes(t))return"Nope"}()?(n="someone is already here, you need to relocate your ship",n):(function(){let t;switch(a=[],!0){case"west"==i||"north"==i:if(a.push(m()),"west"==i){t=parseInt(r)-(l.getSize()-1);for(let e=0;e<l.getSize()-2;e++)t++,a.push(o+t)}if("north"==i)for(let t=e.indexOf(m()[0])+1;t<e.indexOf(c()[0]);t++)a.push(e[t]+r);a.push(c()),a.length!=l.getSize()&&console.log("something went very wrong, I think");break;case"east"==i||"south"==i:if(a.push(c()),"east"==i){let e=parseInt(r);for(let t=0;t<l.getSize()-2;t++)e++,a.push(o+e)}if("south"==i)for(let t=d+1;t<d+l.getSize()-1;t++)a.push(e[t]+r);a.push(m())}}(),n=a,n);return"invalid orientation, pls relocate this ship"!=u()&&"someone already here, move your asses"!=u()&&t.push([s,u()]),n}}},l=(e,t)=>({getPlayerName:()=>e,typeOfPlayer:t,timeToPlay:!1,playerGameboard:a()});let o,r,i;function s(e){let t=0,n=["A","B","C","D","E","F","G","H","I","J"],a=1,l=0;document.getElementById(`letters${e}`).innerHTML="",document.getElementById(`numbers${e}`).innerHTML="";let o=document.createElement("div");for(document.getElementById(`numbers${e}`).appendChild(o),document.getElementById(`gameboard${e}`).innerHTML="",document.getElementById(`gameboard${e}`).style="grid-template-columns: repeat(10,1fr);grid-template-rows: repeat(10,1fr)";t<100;){11==a&&(a=1,l++);let o=document.createElement("div");o.className=`cell${n[l]}${a}`,o.id=`cell${n[l]}${a}board${e}`,document.getElementById(`gameboard${e}`).appendChild(o),t++,a++}n.forEach((t=>{let a=document.createElement("div");a.classList.add("letter"),document.getElementById(`letters${e}`).appendChild(a),a.innerText=t;let l=document.createElement("div");l.classList.add("number"),document.getElementById(`numbers${e}`).appendChild(l),l.innerText=n.indexOf(t)+1}))}s(0);let d=0,c=[],m=document.querySelector(".displayBoard");function u(e){m.innerText="",m.innerText=h.getPlayerName()+", positionnez vos différents bateaux :  "+n[e].getName(),r="",i="",event.target.className="",document.getElementById("gameboard0").addEventListener("click",y)}function y(){r=event.target.className;let e=parseInt(r.slice(5,7)),t=parseInt(n[d].getSize()),a=["A","B","C","D","E","F","G","H","I","J"],l=a.indexOf(r.slice(4,5)),o=e,s=l,p=document.getElementsByClassName("cell"+a[l-t+1]+e)[0],v=document.getElementsByClassName("cell"+a[l+t-1]+e)[0],B=document.getElementsByClassName("cell"+r.slice(4,5)+(e+t-1))[0],f=document.getElementsByClassName("cell"+r.slice(4,5)+(e-t+1))[0],E=[p,v,B,f];const b=["north","south","east","west"];if(""!=r){function k(){for(;s!=l-t;)for(c.includes("cell"+a[s]+e)&&E.splice(0,1,void 0),s--;o!=e-t;)c.includes("cell"+r.slice(4,5)+o)&&E.splice(3,1,void 0),o--;for(o=e,s=l;s!=l+t;)for(c.includes("cell"+a[s]+e)&&E.splice(1,1,void 0),s++;o!=e+t;)c.includes("cell"+r.slice(4,5)+o)&&E.splice(2,1,void 0),o++}E=[p,v,B,f],m.innerText+=". Bateau positionné en "+r.slice(4,7)+". Sélectionnez l'autre extrémité du navire.",document.getElementById("gameboard0").removeEventListener("click",y),k(),E.forEach((function(e){null!=e&&(e.style.backgroundColor="green",e.addEventListener("click",I))}))}function I(){if(i=event.target.className,i==r)return document.getElementById("gameboard0").removeEventListener("click",I),alert("la case de fin ne peut pas être la même que celle du début !"),i="",void document.getElementById("gameboard0").addEventListener("click",I);if(""!=i&&i!=r){if(E.forEach((function(e){null!=e&&(e.style.backgroundColor="",e.style.border="solid black",e.className==i&&(h.playerGameboard.placeBoat(n[d],r.slice(4,5),r.slice(5,7),b[E.indexOf(e)]),h.playerGameboard.getSpots().forEach((function(e){let t="cell"+e;c.push(t),document.getElementsByClassName(t)[0].style.backgroundColor="purple",document.getElementsByClassName(t)[0].className=""}))),e.removeEventListener("click",I))})),d++,5==d){m.innerText="Tous les bateaux ont été positionnés, commencer le jeu ?";let e=document.createElement("button");return e.id="startGameBtn",e.innerText="Commencer",m.appendChild(e),e.addEventListener("click",g),void(d=0)}u(d)}}}function g(){s(1),o=l("Computer","computer"),document.getElementById("playerInfo1").innerHTML=o.getPlayerName(),o.playerGameboard.placeBoat(t("Porte-avions",5),"A",1,"east"),o.playerGameboard.placeBoat(t("Croiseur",4),"F",6,"south"),o.playerGameboard.placeBoat(t("Torpilleur",3),"E",3,"west"),o.playerGameboard.placeBoat(t("Sous-Marin",3),"J",1,"north"),o.playerGameboard.placeBoat(t("Patrouilleur",2),"D",4,"south"),m.innerText="",document.querySelector(".messageBoards").style.visibility="visible",document.querySelector(".histoTitle").style.visibility="visible",document.getElementById("historyBoard0").style.visibility="visible",document.getElementById("historyBoard1").style.visibility="visible",document.querySelector(".historyBoards").style.visibility="visible",document.getElementById("gameInterface0").addEventListener("click",p),document.getElementById("gameInterface1").addEventListener("click",p)}function p(){let e=event.target.id[4]+event.target.id[5];if("0"==event.target.id[6]&&(e+=event.target.id[6]),event.target.id.includes("board1")){let t=o.playerGameboard.recieveAttack(e);if(t.includes("spot already attacked"))return;m.innerText=h.getPlayerName()+" attaque la case "+e+" de son adversaire. "+t+" !",document.getElementById("historyBoard1").innerHTML+="<br> </br>"+m.innerText,document.getElementById("historyBoard1").scrollTop=document.getElementById("historyBoard1").scrollHeight,v(e,t,1),function(){let e;!function t(){let n=["A","B","C","D","E","F","G","H","I","J"][Math.floor(9*Math.random())],a=Math.floor(10*Math.random()+1);e=n+a,h.playerGameboard.getMisses().includes(e)||h.playerGameboard.getGoodHits().includes(e)?t():function(){let t=h.playerGameboard.recieveAttack(e);document.getElementById("historyBoard0").innerHTML+="<br> </br>"+o.getPlayerName()+" attaque la case "+e+" de son adversaire."+t,v(e,t,0),document.getElementById("historyBoard0").scrollTop=document.getElementById("historyBoard0").scrollHeight}()}()}()}if(5==h.playerGameboard.sunkenBoats.length||5==o.playerGameboard.sunkenBoats.length){let e;e=5==h.playerGameboard.sunkenBoats.length?o.getPlayerName():h.getPlayerName(),alert("We have a winner"),m.innerText=e+" remporte la partie !",document.getElementById("gameInterface0").removeEventListener("click",p),document.getElementById("gameInterface1").removeEventListener("click",p)}}function v(e,t,n){"touché"==t||t.includes("coulé")?(document.getElementById("cell"+e+`board${n}`).innerText="📍",document.getElementById("cell"+e+`board${n}`).className="cellHitten",t.includes("coulé")&&function(e){let t=document.createElement("li");document.getElementById(`sunkenBoats${e}`).appendChild(t),document.getElementById(`boatCemetery${e}`).style.visibility="visible",0==e?t.innerText=h.playerGameboard.sunkenBoats[h.playerGameboard.sunkenBoats.length-1]:1==e&&(t.innerText=o.playerGameboard.sunkenBoats[o.playerGameboard.sunkenBoats.length-1])}(n)):"manqué"==t&&(document.getElementById("cell"+e+`board${n}`).innerText="❌",document.getElementById("cell"+e+`board${n}`).className="cellMissed")}document.getElementById("newGame").addEventListener("click",(()=>{if(null!=h&&h.playerGameboard.getPlacedBoats!=[]){if(!confirm("Voulez vous vraiment recommencer la partie ? Attention, tout sera perdu !"))return;window.location.reload()}}));const B=document.getElementById("main"),f=document.getElementById("header"),E=document.getElementById("welcomePopUp");let h;window.onload=function(){B.classList.toggle("active"),f.classList.toggle("active"),E.classList.toggle("active")},document.getElementById("humanVScomputerBtn").addEventListener("click",(()=>{document.getElementById("player1Name").style.display="inherit",document.getElementById("askName").value=""})),document.getElementById("player1Name").addEventListener("submit",(e=>{e.preventDefault()})),document.getElementById("confirmPlayer1Name").addEventListener("click",(e=>{""!==document.getElementById("askName").value&&(h=l(document.getElementById("askName").value,"human"),B.classList.remove("active"),f.classList.remove("active"),E.classList.remove("active"),document.querySelector(".displayBoard").style.visibility="visible",document.getElementById("playerInfo0").innerHTML=h.getPlayerName(),u(d))}))})();