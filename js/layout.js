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
    $("#sidebar").css("width", "18vw");
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