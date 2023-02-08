///////// funtion shows resume menu //////////

const resumeMenu = document.getElementsByClassName('resume-menu-collapse')[0];
const resumeNavLinkWrapper = document.getElementsByClassName('resume-nav-link-wrapper')[0];


resumeMenu.addEventListener('click', () => {
    if (resumeNavLinkWrapper.style.display === 'block') {
        resumeNavLinkWrapper.style.display = 'none';
    } else {
        resumeNavLinkWrapper.style.display = 'block';
    }
})
