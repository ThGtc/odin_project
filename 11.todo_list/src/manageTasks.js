import { generateProject, generateTasks } from "./render"

//un array pour chaque projet : ici celui par défaut/page d'accueil, dans lequel on a un autre array, avec tous ses todo

//la structure de chaque tâche/to-do
function Task(title, description, dueDate, status){
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.status = status
};
//puis de chaque projet
function Project(title, index, tasks){
    this.title = title
    this.index = index //
    this.tasks = [];
};
//et du tout ?
function Global(projects){
    this.projects  = [];
}

//l'objet saved qui permettra par la suite de gérer le local storage puis le default projet qui sera notre page d'accueil
let saved = new Global();
let defaultProject = new Project("Accueil",0,);
let projectIndex = 0; //on met 0, comme ça par défaut il est sur l'accueil

//quelques exemples pour peupler l'array basique d'accueil 
const testTask = new Task ('Test', 'Faire des essais sur le super projet', '2023-01-20');
defaultProject.tasks.push(testTask);
function addTask (title, dueDate, description, status){
    defaultProject.tasks.push(new Task(title, dueDate, description, status))
};
addTask('Courses', 'Acheter des pommes', '2022-06-08'); // <-- Deux façons de créer et intégrer des tasks à notre array defaultTasks

//pour restaurer la précédente session avec tous les projets tâches etc
function getPopulatedStorage(){
    let retrievedObject = localStorage.getItem('saved');
    if(retrievedObject === null){
        saved.projects.push(defaultProject);
    } else if(JSON.parse(retrievedObject).length !=0){
        saved.projects = []
        document.getElementById('projectsLists').innerHTML = ""
        let x = 0;
        while(x < JSON.parse(retrievedObject).projects.length){
            saved.projects.push(JSON.parse(retrievedObject).projects[x])
            x++
        }
        let y = 1;
        while(y < saved.projects.length){
            let newProject = new Project(`${saved.projects[y].title}`,saved.projects[y].index, )
            saved.projects[y].index = y;
            projectIndex = y;
            generateProject();
            let z = 0;
            while(z < saved.projects[y].tasks.length){
                newProject.tasks.push(saved.projects[y].tasks[z])
                populateStorage()
                z++
            }
            y++
        }
    }
};

//pour créer un projet via menu de gauche
const addProject = document.getElementById('addProject');
addProject.addEventListener('click',createProject);
function createProject(){
    let newProject = new Project((prompt('Nom du projet ?')),saved.projects.length, )
    if(newProject.title == ""){
        alert('Veuillez entrer au moins un caractère !');
        createProject();
    } else if (newProject.title == null){
        return
    }
    projectIndex = newProject.index;
    saved.projects.push(newProject)
    generateProject()
    populateStorage()
}

//pour revenir à la page d'accueil
const homepage = document.getElementById('homepage');
homepage.addEventListener('click', () => {
    generateTasks(0)
    })

//la mémoire ira sera conservée ici en localstorage
function populateStorage(){
    projectIndex = 0;
    localStorage.setItem('saved', JSON.stringify(saved));
}

export { generateTasks, Task, addTask, getPopulatedStorage, saved, projectIndex, populateStorage}