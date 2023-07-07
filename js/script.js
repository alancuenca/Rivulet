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


function observeIntersection(elementId) {
    const element = document.getElementById(elementId);

    // Intersection Observer options
    const options = {
        rootMargin: '0px',
        threshold: 0.25,
    };

    // Intersection Observer callback
    const intersectionCallback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                element.style.opacity = '1';
                element.style.transition = 'opacity 0.5s';
            } else {
                element.style.opacity = '0';
                element.style.transition = 'opacity 0.5s';
            }
        });
    };

    // Create Intersection Observer
    const observer = new IntersectionObserver(intersectionCallback, options);
    observer.observe(element);
}

observeIntersection('rivuletlogo');
observeIntersection('imageContainer');
observeIntersection('carousel');
observeIntersection('silverdale')
