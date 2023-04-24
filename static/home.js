// ======================== Toggle Icon Navbar ========================
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// ======================== Scroll Section Active Link ========================
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })
    // ======================== Sticky Navbar ========================
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // ======================== Remove Toggle Icon And Navbar When Click Navbar Link (scroll) ========================
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// ======================== Scroll Revel ========================
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .price-box, .contact form, .about-img', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'left' });

// ======================== Multiple Text / typed js========================
const typed = new Typed('.multiple-text',{
    strings: ['Averaging Down', 'Average From Money', 'Average From Coin'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true

})
