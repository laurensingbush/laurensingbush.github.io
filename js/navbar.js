const mobileNav = () => {
    const navToggle = document.querySelector('.navbar-toggle');
    const navItems = document.querySelectorAll('.nav-item');
    const navLinks = document.querySelectorAll('.nav-link');

    const toggleNavItems = () => Array.from(navItems).forEach(item => item.classList.toggle('active'));
    
    // toggle nav items and icon on click 
    navToggle.addEventListener('click', (e) => {
        e.preventDefault();
        toggleNavItems();
        navToggle.classList.toggle('toggle');
    });

    const closeNav = () => {
        toggleNavItems();
        navToggle.classList.toggle('toggle');
    }   

    // close nav after link click
    Array.from(navLinks).forEach(link => link.addEventListener('click', closeNav));

}

mobileNav();



// hide header on scroll down, show header on scroll up
var navbar = document.querySelector('.header-container');
var navbarHeight = navbar.offsetHeight;
var lastScroll = 0;

window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    // if current position > last position & scrolled past navbar
    if (scrollPosition > lastScroll && scrollPosition > navbarHeight) {
        // scrolled down
        navbar.classList.remove('nav-down');
        navbar.classList.add('nav-up');
        navbar.style.opacity = 0;

    } else {
        //scrolled up
        navbar.classList.remove('nav-up');
        navbar.classList.add('nav-down');
        navbar.style.opacity = 0.9;
    }

    // set lastScroll to current position
    lastScroll = scrollPosition;

});