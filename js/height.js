//const projects = document.querySelectorAll('.project-info');
// make the project info containers equal height
function setEqualHeight() {
    const projects = document.querySelectorAll('.project-info');
    let maxHeight = 0;

    // remove previous heights from resize
    Array.from(projects).forEach(project => {
        project.style.height = "";
    })

    Array.from(projects).forEach(project => {
        const projectHeight = project.offsetHeight;
        if (projectHeight > maxHeight) {
            maxHeight = projectHeight;
        }
        project.style.height = maxHeight + 'px';
    });
}

setEqualHeight();

// adjust height based on window resize and orientation
window.addEventListener("resize", setEqualHeight);
window.addEventListener('orientationchange', setEqualHeight);


