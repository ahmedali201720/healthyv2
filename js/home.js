// *******************************************************************************
// header styles
// *******************************************************************************



// *******************************************************************************

// Show and hide div when enter and leave
$(".caret-link-parent").on({
    mouseenter: function () {
        $(".options-div-container").css("display", "block");
    },
    mouseleave: function () {
        $(".options-div-container").css("display", "none");
    }
})
// ********************************************************************

// Show and hide shopping cart  and small shopping cart details when enter and leave
$(".shopping-cart-container").on({
    mouseenter: function (event) {
        event.stopPropagation();
        $(".shopping-cart-details-container").fadeIn(200);
    },
    mouseleave: function () {
        $(".shopping-cart-details-container").fadeOut(200);
    }
})
$(".small-shopping-cart-container").on({
    click: function (event) {
        event.stopPropagation();
        $(".small-shopping-cart-details-container").toggle();
    }
})
$("div:not(.small-shopping-cart-container)").on({
    click: function (event) {
        $(".small-shopping-cart-details-container").hide();
    }
});
// ********************************************************************

// ********************************************************************
// Show and hide user options when enter and leave
// ********************************************************************

$(".user-link").on({
    click: function (event) {
        event.stopPropagation();
        $(".user-options-container").toggle();
    }
});

$("div:not(.user-link)").on({
    click: function (event) {
        $(".user-options-container").hide(300);
    }
});

// ********************************************************************

// ********************************************************************
// Show and hde user options container for small header
// ********************************************************************

$(".blank-user").on({
    click: function (event) {
        event.stopPropagation();
        $(".small-user-options-container").toggle();
    }
});

$("div:not(.blank-user)").on({
    click: function (event) {
        $(".small-user-options-container").hide(300);
    }
});

//*********************************************************************
// Change absolute cart style on scroll up and scroll down
// ********************************************************************


$('body').scroll(function (event) {
    st = $(this).scrollTop();
    handleWindowScroll(st);
});

// ********************************************************************
// JQuery script to toggle between login and register modals
// ********************************************************************

$('.register-link').click(handleRegisterLinkClick)
$('.login-link').click(handleLoginLinkClick)

// *******************************************************************


// *******************************************************************
// Event on clicking card increment and decrement button
// *******************************************************************

// hide section card button and show card control buttons
$(".section-card-button").on({
    click: function () {
        // get the qantity element from the required card
        var targetCardQuantity = $(".product-quantity-in-card", $(this).next());
        // get the quantity element from the main navbar {cart}
        var targetMainShoppingCartContainerQuantity = $(".cart-items", ".navbar-cart-icon");
        // get the quantity element from the small screen navbar {cart}
        var smallTargetMainShoppingCartContainerQuantity = $(".cart-items", ".small-navbar-cart-icon");
        // get the quantity element from the absolute cart
        var targetAbsoluteShoppingCartContainerQuantity = $(".absolute-cart-items");
        // increment quantities in card , in main cart and absolute cart
        targetCardQuantity.text((parseInt(targetCardQuantity.text()) + 1).toString());
        targetMainShoppingCartContainerQuantity.text((parseInt(targetMainShoppingCartContainerQuantity.text()) + 1).toString());
        smallTargetMainShoppingCartContainerQuantity.text((parseInt(smallTargetMainShoppingCartContainerQuantity.text()) + 1).toString());
        targetAbsoluteShoppingCartContainerQuantity.text((parseInt(targetAbsoluteShoppingCartContainerQuantity.text()) + 1).toString());
        // hide section card button and set css properties fro control buttons
        $(this).hide();
        $(".section-card-control-wrapper", $(this).parent()).show().css({ 'display': 'flex', 'justify-content': 'start', 'width': '100%', 'opacity': '1' });
    }
});

$(".product-modal-button").click(function () {
    // code here
})

// increment number of product quantity in card 
$(".card-increment-btn").on({
    click: function () {
        // get the qantity element from the required card
        var targetCardQuantity = $(".product-quantity-in-card", this);
        // get the quantity element from the main navbar {cart} - large screen
        var targetMainShoppingCartContainerQuantity = $(".cart-items", ".navbar-cart-icon");
        // get the quantity element from the main navbar {cart} - small screen
        var smallTargetMainShoppingCartContainerQuantity = $(".cart-items", ".small-navbar-cart-icon");
        // get the quantity element from the absolute cart
        var targetAbsoluteShoppingCartContainerQuantity = $(".absolute-cart-items");
        // increment quantities in card , in main cart and absolute cart
        targetCardQuantity.text((parseInt(targetCardQuantity.text()) + 1).toString());
        targetMainShoppingCartContainerQuantity.text((parseInt(targetMainShoppingCartContainerQuantity.text()) + 1).toString());
        smallTargetMainShoppingCartContainerQuantity.text((parseInt(smallTargetMainShoppingCartContainerQuantity.text()) + 1).toString());
        targetAbsoluteShoppingCartContainerQuantity.text((parseInt(targetAbsoluteShoppingCartContainerQuantity.text()) + 1).toString());
    }
});

