$(document).ready(function () {

    $(".section-carousel").owlCarousel({
        margin: 30,
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        autoplay: false,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                items: 1.2
            },

            600: {
                items: 2
            },

            768: {
                items: 2.5
            },
            992: {
                items: 3.5
            },
            1200: {
                items: 4
            },
            1300: {
                items: 5
            },
            1500: {
                items: 6
            }
        }
    });

    $(".brands-carousel").owlCarousel({
        margin: 30,
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        autoplay: false,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                items: 1.5
            },

            600: {
                items: 2.5
            },

            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 6
            },
            1400: {
                items: 7
            }
        }
    });

    $(".section-carousel").trigger("to.owl.carousel", [3, 1]);

});