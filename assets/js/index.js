let container = document.getElementById("container");
let skills_header = document.getElementById("skills");
let projects_header = document.getElementById("projects");

if (window.innerWidth < 800) {
    container.classList.remove("my-5");
    container.classList.remove("py-5");
    container.classList.add("py-2");

    skills_header.classList.remove("text-start");
    skills_header.classList.add("text-end");

    projects_header.classList.remove("text-end");
    projects_header.classList.add("text-start");
}

let languages_list = document.getElementById("languages-list");
let frameworks_list = document.getElementById("frameworks-list");
let languages = ["HTML", "CSS", "JavaScript", "Python", "PHP", "Go"];
let frameworks = ["Node.js", "Express", "Flask", "Bootstrap"];

// loop through languages and create an li item for each and append them to languages list, do this as well for frameworks
languages.forEach(language => {
    let li = document.createElement("li");
    li.innerHTML = language;
    languages_list.appendChild(li);
});
frameworks.forEach(framework => {
    let li = document.createElement("li");
    li.innerHTML = framework;
    frameworks_list.appendChild(li);
});