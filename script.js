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
    <li class="nav-item" id="nav-project1">Project 1:<br>Understanding the invisible</li>
    <li class="nav-item" id="nav-project2">Project 2:<br>Decoding the Silence</li>
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
    window.scrollTo({ top: 0, behavior: 'smooth' });

    setTimeout(() => {
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
        }
        // Ajouter la classe fade-in
        main.classList.remove('main-fade-in'); // reset animation
        void main.offsetWidth; // trigger reflow
        main.classList.add('main-fade-in');
    }, 200);
}

//Animation
function animateOnLoad() {
    // Header
    const headerTitle = document.getElementById('header-title');
    const headerSubtitle = document.getElementById('header-subtitle');
    headerTitle.classList.add('header-fade-in');
    headerSubtitle.classList.add('header-fade-in');

    // Header icons : cascade
    const icons = document.querySelectorAll('.header-icon');
    icons.forEach((icon, index) => {
        icon.style.setProperty('--delay', `${0.3 + index * 0.2}s`);
        icon.classList.add('header-icon'); // déjà la classe
    });

    // Main content
    main.classList.add('main-fade-in');
}

// Initialisation
console.log("Script loaded");
setMenu(mainMenu);
main.innerHTML = contenuAbout;

// Appel après le DOM chargé
window.addEventListener('DOMContentLoaded', () => {
    animateOnLoad();
});