// script.js
import { contenuAbout, contenuPageProject, contenuProject1, contenuProject2 } from './content.js';

const main = document.querySelector('main');
const navContainer = document.querySelector('nav');



// Menus
const mainMenu = `
                <ul id="nav-list">
                    <li class="nav-item" id="nav-about">About Me</li>
                    <li class="nav-item" id="nav-project">Projects</li>
                </ul>`;
//<li class="nav-item" id="nav-fun">Fun</li>

const projectMenu = `
<ul id="nav-list">
    <li class="nav-item" id="nav-about">About Me</li>
    <li class="nav-item" id="nav-project1">Project 1 : Understanding <br>the invisible</li>
    <li class="nav-item" id="nav-project2">Project 2 :<br>Daily Mood</li>
</ul>`;

// Fonction pour afficher le menu et ajouter les listeners
function setMenu(menuHTML) {
    navContainer.innerHTML = menuHTML;

    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            handleMenuClick(item.id);
        });
    });

    if (menuHTML == projectMenu) {
        console.log("passe ici");
        document.querySelectorAll('.main-link').forEach(link => {
            link.addEventListener('click', () => {
                console.log("passe là");
                handleMenuClick(link.id);
            });
        })
    }

}

// Gestion des clics
function handleMenuClick(id) {
    switch (id) {
        case "nav-about":
            main.innerHTML = contenuAbout;
            setMenu(mainMenu);
            break;
        case "nav-project":
            main.innerHTML = contenuPageProject;
            setMenu(projectMenu);
            break;
        case "nav-project1":
            main.innerHTML = contenuProject1;
            break;
        case "nav-project2":
            main.innerHTML = contenuProject2;
            break;
        // case "nav-fun":
        //     main.innerHTML = "<h2>Fun Section Coming Soon!</h2>";
        //     break;
    }
}

// Initialisation
console.log("Script loaded");
setMenu(mainMenu);
main.innerHTML = contenuAbout;