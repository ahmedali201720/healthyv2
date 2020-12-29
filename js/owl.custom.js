$(".section-carousel").owlCarousel({
    margin: 30,
    loop: false,
    autoplay: false,
    autoplayTimeout: 5000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        },
        1200: {
            items: 5.5
        }
    }
});