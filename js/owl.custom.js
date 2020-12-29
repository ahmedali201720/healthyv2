$(document).ready(function () {

    $(".section-carousel").owlCarousel({
        margin: 30,
        loop: true,
        autoplay: false,
        autoplayTimeout: 7000,
        responsive: {
            0: {
                items: 1.25
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
            }
        }
    });

    var owlItems = $(".section-carousel .owl-item").length;
    console.log("we are " + owlItems + " owl items.")

    $(".section-carousel").trigger("to.owl.carousel", [1, 1]);

});