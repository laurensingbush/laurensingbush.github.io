const projectDetails = [
    {
        name: "Find-A-Hobby", 
        type: "full-stack", 
        link: "https://find-a-hobby.vercel.app/", 
        github: "https://github.com/laurensingbush/find-a-hobby", 
        image: "./assets/images/find-a-hobby.jpg",
        description: "A web app for easily finding new hobbies to enjoy in your leisure time. Sign in via GitHub or Google to keep track of your current hobbies and new hobbies you'd like to try. ",
        technologies: [
            "Next.js",
            "SCSS",
            "TypeScript",
            "Prisma",
            "PostgreSQL",
            "MediaWiki API"
        ]
    },
    {
        name: "OMDb Search", 
        type: "full-stack", 
        link: "https://imdb-favorites.herokuapp.com/", 
        github: "https://github.com/laurensingbush/react-omdb-app", 
        image: "./assets/images/omdb-search.jpg",
        description: "A web app for searching movies and shows. Create and save a list of your favorites to view whenever you're logged in.",
        technologies: [
            "React",
            "SCSS",
            "Node.js",
            "Express",
            "MongoDB",
            "OMDb API"
        ]
    },
    {
        name: "Trip Planner", 
        type: "other", 
        link: "https://bucketlist-trip-planner.netlify.app/", 
        github: "https://github.com/laurensingbush/Trip-planner", 
        image: "./assets/images/trip-planner.jpg",
        description: "An app for visualizing my bucket list trips with each destination including things to do.",
        technologies: [
            "React",
            "CSS",
            "React-Leaflet.js",
            "Leaflet.js",
        ]
    },
    {
        name: "IP Address Tracker", 
        type: "other", 
        link: "https://track-ip-address.netlify.app/", 
        github: "https://github.com/laurensingbush/ip-address-tracker", 
        image: "./assets/images/ip-address-tracker.jpg",
        description: "A tracker that provides information on the location, timezone, and ISP of an IP address.",
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Leaflet.js",
            "Geolocation API"
        ]
    },
    {
        name: "Multiple Choice Quiz", 
        type: "other", 
        link: "https://multiple-choice-quiz.netlify.app/", 
        github: "https://github.com/laurensingbush/Multiple-Choice-Quiz-JavaScript", 
        image: "./assets/images/quiz.jpg",
        description: "A quiz that fetches computer-based questions from a Trivia API.",
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Trivia API"
        ]
    },
];

// Map over project data and return the html for each item
const projectsHTML = (type, data) => {
    const html = data.filter((project => project.type === type)).map((project) => {
       return `<li class="project-item">
                    <div class="project-details">
                        <div class="project-heading">
                            ${type === 'full-stack' ? `<p>Full-Stack Project</p>` : ''}
                            <h3>${project.name}</h3>
                        </div>
                        <div class="project-img">
                            <a href=${project.link} target="_blank" aria-describedby="new-tab">
                                <img src=${project.image} alt="${project.name} Screenshot">
                            </a>
                        </div>
                    </div>
                    <div class="project-description">
                        <p>${project.description}</p>
                        <ul class="project-technologies-list">
                            ${project.technologies.map((technology) => `<li>${technology}</li>`).join('')}
                        </ul>
                        <ul class="project-links-list">
                            <li>
                                <a href=${project.github} target="_blank" aria-describedby="new-tab">
                                    <i class="fab fa-github" title="GitHub"></i>
                                </a>
                            </li>
                            <li>
                                <a href=${project.link} target="_blank" aria-describedby="new-tab">
                                    <i class="fas fa-external-link-alt" title="Live App"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>`;
    });
    return html.join('');
};

document.getElementById('main-projects-list').innerHTML = projectsHTML('full-stack', projectDetails);
document.getElementById('other-projects-list').innerHTML = projectsHTML('other', projectDetails);
