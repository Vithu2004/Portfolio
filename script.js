const main = document.querySelector('main');
const navAbout = document.getElementById('nav-about');
const navProject = document.getElementById('nav-project');
//const navFun = document.getElementById('nav-fun');

const contenuAbout = "<h2 id=\"main-title\">About</h2>\n" +
    "                <div id=\"main-content\">\n" +
    "                    <p>\n" +
    "                        Hello! I'm Visar, a passionate web developer with a knack for creating engaging and user-friendly websites. With a background in computer science and a love for design, I strive to build digital experiences that are both functional and visually appealing.\n" +
    "                    </p>\n" +
    "                </div>";

const contenuProjects = "<h2 id=\"main-title\">Projects</h2>\n" +
    "                <div id=\"main-content\">\n" +
    "                    <p>\n" +
    "                        Here are some of the projects I've worked on recently. From personal websites to collaborative applications, each project reflects my dedication to quality and innovation in web development.\n" +
    "                    </p>\n" +
    "                </div>";

navAbout.addEventListener('click', () => {
    main.innerHTML = contenuAbout;
});

navProject.addEventListener('click', () => {
    main.innerHTML = contenuProjects;
});

// navFun.addEventListener('click', () => {
//     main.innerHTML = contenuFun;
// });