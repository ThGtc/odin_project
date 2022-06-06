(()=>{"use strict";var e={d:(t,s)=>{for(var n in s)e.o(s,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:s[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(){let e=k;const t=document.createElement("li");t.className=p.projects[k].title,t.setAttribute("id",`${p.projects[k].title}`),t.innerHTML=p.projects[k].title,document.getElementById("projectsLists").appendChild(t),t.addEventListener("click",(()=>{n(e)}))}e.d({},{L:()=>g});let s=0;function n(e){s=e,g.innerHTML="",document.getElementById("currentToDo").innerHTML=`${p.projects[e].title} : Vos tâches en cours`,o(),document.getElementById("deleteProject").style.display=0==s?"none":"flex"}function o(){for(let e=0;e<p.projects[s].tasks.length;e++){const t=document.createElement("div");t.className=`taskContent${e}`,t.setAttribute("id",`task${e}`),"Over"==p.projects[s].tasks.status&&(t.style.borderLeft="solid 10px rgba(0, 128, 0, 0.75)"),document.querySelector(".taskBlock").appendChild(t);const n=document.createElement("h3");n.className="taskTitle",document.getElementById(`task${e}`).appendChild(n),n.innerHTML=p.projects[s].tasks[e].title;const o=document.createElement("p");o.className="taskDescription",document.getElementById(`task${e}`).appendChild(o),o.innerHTML=p.projects[s].tasks[e].description;const i=document.createElement("div");i.className="taskDueDate",document.getElementById(`task${e}`).appendChild(i);const d=p.projects[s].tasks[e].dueDate,[u,m,k]=d.split("-"),y=`${k}/${m}/${u}`;p.projects[s].tasks[e].dueDate>new Date&&console.log("????"),i.innerHTML=`Prévu pour le ${y}`;const j=document.createElement("div");j.className="taskBottom",j.setAttribute("id",`taskBottom${e}`),document.getElementById(`task${e}`).appendChild(j),c(e),l(e),r(e),a(e),E()}}function c(e){const t=document.createElement("button");t.className="statusButton",t.setAttribute("id",`statusButton${e}`),document.getElementById(`taskBottom${e}`).appendChild(t),r(e)}function r(e){const t=document.getElementById(`statusButton${e}`);switch(!0){case"Over"==p.projects[s].tasks[e].status:l(e),t.addEventListener("click",(()=>{p.projects[s].tasks[e].status="Not over",document.getElementById(`task${e}`).style.borderLeft="solid 10px rgba(255, 0, 0, 0.75)",r(e),E()}));break;case"Over"!=p.projects[s].tasks[e].status:l(e),t.addEventListener("click",(()=>{p.projects[s].tasks[e].status="Over",document.getElementById(`task${e}`).style.borderLeft="solid 10px rgba(0, 128, 0, 0.75)",r(e),E()}))}}function l(e){const t=document.getElementById(`statusButton${e}`);switch(!0){case"Over"==p.projects[s].tasks[e].status:t.setAttribute("title","Tâche pas finie ?"),t.innerHTML="✔",document.getElementById(`task${e}`).style.borderLeft="solid 10px rgba(0, 128, 0, 0.75)";break;case"Over"!=p.projects[s].tasks[e].status:t.setAttribute("title","Tâche finie ?"),t.innerHTML="✖",document.getElementById(`task${e}`).style.borderLeft="solid 10px rgba(255, 0, 0, 0.75)"}}function a(e){const t=document.createElement("button");t.className="deleteButton",document.getElementById(`taskBottom${e}`).appendChild(t),t.setAttribute("title","Supprimer cette tâche ?"),t.innerHTML="✖",t.addEventListener("click",(()=>{p.projects[s].tasks.splice(e,1),document.getElementById(`task${e}`).remove(),E()}))}document.getElementById("deleteProject").addEventListener("click",(()=>{if(confirm("Voulez-vous vraiment supprimer ce projet ?")){p.projects.splice(s,1);let e=1;for(;e<p.projects.length;)p.projects[e].index=e,e++;document.getElementById("projectsLists").removeChild(document.querySelector(`#projectsLists :nth-child(${s})`)),E(),n(0),h()}}));const i=document.getElementById("addTask");function d(e,t,s,n){this.title=e,this.description=t,this.dueDate=s,this.status=n}function u(e,t,s){this.title=e,this.index=t,this.tasks=[]}i.style.display="none",document.getElementById("newToDo").addEventListener("click",(()=>(i.style.display="flex",document.getElementById("taskTitle").focus(),void document.addEventListener("keydown",(function(e){"Escape"===e.key&&(i.style.display="none")}))))),document.querySelector(".close").addEventListener("click",(()=>i.style.display="none")),i.addEventListener("submit",(e=>{e.preventDefault();const t=new d(i.taskTitle.value,i.taskDescription.value,i.taskDueDate.value);p.projects[s].tasks.push(t),E(),i.reset(),g.innerHTML="",i.style.display="none",o(),E()}));let p=new function(e){this.projects=[]},m=new u("Accueil",0),k=0;const y=new d("Test","Faire des essais sur le super projet","2023-01-20");function j(e,t,s,n){m.tasks.push(new d(e,t,s,n))}function h(){let e=localStorage.getItem("saved");if(null===e)p.projects.push(m);else if(0!=JSON.parse(e).length){p.projects=[],document.getElementById("projectsLists").innerHTML="";let s=0;for(;s<JSON.parse(e).projects.length;)p.projects.push(JSON.parse(e).projects[s]),s++;let n=1;for(;n<p.projects.length;){let e=new u(`${p.projects[n].title}`,p.projects[n].index);p.projects[n].index=n,k=n,t();let s=0;for(;s<p.projects[n].tasks.length;)e.tasks.push(p.projects[n].tasks[s]),E(),s++;n++}}}function E(){k=0,localStorage.setItem("saved",JSON.stringify(p))}m.tasks.push(y),j("Courses","Acheter des pommes","2022-06-08"),document.getElementById("addProject").addEventListener("click",(function e(){let s=new u(prompt("Nom du projet ?"),p.projects.length);if(""==s.title)alert("Veuillez entrer au moins un caractère !"),e();else if(null==s.title)return;k=s.index,p.projects.push(s),t(),E()})),document.getElementById("homepage").addEventListener("click",(()=>{n(0)}));const g=document.querySelector(".taskBlock");j("Hello","There","2023-01-01","Over"),h(),n(0)})();