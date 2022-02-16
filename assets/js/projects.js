let projects_row = document.getElementById('projects-row');
let projects = [
    {
        "name": "Menu Note", 
        "description": "An open source note taking app for Mac OS that uses the menu bar.", 
        "link": "https://menunote.app"
    },
    {
        "name": "Benny's API",
        "description": "A multi-purpose API filled with fun endpoints and image generation.",
        "link": "https://api.benny.fun"
    },
    {
        "name": "IP Info",
        "description": "A terminal tool for getting information about an IP address.",
        "link": "https://github.com/bentettmar/ipinfo"
    },
    {
        "name": "Gato Bot",
        "description": "A simple multi-purpose Discord bot with fun and useful features.",
        "link": "https://gato.benny.fun/"
    }
]

projects.forEach(project => {
    let name = project["name"];
    let description = project["description"];
    let link = project["link"];

    let card = `
        <div class="col-lg-6 col-sm-12 mb-3">
            <div class="card h-100">
                <div class="card-body">
                    <h5 class="lowercase">${name}</h5>
                    <p class="lowercase">${description}</p>
                </div>
                <div class="card-footer py-3">
                    <a href="${link}" target="_blank" class="project-btn lowercase">more info</a>
                </div>
            </div>
        </div>
    `;

    projects_row.innerHTML += card;
});