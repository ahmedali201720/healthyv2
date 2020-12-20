
// When document is ready , then make necessary operations
$(document).ready(function () {

    if (cartRowElements.length > 0) {
        $.each(cartRowElements, function () {
            var cartRowTotalPriceNumber = parseFloat($(".cart-row-total-price", this).text());
            cartTotalPriceNumber += cartRowTotalPriceNumber;
        });
        $.each(productQuantityElements, function () {
            var cartRowQuantityNumber = parseInt($(this).text());
            cartQuantitySum = cartQuantitySum + cartRowQuantityNumber;
            console.log(cartQuantitySum);
        });
        totalPriceElement.text(cartTotalPriceNumber.toFixed(2));
        footerTotalPriceElement.text(cartTotalPriceNumber.toString());
        noDataInCartContainer.css('display', 'none');
        largeHeaderItemsNumberElement.text(cartQuantitySum.toString());
        smallHeaderItemsNumberElement.text(cartQuantitySum.toString());
        absoluteCartItemsNumberElement.text(cartQuantitySum.toString());
        footerItemsNumberElement.text(cartQuantitySum.toString());
    }
    else {
        mainContainer.css('display', 'none');
        noDataInCartContainer.css('display', 'block');
    }

});

// **********************************************************************************************************

$(".cart-increment-btn").click(function () {
    // update the number of quantity
    var parameters = getCartIncrementButtonRequiredParameters($(this));
    // increment product row quantity
    var newRowQuantity = (parameters.quantity) + 1;
    // Increment quantity sum of all products
    cartQuantitySum++;
    // Update total price for all products
    cartTotalPriceNumber = cartTotalPriceNumber + parameters.price;
    // Get curent row total price and update it with new quantity
    var newRowTotalPrice = getProductRowTotalPrice(newRowQuantity, parameters.price);
    // update the row quantity and total price
    handleProductRowQuantityAndTotalPrice(parameters.qElement, parameters.tPriceElement, newRowQuantity, newRowTotalPrice);
    // Update Header
    handleHeaderPriceAndQuantity(cartQuantitySum, cartTotalPriceNumber);
    // Update Absolute Cart
    handleAbsoluteCartElement(cartQuantitySum);
    // Show total price element
    totalPriceElement.fadeIn(100);
    // Update the side cart total price 
    if (!isCouponApplied) {
        let newTotalPrice = parseFloat(totalPriceElement.text()) + parameters.price;
        handleTotalPriceElement(newTotalPrice);
    }
    else {
        let newTotalPrice = parseFloat(totalPriceElement.text()) + (parameters.price - (parameters.price * discount_percentage));
        console.log(newTotalPrice);
        handleTotalPriceElement(newTotalPrice);
        let newOldTotalPrice = (parseFloat(oldTotalPriceElement.text())) + parameters.price;
        handleOldTotalPriceElement(newOldTotalPrice);
    }
});

$(".cart-decrement-btn").click(function () {
    var parameters = getCartDecrementButtonRequiredParameters($(this));
    // Get new row quantity number
    var newRowQuantity = (parameters.quantity) - 1;
    // Update total quantity of all products
    cartQuantitySum--;
    // Get new total price 
    cartTotalPriceNumber = cartTotalPriceNumber - parameters.price;
    // update row total price and quantity elements
    handleProductRowQuantityAndTotalPrice(parameters.qElement, parameters.tPriceElement, newRowQuantity, cartTotalPriceNumber);
    // handle header data
    handleHeaderPriceAndQuantity(cartQuantitySum, cartTotalPriceNumber);
    // handle Absolute cart
    handleAbsoluteCartElement(cartQuantitySum);
    // Update the side cart total price 
    if (!isCouponApplied) {
        let newTotalPrice = parseFloat(totalPriceElement.text()) - parameters.price;
        handleTotalPriceElement(newTotalPrice);
    }
    else {
        let newTotalPrice = (parseFloat(totalPriceElement.text())) - (parameters.price - (parameters.price * discount_percentage));
        handleTotalPriceElement(newTotalPrice);
        let newOldTotalPrice = parseFloat(oldTotalPriceElement.text()) - parameters.price;
        handleOldTotalPriceElement(newOldTotalPrice);
    }
    // Check the number of row product quantity
    if (newRowQuantity == 0) {
        // Update Row Quantity for product
        parameters.qElement.text(parameters.quantity.toString());
        // Hide the row
        $(this).parent().parent().hide(500, function () {
            $(this).remove();
        });
    }
    else {
        // Update Row Quantity for product
        parameters.qElement.text(newRowQuantity.toString());
        // Get curent row total price and update it with new quantity
        parameters.totalPrice = newRowQuantity * parameters.price;
        parameters.tPriceElement.hide(200, function () {
            parameters.tPriceElement.text((parameters.totalPrice).toString() + ' EGP');
        });
        // Show total price element
        parameters.tPriceElement.fadeIn(100)
    }
});

// ***********************************************************************************************

$("#coupon-code").keyup(handleCouponInputKeyUp);

// ***********************************************************************************************

cartRowCloseWindowIcon.click(function () {
    var currentProductRow = $(this).parent();
    handleCartRowDelete(currentProductRow);
});

cartRowDeleteLink.click(function () {
    var currentProductRow = $(this).parent().parent();
    handleCartRowDelete(currentProductRow);
});

// ******************************************************************

$("#apply-coupon").click(handleCouponApply);

// *******************************************************************

closeCouponWindowIcon.click(handleCouponWindowClosing);

// *******************************************************************

cartCouponEnteringLink.click(handleCartCouponEntering);

cartCouponLoginLink.click(handleLoginLinkClick);