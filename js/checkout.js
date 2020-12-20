$(".home-item").click(function () {
    $(this).removeClass("tab-item-not-selected");
    $(".cadeau-item").removeClass("tab-item-selected");
    $(this).addClass("tab-item-selected");
    $(".cadeau-item").addClass("tab-item-not-selected");
    $(".cadeau-data-container").fadeOut(500);
})

$(".cadeau-item").click(function () {
    $(this).removeClass("tab-item-not-selected");
    $(".home-item").removeClass("tab-item-selected");
    $(this).addClass("tab-item-selected");
    $(".home-item").addClass("tab-item-not-selected");
    $(".cadeau-data-container").show(500);
})

$("#credit").click(function () {
    $(this).prop("checked", true);
    $("#onDelivery").prop("checked", false);
    $("#meeza").prop("checked", false);
    $("#credit-data-form").fadeIn(500);
});

$("#onDelivery").click(function () {
    $(this).prop("checked", true);
    $("#credit").prop("checked", false);
    $("#meeza").prop("checked", false);
    $("#credit-data-form").hide(500);
});

$("#meeza").click(function () {
    $(this).prop("checked", true);
    $("#onDelivery").prop("checked", false);
    $("#credit").prop("checked", false);
    $("#credit-data-form").hide(500);
});

$(".registered-address-item").click(function () {
    $(this).removeClass("tab-item-not-selected");
    $(this).addClass("tab-item-selected");
    $(".another-address-item").addClass("tab-item-not-selected");
    $(".another-address-item").removeClass("tab-item-selected");
    $("#charging-address-form").hide(400);
});

$(".another-address-item").click(function () {
    $(this).removeClass("tab-item-not-selected");
    $(this).addClass("tab-item-selected");
    $(".registered-address-item").addClass("tab-item-not-selected");
    $(".registered-address-item").removeClass("tab-item-selected");
    $("#charging-address-form").show(400);
});
