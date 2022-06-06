import { taskBlock } from "./index";
import { Task, saved, projectIndex, populateStorage, getPopulatedStorage } from "./manageTasks";

//créer un nouveau projet dans le menu de gauche
function generateProject(){
    let z = projectIndex;
    const secondProject = document.createElement('li');
    secondProject.className = saved.projects[projectIndex].title;
    secondProject.setAttribute('id', `${saved.projects[projectIndex].title}`);
    secondProject.innerHTML = saved.projects[projectIndex].title;
    document.getElementById('projectsLists').appendChild(secondProject);
    secondProject.addEventListener('click', () => {       
        generateTasks(z);
    });
};

let otherIndex = 0;
//et pour faire apparaître les tâches dans la partie in the middle
function generateTasks(z){
    otherIndex = z;
    taskBlock.innerHTML = "";
    document.getElementById('currentToDo').innerHTML = `${saved.projects[z].title} : Vos tâches en cours`;
    createTaskElement();
    if(otherIndex == 0){
        document.getElementById('deleteProject').style.display = 'none';
    }else{
        document.getElementById('deleteProject').style.display = 'flex';
    }
};


//la zone du milieu : le nerf de la guerre avec toutes les tâches
//ici c'est pour générer les diff blocs de tâches
function createTaskElement(){//peut-être ici mettre ('machin' dans les parenthèses pour régler notre souci de selectedproject)
    for (let x = 0 ; x < saved.projects[otherIndex].tasks.length ; x++){
        const taskContent = document.createElement('div');
        taskContent.className = `taskContent${x}`;
        taskContent.setAttribute('id', `task${x}`);
        if(saved.projects[otherIndex].tasks.status == "Over"){ 
            taskContent.style.borderLeft = "solid 10px rgba(0, 128, 0, 0.75)";
        }
        document.querySelector(".taskBlock").appendChild(taskContent);

        const taskTitle = document.createElement('h3');
        taskTitle.className = 'taskTitle';
        document.getElementById(`task${x}`).appendChild(taskTitle);
        taskTitle.innerHTML = saved.projects[otherIndex].tasks[x].title;

        const taskDescription = document.createElement('p');
        taskDescription.className = 'taskDescription';
        document.getElementById(`task${x}`).appendChild(taskDescription);
        taskDescription.innerHTML = saved.projects[otherIndex].tasks[x].description;

        const taskDueDate = document.createElement('div');
        taskDueDate.className = 'taskDueDate';
        document.getElementById(`task${x}`).appendChild(taskDueDate);
        const date = saved.projects[otherIndex].tasks[x].dueDate;
        const [year, month, day] = date.split("-");
        const newDate = `${day}/${month}/${year}`;
        if(saved.projects[otherIndex].tasks[x].dueDate > new Date()){
            console.log('????')
        }
        taskDueDate.innerHTML = `Prévu pour le ${newDate}`;

        const taskBottom = document.createElement('div');
        taskBottom.className = "taskBottom";
        taskBottom.setAttribute('id', `taskBottom${x}`);
        document.getElementById(`task${x}`).appendChild(taskBottom);

        setStatusButton(x);
        updateStatusColor(x);
        updateStatusButton(x)
        setDeleteButton(x);
        populateStorage()
    };
};
//le bouton pour changer le statut de la tâche (finie/pas finie)
function setStatusButton(x){
    const statusButton = document.createElement('button');
    statusButton.className = 'statusButton';
    statusButton.setAttribute('id', `statusButton${x}`);
    document.getElementById(`taskBottom${x}`).appendChild(statusButton);
    updateStatusButton(x)
};
function updateStatusButton(x){
    const statusButton = document.getElementById(`statusButton${x}`)
    switch(true){
        case(saved.projects[otherIndex].tasks[x].status == "Over"):
            updateStatusColor(x)
            statusButton.addEventListener('click', ()=>{
                saved.projects[otherIndex].tasks[x].status = "Not over";
                document.getElementById(`task${x}`).style.borderLeft = "solid 10px rgba(255, 0, 0, 0.75)";
                updateStatusButton(x)
                populateStorage()
            });
            break;
        case(saved.projects[otherIndex].tasks[x].status != "Over"):
            updateStatusColor(x)
            statusButton.addEventListener('click', ()=>{
                saved.projects[otherIndex].tasks[x].status = "Over";
                document.getElementById(`task${x}`).style.borderLeft = "solid 10px rgba(0, 128, 0, 0.75)";
                updateStatusButton(x);
                populateStorage();
            });
            break;
    }
};

function updateStatusColor(x){
    const statusButton = document.getElementById(`statusButton${x}`)
    switch(true){
        case(saved.projects[otherIndex].tasks[x].status == "Over"):
            statusButton.setAttribute('title', 'Tâche pas finie ?');
            statusButton.innerHTML = '✔';
            document.getElementById(`task${x}`).style.borderLeft = "solid 10px rgba(0, 128, 0, 0.75)";
            break;
        case(saved.projects[otherIndex].tasks[x].status != "Over"):
            statusButton.setAttribute('title', 'Tâche finie ?');
            statusButton.innerHTML = '✖';
            document.getElementById(`task${x}`).style.borderLeft = "solid 10px rgba(255, 0, 0, 0.75)"
            break;
    }
}

//le bouton pour supprimer le projet
const removeProjectBtn = document.getElementById('deleteProject')
removeProjectBtn.addEventListener('click',()=>{
    if(confirm('Voulez-vous vraiment supprimer ce projet ?')){
        saved.projects.splice(otherIndex, 1);
        let z = 1;
        while (z < saved.projects.length){
            saved.projects[z].index = z
            z++
        }
        document.getElementById('projectsLists').removeChild(document.querySelector(`#projectsLists :nth-child(${otherIndex})`));
        populateStorage();
        generateTasks(0);
        getPopulatedStorage();
    }
})

//et pour supprimer la tâche
function setDeleteButton(x){
    const deleteButton = document.createElement('button');
        deleteButton.className = 'deleteButton';
        document.getElementById(`taskBottom${x}`).appendChild(deleteButton);
        deleteButton.setAttribute('title', 'Supprimer cette tâche ?');
        deleteButton.innerHTML = '✖';
        deleteButton.addEventListener('click', ()=>{
            saved.projects[otherIndex].tasks.splice(x, 1)
            document.getElementById(`task${x}`).remove()
            populateStorage()
        });
};


//le pop-up pour faire apparaître le formulaire d'ajout de todo
const taskForm = document.getElementById('addTask');
taskForm.style.display="none";
document.getElementById('newToDo').addEventListener('click', () => summonTaskForm());

function summonTaskForm(){
    taskForm.style.display = 'flex',
    document.getElementById('taskTitle').focus(),
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
            taskForm.style.display = 'none'
        }
    });
};
document.querySelector('.close').addEventListener('click', () => taskForm.style.display = 'none');


//gérer l'envoi du formulaire et ce qu'il advient de ses données (aka créer une tâche dans le projet choisi)
taskForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const task = new Task(
        taskForm.taskTitle.value,
        taskForm.taskDescription.value,
        taskForm.taskDueDate.value);
    saved.projects[otherIndex].tasks.push(task);
    populateStorage()
    taskForm.reset()
    taskBlock.innerHTML = "";
    taskForm.style.display="none";
    createTaskElement()
    populateStorage()
});

export { generateProject, generateTasks, createTaskElement, taskForm }