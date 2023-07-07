document.addEventListener('click', function (event) {
    var navbar = document.querySelector('.navbar-collapse');

    // Check if the clicked element is not inside the navbar and the navbar is expanded
    if (!navbar.contains(event.target) && navbar.classList.contains('show')) {
        var navbarToggler = document.querySelector('.navbar-toggler');

        // Trigger the click event on the navbar toggler to collapse the navbar
        navbarToggler.click();
    }
});

document.getElementById('to-top').addEventListener('click', function () {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// const hero = document.querySelector('#hero');

// const options = {
//     rootMargin: '0px',
//     threshold: 0.5,
// };

// const intersectionCallback = (entries, observer) => {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             hero.classList.add('animate');
//         } else {
//             hero.classList.remove('animate');
//         }
//     });
// };

// const observer = new IntersectionObserver(intersectionCallback, options);
// observer.observe(hero);
