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