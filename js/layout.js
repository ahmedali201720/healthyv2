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