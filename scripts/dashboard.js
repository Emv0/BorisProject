pTitle = document.getElementById("p-title");
data1 = document.getElementById("data-1");
data2 = document.getElementById("data-2");
data3 = document.getElementById("data-3");
dataP = document.getElementById("data-p");
pageItem = document.getElementById("page-item");
h3Important = document.getElementById("h3-important");
homeItem = document.getElementById("home-item");
dashboardItem = document.getElementById("dashboard-item");
aboutUs = document.getElementById("about-us-item");
knowMore = document.getElementById("know-more");
dataBtn = document.getElementById("data-btn");
pTitle = document.getElementById("p-title");
h3Important = document.getElementById("h3-important");
lenguageFlag = localStorage.getItem("lenguageFlag");
lenguageButton = document.getElementById("lenguage-icon");
dataTitle = document.getElementById("data-title");


document.addEventListener("DOMContentLoaded", () => {
    if (lenguageFlag == 1) {
        // content.style.display = "block";
        homeItem.textContent = "Home";
        aboutUs.textContent = "About us";
        pageItem.textContent = "Dashboard";
        dashboardItem.textContent = "Dashboard";
        dataTitle.textContent = "DATA";
        h3Important.textContent = "THE IMPORTANCE OF DATA";
        // aboutBoris.textContent = "About BORIS";
        // youKnow.textContent = "Did you know...";
        // PAboutboris.textContent = "BORIS, a Colombian company, experts committed to data analysis and smart solutions for socio-environmental management. Our mission is to develop a record base that enhances human impact on the environment and society. We collaborate with various sectors to promote sustainability and responsible development. We are guided by transparency, ethics, and the desire to build a better future for all.";
        pTitle.textContent = `Ground Decision`;
        // ourTeam.textContent = "Our Team";
        // teamKnowBtn.textContent = "Meet the team";
        // questions.textContent = "WRITE US YOUR QUESTIONS"; 
        // formName.textContent = "Your name";
        // formEmail.textContent = "Your email";
        // inputName.placeholder = "Name";
        // inputEmail.placeholder = "Email";
        // textForm.placeholder = "Write your questions"
        // btnSendForm.textContent = "Send"
        // rol.forEach(dev => {
        //     dev.textContent = "Developer";
        // });
        dataP.textContent = `The data provide a solid foundation for making informed decisions in environmental management. They allow for identifying problems, evaluating trends, and designing effective strategies to address environmental challenges.`;
        // knowMore.textContent = "Know More";
        dataBtn.textContent = "More Information";
    }
})

data1.addEventListener("click", () => {
    data3.style.color = "var(--main-text-color)"
    data1.style.color = "white"
    data2.style.color = "var(--main-text-color)"
    if (lenguageFlag != 0) {
        pTitle.textContent = `Ground Decision`
        dataP.textContent = `The data provide a solid foundation for making informed decisions in environmental management. They allow for identifying problems, evaluating trends, and designing effective strategies to address environmental challenges.`
    } else {
        pTitle.textContent = `Fundamentan Decisiones:`
        dataP.textContent = `Los datos proporcionan una base sólida para tomar decisiones informadas en la
        gestión ambiental.
        Permiten identificar problemas,
        evaluar tendencias y diseñar estrategias efectivas para abordar desafíos ambientales.`
    }
})

data2.addEventListener("click", () => {
    data3.style.color = "var(--main-text-color)"
    data1.style.color = "var(--main-text-color)"
    data2.style.color = "White"
    if (lenguageFlag != 0) {
        pTitle.textContent = `Improved Precision`
        dataP.textContent = `By having accurate and up-to-date data, the precision of the analyses and models used by BORIS is enhanced. This translates into more effective solutions and the ability to forecast and mitigate environmental impacts`
    } else {
        pTitle.textContent = "Mejoran la Precisión:"
        dataP.textContent = `Al contar con datos precisos y actualizados, se mejora la precisión de los
        análisis y modelos utilizados por BORIS. Esto se
        traduce en soluciones más efectivas y en la capacidad de prever y mitigar impactos ambientales.`
    }
})

data3.addEventListener("click", () => {
    data1.style.color = "var(--main-text-color)"
    data2.style.color = "var(--main-text-color)"
    data3.style.color = "White"
    if (lenguageFlag != 0) {
        pTitle.textContent = `Enable Collaboration:`
        dataP.textContent = `Data shared through official platforms fosters collaboration among public entities, private organizations, and civil society. This enables working together in the pursuit of comprehensive and sustainable environmental solutions.`
    } else {
        pTitle.textContent = `Facilitan la Colaboración:`
        dataP.textContent = `Los datos compartidos a través de plataformas oficiales fomentan la colaboración
        entre entidades públicas, privadas y la sociedad civil.
        Esto permite trabajar de manera conjunta en la búsqueda de soluciones ambientales integrales y
        sostenibles.`
    }
});