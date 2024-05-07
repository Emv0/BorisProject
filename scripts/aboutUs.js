homeItem = document.getElementById("home-item");
dashboardItem = document.getElementById("dashboard-item");
aboutUs = document.getElementById("about-us-item");
pageItem = document.getElementById("page-item");
description1 = document.getElementById("first-p");
description2 = document.getElementById("second-p");
description3 = document.getElementById("third-p");
ourTeam = document.getElementById("our-team");

document.addEventListener("DOMContentLoaded", () => {
lenguageFlag2 = localStorage.getItem("lenguageFlag");
if (lenguageFlag2 == 1) {
    ourTeam.textContent = "Our Team";
    homeItem.textContent = "Home";
    aboutUs.textContent = "About us";
    pageItem.textContent = "Home";
    dashboardItem.textContent = "Dashboard";
    description1.textContent = "Esteban Monsalve, junior software developer. I have 6 months of work experience as a developer, performing tasks such as supporting in requirement gathering, requirement analysis, assisting the QA area in creating test plans, test execution, results analysis, and incident reporting. Additionally, I have been studying at CESDE for a year and a half.";
    description2.textContent = "My name is Jhony Ochoa. This is my third semester studying software development. I am very motivated and eager to continue learning. I have no work experience in this field, but I am prepared to apply everything I know when required.";
    description3.textContent = "My name is Camilo Correa and I have been studying programming for a year and three months. Although I do not have previous work experience as a programmer, I am committed to applying my knowledge and continuing to develop in this fascinating field."
}
})