// Decrement number of product quantity in card 
$(".card-decrement-btn").on({
    click: function () {
        // Get the current quantity element from card
        var targetCardQuantity = $(".product-quantity-in-card", $(this).prev());
        // get the quantity element from the main navbar {cart} - large screen
        var targetMainShoppingCartContainerQuantity = $(".cart-items", ".navbar-cart-icon");
        // get the quantity element from the main navbar {cart} - small screen
        var smallTargetMainShoppingCartContainerQuantity = $(".cart-items", ".small-navbar-cart-icon");
        // get the quantity element from the absolute cart
        var targetAbsoluteShoppingCartContainerQuantity = $(".absolute-cart-items");
        // Decrement the number from element in card , main cart and absolute cart and store it in variable
        var currentQuntityInCard = (parseInt(targetCardQuantity.text()) - 1).toString();
        var currentQuntityInMainCart = (parseInt(smallTargetMainShoppingCartContainerQuantity.text()) - 1).toString();
        var currentQuntityInAbsoluteCart = (parseInt(targetAbsoluteShoppingCartContainerQuantity.text()) - 1).toString()
        // Get the section card button container to use it if you will show or hide
        var targetSectionButtonParent = $(".section-card-button", $(this).parent().parent());
        // update card quantity and main cart and absolute cart quantities
        targetCardQuantity.text(currentQuntityInCard);
        targetMainShoppingCartContainerQuantity.text(currentQuntityInMainCart);
        smallTargetMainShoppingCartContainerQuantity.text(currentQuntityInMainCart);
        targetAbsoluteShoppingCartContainerQuantity.text(currentQuntityInAbsoluteCart);
        // if quantity is zero , then hide control buttons and show card section button
        if (currentQuntityInCard == 0) {
            // hide the control buttons and show target section button
            $(this).parent().hide();
            targetSectionButtonParent.show();
        }
        else {
            targetCardQuantity.text(currentQuntityInCard);
        }
    }
});

// *******************************************************************

// *******************************************************************
// Event on clicking card increment and decrement for main cart rows
// *******************************************************************

// increment number of quantity in the row in cart (large screen)
$(".main-cart-product-increment").on({
    click: function () {
        // Get the quantity element of product row
        var targetProductQuantity = $(".main-cart-product-quantity", $(this).parent());
        // get the quantity element from the main navbar {cart} - large screen
        var targetMainShoppingCartContainerQuantity = $(".cart-items", ".navbar-cart-icon");
        // get the quantity element from the main navbar {cart} - small screen
        var smallTargetMainShoppingCartContainerQuantity = $(".cart-items", ".small-navbar-cart-icon");
        // get the quantity element from the absolute cart
        var targetAbsoluteShoppingCartContainerQuantity = $(".absolute-cart-items");
        // Update quantity of product row , main cart products count and absolute cart 
        targetProductQuantity.text((parseInt(targetProductQuantity.text()) + 1).toString());
        targetMainShoppingCartContainerQuantity.text((parseInt(targetMainShoppingCartContainerQuantity.text()) + 1).toString());
        smallTargetMainShoppingCartContainerQuantity.text((parseInt(smallTargetMainShoppingCartContainerQuantity.text()) + 1).toString());
        targetAbsoluteShoppingCartContainerQuantity.text((parseInt(targetAbsoluteShoppingCartContainerQuantity.text()) + 1).toString());
    }
});

// increment number of quantity in the row in cart (small screen)
$(".small-main-cart-product-increment").on({
    click: function () {
        // Get the quantity element of product row
        var targetProductQuantity = $(".small-main-cart-product-quantity", $(this).parent());
        // get the quantity element from the main navbar {cart} - small screen
        var smallTargetMainShoppingCartContainerQuantity = $(".cart-items", ".small-navbar-cart-icon");
        // get the quantity element from the main navbar {cart} - large screen
        var targetMainShoppingCartContainerQuantity = $(".cart-items", ".navbar-cart-icon");
        // get the quantity element from the absolute cart
        var targetAbsoluteShoppingCartContainerQuantity = $(".absolute-cart-items");
        // Update quantity of product row , main cart products count and absolute cart 
        targetProductQuantity.text((parseInt(targetProductQuantity.text()) + 1).toString());
        smallTargetMainShoppingCartContainerQuantity.text((parseInt(smallTargetMainShoppingCartContainerQuantity.text()) + 1).toString());
        targetMainShoppingCartContainerQuantity.text((parseInt(targetMainShoppingCartContainerQuantity.text()) + 1).toString());
        targetAbsoluteShoppingCartContainerQuantity.text((parseInt(targetAbsoluteShoppingCartContainerQuantity.text()) + 1).toString());
    }
});

