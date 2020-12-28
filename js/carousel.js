$(document).ready(function () {

    var cardsPerRow;

    // Get the size of screen
    var screenWidth = $(window).width();

    // Get number of cards / row

    if (screenWidth >= 992) {
        cardsPerRow = 4;
    }
    else if (screenWidth >= 768 && screenWidth < 992) {
        cardsPerRow = 3;
    }
    else if (screenWidth >= 600 && screenWidth < 768) {
        cardsPerRow = 2;
    }
    else if (screenWidth < 600) {
        cardsPerRow = 12;
    }

    // Get the number of products
    var productsNumber = 13;

    // Get the higher nearest number of items 
    var carouselItemsNumber = Math.ceil(productsNumber / cardsPerRow);




    // Test logs
    console.log(screenWidth);
    console.log(carouselItemsNumber);
    console.log("Carouel document is ready");


});