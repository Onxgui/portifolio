const translations = {
  pt: {
    //HEADER
    menu_home: "Início",
    menu_about: "Sobre mim",
    menu_projects: "Projetos", 

    //HOME
    title: "Guilherme Csizmar",
    subtitle: "Desenvolvedor Front-End",
    about: "Sempre tive uma grande paixão por tecnologia. Programar, desenvolver e explorar o universo da informática são coisas que me motivam todos os dias. Também sou fascinado pela impressão 3D, onde posso transformar ideias em criações reais. Para mim, nada se compara à satisfação de desenvolver soluções, experimentar novas possibilidades e aprender continuamente ao longo do caminho.",
    
    //SOBRE
     about_title: "Sobre Mim",
     about_p1: "Olá! Sou o Guilherme, aspirante a desenvolvedor e atualmente curso o 2º semestre de Ciência da Computação. Antes disso, estudei 10 semestres de Engenharia de Controle e Automação na Universidade Federal de Itajubá - Campus Itabira. Apesar de não ter concluído o curso, foi nesse período que construí uma base sólida em tecnologia e sistemas.",
     about_p2: "Tenho experiência em projetos com microcontroladores, modelagem e impressão 3D, além de programação em C++, HTML, CSS e JavaScript.",
     about_p3: "Apaixonado por tecnologia, sou movido pela curiosidade e pelo desejo de transformar ideias em soluções práticas. Busco sempre aprender novas ferramentas, colaborar em projetos desafiadores e evoluir continuamente na área de desenvolvimento.",
     about_p4: "Estou aberto a conexões e oportunidades para trocar experiências em tecnologia, programação e inovação.",

     //PROJETOS

     project_title: "Projetos"
     
},
  en: {
    //HEADER
    menu_home: "Home",
    menu_about: "About me",
    menu_projects: "Projects", 

    //HOME
    title: "Guilherme Csizmar",
    subtitle: "Front-End Developer",
    about: "I've always had a deep passion for technology. Programming, developing, and exploring the world of computing are things that motivate me every single day. I'm also fascinated by 3D printing, where I can turn ideas into real creations. For me, nothing compares to the satisfaction of developing solutions, experimenting with new possibilities, and continuously learning along the way.",
    
    //ABOUT
     about_title: "About me",
     about_p1: "Hello! I'm Guilherme, an aspiring developer currently in my second semester of Computer Science. Before that, I studied 10 semesters of Control and Automation Engineering at Universidade Federal de Itajubá - Campus Itabira. Although I did not complete the degree, during this time I built a solid foundation in technology and systems.",
     about_p2: "I have experience with projects involving microcontrollers, 3D modeling and printing, as well as programming in C++, HTML, CSS, and JavaScript.",
     about_p3: "Passionate about technology, I am driven by curiosity and the desire to turn ideas into practical solutions. I am always seeking to learn new tools, collaborate on challenging projects, and continue growing in the development field.",
     about_p4: "Always open to networking and exploring opportunities in technology, programming, and innovation.",

     //PROJECTS

     project_title: "Projects"
}
};


let currentLang = localStorage.getItem("lang") || "pt";
updateLanguage(currentLang);

document.getElementById("lang-toggle").addEventListener("click", () => {
  currentLang = currentLang === "pt" ? "en" : "pt";
  localStorage.setItem("lang", currentLang); // 👉 salva escolha
  updateLanguage(currentLang);
});

function updateLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.innerText = translations[lang][key];
  });

  // 👉 botão mostra o próximo idioma disponível
  document.getElementById("lang-toggle").innerText = lang === "pt" ? "English" : "Português";
}
