const main = document.querySelector('main');
const navAbout = document.getElementById('nav-about');
const navProject = document.getElementById('nav-project');
//const navFun = document.getElementById('nav-fun');

const contenuAbout = `
    <h2 id="main-title">About Me</h2>
    <div id="main-content">
        <h3 id="main-content-first-title">From Placing Blocks to Writing Logic: My Journey in Tech.</h3>
        <h4>Hello! I'm Vithujan Sooriyaruban.</h4>
        <p class="main-text">It didn't start with a line of code. It started with a block.</p>
        <p class="main-text">Five years ago, like many, I was exploring the infinite worlds of <strong>Minecraft</strong>. But while others were just playing, I became obsessed with the mechanics behind the game. I wanted to understand <em>how</em> it worked, <em>why</em> it reacted the way it did, and how I could manipulate the logic to create something new. That curiosity was the spark that turned a hobby into a calling.</p>
        <p class="main-text">Fast forward to today, based in <strong>Paris</strong>, I have just completed my <strong>Bachelor’s degree in Computer Science</strong>. That initial spark has evolved into a disciplined passion for problem-solving and digital architecture.</p>
        <hr>
        <h4>How I Work: The Intersection of Intuition and Method</h4>
        <p class="main-text">I believe the best code comes from a balance of creativity and rigor. My approach is <strong>intuitive</strong> when brainstorming solutions, but strictly <strong>methodical</strong> when executing them. Whether I am untangling a complex algorithm in C or designing a smooth user experience in React, I rely on adaptability and discipline to get the job done right.</p>
        <p class="main-text">I am driven by discovery. Currently, I am exploring different horizons—from the intricacies of <strong>AI & Machine Learning</strong> to the robustness of <strong>Cybersecurity</strong>—before narrowing my focus for my upcoming Master’s degree.</p>
        <h4>My Technical Arsenal</h4>
        <p class="main-text">Over the years, I have built a versatile toolkit that allows me to work across the full stack:</p>
        <ul class="main-list">
            <li><strong>Languages:</strong> I am fluent in the classics and the moderns, including <strong>Java, Python, C, Scala, OCaml,</strong> and the full web stack (<strong>HTML/CSS/JS/PHP</strong>).</li>
            <li><strong>Development & Frameworks:</strong> I love building responsive applications using <strong>React, React Native, Express.js,</strong> and <strong>Laravel</strong>.</li>
            <li><strong>Data & Intelligence:</strong> I manage data with <strong>SQL (MySQL, SQLite)</strong> and <strong>MongoDB</strong>, and I am currently diving into <strong>Machine Learning with SKLearn</strong>.</li>
            <li><strong>Infrastructure & Security:</strong> Understanding the network is key. I have skills in <strong>Cryptography, Cisco Meraki, Active Directory,</strong> and <strong>Linux (Ubuntu)</strong> environments.</li>
        </ul>
        <hr>
        <h4>What's Next?</h4>
        <p class="main-text">My portfolio is not just a showcase of what I have done; it is a live documentation of what I am learning. While I have a dedicated page for my projects (which I highly recommend you check out!), this space is about the person behind the keyboard.</p>
        <p class="main-text">I am always open to discussing technology, potential collaborations, or simply the future of IT. If you want to talk code, logic, or even Minecraft, feel free to reach out.</p>
        <p class="main-text contact-email">📧 <a href="mailto:vithujan200426@gmail.com">vithujan200426@gmail.com</a></p>
    </div>
`;

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