// decrement number of quantity in the row in cart (remove row in case of 0) - large screen
$(".main-cart-product-decrement").on({
    click: function () {
        // Get the quantity element of product row
        var targetProductQuantityElement = $(".main-cart-product-quantity", $(this).parent());
        // get the quantity element from the main navbar {cart} - large screen
        var targetMainShoppingCartContainerQuantity = $(".cart-items", ".navbar-cart-icon");
        // get the quantity element from the main navbar {cart} - small screen
        var smallTargetMainShoppingCartContainerQuantity = $(".cart-items", ".small-navbar-cart-icon");
        // get the quantity element from the absolute cart
        var targetAbsoluteShoppingCartContainerQuantity = $(".absolute-cart-items");
        // Get the current Quantity number of product from the row
        var currentQuantityNumber = (parseInt(targetProductQuantityElement.text()) - 1);
        var currentQuntityInMainCart = (parseInt(targetMainShoppingCartContainerQuantity.text()) - 1);
        var currentQuntityInAbsoluteCart = (parseInt(targetAbsoluteShoppingCartContainerQuantity.text()) - 1);
        // Update the quantity number in the row (actually not important as your remove the whole row -- binding vision) 
        targetProductQuantityElement.text(currentQuantityNumber.toString());
        // Update the quantity number in the main cart - large screen
        targetMainShoppingCartContainerQuantity.text(currentQuntityInMainCart.toString());
        // Update the quantity number in the main cart - small screen
        smallTargetMainShoppingCartContainerQuantity.text(currentQuntityInMainCart.toString());
        // Update the quantity number in the absolute cart  
        targetAbsoluteShoppingCartContainerQuantity.text(currentQuntityInAbsoluteCart.toString());
        // Check the current product quantity number in the row
        if (currentQuantityNumber == 0) {
            // Get the row itself
            var targetCartProductRow = $(this).parent().parent();

            // hide the row and then remove it
            targetCartProductRow.hide(1000);
            deleteBubbleAudioElement.play();
            // needed to give time for animation to take effect before remove
            setInterval(function () {
                targetCartProductRow.remove();
            }, 1000)
        }
    }
});

// decrement number of quantity in the row in cart (remove row in case of 0) - small screen
$(".small-main-cart-product-decrement").on({
    click: function () {
        // Get the quantity element of product row
        var targetProductQuantityElement = $(".small-main-cart-product-quantity", $(this).parent());
        // get the quantity element from the main navbar {cart} - small screen
        var smallTargetMainShoppingCartContainerQuantity = $(".cart-items", ".small-navbar-cart-icon");
        // get the quantity element from the main navbar {cart} - large screen
        var targetMainShoppingCartContainerQuantity = $(".cart-items", ".navbar-cart-icon");
        // get the quantity element from the absolute cart
        var targetAbsoluteShoppingCartContainerQuantity = $(".absolute-cart-items");
        // Get the current Quantity number of product from the row
        var currentQuantityNumber = (parseInt(targetProductQuantityElement.text()) - 1);
        var currentQuntityInMainCart = (parseInt(smallTargetMainShoppingCartContainerQuantity.text()) - 1);
        var currentQuntityInAbsoluteCart = (parseInt(targetAbsoluteShoppingCartContainerQuantity.text()) - 1);
        // Update the quantity number in the row (actually not important as your remove the whole row -- binding vision) 
        targetProductQuantityElement.text(currentQuantityNumber.toString());
        // Update the quantity number in the main cart - small screen
        smallTargetMainShoppingCartContainerQuantity.text(currentQuntityInMainCart.toString());
        // Update the quantity number in the main cart - large screen 
        targetMainShoppingCartContainerQuantity.text(currentQuntityInMainCart.toString());
        // Update the quantity number in the absolute cart  
        targetAbsoluteShoppingCartContainerQuantity.text(currentQuntityInAbsoluteCart.toString());
        // Check the current product quantity number in the row
        if (currentQuantityNumber == 0) {
            // Get the row itself
            var targetCartProductRow = $(this).parent().parent();

            // hide the row and then remove it
            targetCartProductRow.hide(1000);
            deleteBubbleAudioElement.play();
            // needed to give time for animation to take effect before remove
            setInterval(function () {
                targetCartProductRow.remove();
            }, 1000)
        }
    }
});

// *******************************************************************


// *******************************************************************
// Single product page dynamic rating stars
// *******************************************************************

// variable to store the value of general product rate
var generalProductRateNumber = 2;
// variable to store the value of personal rate of product
var personalRateNumber = 1;

