const headerShoppingCart = $(".shopping-cart-details-container");

// Show and hide mid header menu option
$(".mid-header-user-container .profile-container").mouseenter(
    function () {
        const menu = $(".profile-container-menu", this);
        menu.fadeIn(400);
    }
);

$(".mid-header-user-container .profile-container").mouseleave(
    function () {
        const menu = $(".profile-container-menu", this);
        menu.fadeOut(400);
    }
);

// Sidebar styles script

$(".logo-and-sidebar-container .sidebar-button").click(function () {
    var windowWidth = $(window).width();
    console.log(windowWidth);
    if (windowWidth >= 992) {
        $("#sidebar").css("width", "27vw");
    }
    else if (windowWidth >= 768 && windowWidth < 992) {
        $("#sidebar").css("width", "50vw");
    }
    else if (windowWidth <= 600) {
        $("#sidebar").css("width", "100vw");
    }
    setTimeout(() => {
        $(".sidebar-container").fadeIn(100);
    }, 350);
});

$(".sidebar-collapse-button").click(function () {
    $(".sidebar-container").fadeOut(100);
    $("#sidebar").css("width", "0");
});

// sub menu scripts

$(".sub-menu-toggler").mouseenter(function () {
    $(".main-sub-menu", this).fadeIn(400);
});

$(".sub-menu-toggler").mouseleave(function () {
    $(".main-sub-menu", this).fadeOut(350);
});

// Scripts for sidebar link toggler sub menu

$(".sidebar-link-toggler").click(function () {
    var nextElement = $(this).next();
    if (nextElement.hasClass("sidebar-sub-link-container")) {
        if (nextElement.css("display") == "none") {
            nextElement.show(300);
            setTimeout(() => {
                $(".sidebar-sub-link", nextElement).css("visibility", "visible");
            }, 300);
        }
        else {
            setTimeout(() => {
                $(".sidebar-sub-link", nextElement).css("visibility", "hidden");
            }, 100);
            setTimeout(() => {
                nextElement.hide(300);
            }, 300);
        }
    }
});

// Show and hide the shopping cart details container

$(".header-shopping-cart-toggler").on({

    mouseenter: function () {
        headerShoppingCart.show();
    },
    mouseleave: function () {
        headerShoppingCart.hide();
    }
});

// ***********************************************************************
// header behaviour on scroll
// ***********************************************************************

var lastScrollTop = 0;

$(window).scroll(function (event) {

    var st = $(this).scrollTop();
    var windowWidth = $(window).width();

    if (st > lastScrollTop) {

        // downscroll code

    }

    else {

        // upscroll code

        console.log("up");

    }

    lastScrollTop = st;

});