$(document).ready(function () {

    // get star icon elements for static product rating
    var generalProductRateStarIcons = $(".static-product-rating .fa-star-clicked");
    // get star icon elements for personal product rating
    var starsToBeMarked = $(".dynamic-product-rating .fa-star-clicked");
    // counter to work only with required icons
    var counter = 1;

    // loop static product rate icons and style them
    $.each(generalProductRateStarIcons, function () {
        if (generalProductRateNumber > 0) {
            if (counter > generalProductRateNumber) {
                counter = 1;
                return false;
            }
            $(this).css({ 'display': 'inline-block' });
            $(this).next().css({ 'display': 'none' });
            counter++;

        }
    });

    // loop dynamic personal product rate icons and style them
    $.each(starsToBeMarked, function () {
        if (personalRateNumber > 0) {
            if (counter > personalRateNumber) {
                counter = 1;
                return false;
            }
            $(this).css({ 'display': 'inline-block' });
            $(this).next().css({ 'display': 'none' });
            counter++;
        }
    });
});

// event when entering unclicked dynamic personal product rate
$(".dynamic-product-rating .fa-star-unclicked").mouseenter(
    function () {
        $(this).css({ 'display': 'none' });
        $(this).prev().css({ 'display': 'inline-block' });
        var getAllPreviousUnclickedStarIcons = $(this).prevAll(".fa-star-unclicked");
        $.each(getAllPreviousUnclickedStarIcons, function () {
            $(this).css({ 'display': 'none' });
            $(this).prev().css({ 'display': 'inline-block' });
        });
        personalRateNumber = getAllPreviousUnclickedStarIcons.length + 1;
    }
);

// event when clicking unclicked dynamic personal product rate
$(".dynamic-product-rating .fa-star-unclicked").click(
    function () {
        $(this).css({ 'display': 'none' });
        $(this).prev().css({ 'display': 'inline-block' });
        var getAllPreviousUnclickedStarIcons = $(this).prevAll(".fa-star-unclicked");
        var getAllNextUnclickedStarIcons = $(this).nextAll(".fa-star-unclicked");
        $.each(getAllPreviousUnclickedStarIcons, function () {
            $(this).css({ 'display': 'none' });
            $(this).prev().css({ 'display': 'inline-block' });
        });
        $.each(getAllNextUnclickedStarIcons, function () {
            $(this).css({ 'display': 'inline-block' });
            $(this).prev().css({ 'display': 'none' });
        });
        personalRateNumber = getAllPreviousUnclickedStarIcons.length + 1;
    }
);

// event when clicking clicked dynamic personal product rate
$(".dynamic-product-rating .fa-star-clicked").click(
    function () {
        var getAllPreviousclickedStarIcons = $(this).prevAll(".fa-star-clicked");
        var getAllNextclickedStarIcons = $(this).nextAll(".fa-star-clicked");
        $.each(getAllNextclickedStarIcons, function () {
            $(this).css({ 'display': 'none' });
            $(this).next().css({ 'display': 'inline-block' });
        });
        personalRateNumber = getAllPreviousclickedStarIcons.length + 1;
    }
);

// *************************************************************************************

// *************************************************************************************
// FAQ Script
// *************************************************************************************

$(".question-name").click(function () {
    questionAnswerElement = $(this).siblings(".question-answer");
    questionAnswerElementText = questionAnswerElement.children();
    if (questionAnswerElement.css("display") === "none") {
        questionAnswerElement.toggle(500).css("display", "flex");
        setTimeout(function () {
            questionAnswerElementText.fadeTo(500, 1);
        }, 600);
    }
    else {
        questionAnswerElementText.fadeTo(400, 0);
        setTimeout(function () {
            questionAnswerElement.toggle(500);
        }, 500);
    }
});

$(".contact-name").click(function () {
    contactAnswerElement = $(this).siblings(".contact-answer");
    contactAnswerElementText = contactAnswerElement.children();

    if (contactAnswerElement.css("display") === "none") {
        contactAnswerElement.toggle(300).css("display", "flex");
        setTimeout(function () {
            contactAnswerElementText.fadeTo(200, 1);
        }, 300);
    }
    else {
        contactAnswerElementText.fadeTo(200, 0);
        setTimeout(function () {
            contactAnswerElement.toggle(300);
        }, 300);
    }

});

$(".copy-icon").click(function () {
    var textToCopy = $(".contact-answer-text", $(this).parent()).text();
    copyToClipboard(textToCopy);
    showTooltip($(this));
})

$(".copy-link").click(function () {
    var linkToCopy = $(".contact-answer-link", $(this).parent()).attr("href");
    copyToClipboard(linkToCopy);
    showTooltip($(this));
})

// ************************************************************************************