function handleHeaderPriceAndQuantity(quantity, price) {
    var largeHeaderItemsNumberElement = $("#cart-items-number");
    var smallHeaderItemsNumberElement = $("#small-cart-items-number");
    var footerItemsNumberElement = $(".footer-product-num");
    var footerTotalPriceElement = $(".footer-price");
    // **********************************************************************
    largeHeaderItemsNumberElement.text(quantity.toString());
    smallHeaderItemsNumberElement.text(quantity.toString());
    footerItemsNumberElement.text(quantity.toString());
    footerTotalPriceElement.text(quantity.toString());
    // **********************************************************************
    footerTotalPriceElement.text(price.toString());
}

function handleAbsoluteCartElement(quantity) {
    var absoluteCartItemsNumberElement = $("#absolute-cart-items-number");
    //************************************************************************ 
    absoluteCartItemsNumberElement.text(quantity.toString());
}

function handleProductRowQuantityIncrement(btn) {
    var currentRowProductQuantity = btn.next();
    var currentRowProductQuantityNumber = parseInt(currentRowProductQuantity.text());
    currentRowProductQuantityNumber++;
    currentRowProductQuantity.text(currentRowProductQuantityNumber.toString());
}

function handleProductRowQuantityAndTotalPrice(qElement, tPriceElement, quantity, price) {
    qElement.text(quantity.toString());
    tPriceElement.text(price.toFixed(2));
}

function getCartIncrementButtonRequiredParameters(btn) {
    var quantityElement = btn.next();
    var priceElement = $(".personal-cart-product-price", btn.parent().prev());
    var totalPriceElement = $(".cart-row-total-price", btn.parent().next());
    return {
        qElement: quantityElement,
        pElement: priceElement,
        tPriceElement: totalPriceElement,
        quantity: parseInt(quantityElement.text()),
        price: parseFloat(priceElement.text()),
        totalPrice: parseFloat(totalPriceElement.text())
    }
}

function getCartDecrementButtonRequiredParameters(btn) {
    var quantityElement = btn.prev();
    var priceElement = $(".personal-cart-product-price", btn.parent().prev());
    var totalPriceElement = $(".cart-row-total-price", btn.parent().next());
    return {
        qElement: quantityElement,
        pElement: priceElement,
        tPriceElement: totalPriceElement,
        quantity: parseInt(quantityElement.text()),
        price: parseFloat(priceElement.text()),
        totalPrice: parseFloat(totalPriceElement.text())
    }
}

function getProductRowTotalPrice(quantity, price) {
    return quantity * price;
}

function handleTotalPriceElement(price) {
    var totalPriceElement = $(".personal-cart-total-price p");
    totalPriceElement.text(price.toFixed(2));
}

function handleOldTotalPriceElement(price) {
    var oldTotalPriceElement = $(".personal-cart-total-price-old p");
    oldTotalPriceElement.text(price.toFixed(2));
}

// *******************************************************************************
// Function to run audios and handle exceptions handle exceptions
// *******************************************************************************

function runAudio(audioElement) {
    var promise = audioElement.play();
    if (promise !== undefined) {
        promise.then(_ => {
            console.log("audio played");
        }).catch(_ => {
            console.log("works !! interaction required.");
        })
    }
}

// *******************************************************************************

function handleWindowScroll(st) {
    var windowWidth = $(window).width();
    $(".user-options-container , .shopping-cart-details-container").hide(100);
    if (st > lastScrollTop) {
        // scroll down code
        console.log("scroll down occurs");
        $(".absolute-cart-text").hide();
        if (windowWidth < 600) {
            $(".absolute-cart").css({ 'width': '90px', 'height': '90px', 'border-radius': '50%', 'text-align': 'center' });
        }
        else if (windowWidth >= 600 && windowWidth < 768) {
            $(".absolute-cart").css({ 'width': '95px', 'height': '95px', 'border-radius': '50%', 'text-align': 'center' });
        }
        else if (windowWidth >= 768 && windowWidth < 992) {
            $(".absolute-cart").css({ 'width': '100px', 'height': '100px', 'border-radius': '50%', 'text-align': 'center' });
        }
        else if (windowWidth >= 992 && windowWidth < 1200) {
            $(".absolute-cart").css({ 'width': '110px', 'height': '110px', 'border-radius': '50%', 'text-align': 'center' });
        }
        else if (windowWidth >= 1200) {
            $(".absolute-cart").css({ 'width': '110px', 'height': '110px', 'border-radius': '50%', 'text-align': 'center' });
        }
    }
    else {
        // scroll up code
        console.log("scroll up occurs");
        $(".absolute-cart-text").show();
        if (windowWidth < 600) {
            $(".absolute-cart").css({ 'width': '46%', 'height': '65px', 'border-radius': '35px', 'text-align': 'center' });
        }
        else if (windowWidth >= 600 && windowWidth < 768) {
            $(".absolute-cart").css({ 'width': '25%', 'height': '85px', 'border-radius': '35px', 'text-align': 'center' });
        }
        else if (windowWidth >= 768 && windowWidth < 992) {
            $(".absolute-cart").css({ 'width': '20%', 'height': '85px', 'border-radius': '35px', 'text-align': 'center' });
        }
        else if (windowWidth >= 992 && windowWidth < 1200) {
            $(".absolute-cart").css({ 'width': '20%', 'height': '85px', 'border-radius': '35px', 'text-align': 'center' });
        }
        else if (windowWidth >= 1200) {
            $(".absolute-cart").css({ 'width': '15%', 'height': '85px', 'border-radius': '35px', 'text-align': 'center' });
        }
    }
    lastScrollTop = st;
}

// ********************************************************************************

function handleRegisterLinkClick() {
    $('#loginModal').modal('hide');
    $('#registerModal').modal('show');
}

function handleLoginLinkClick() {
    $('#registerModal').modal('hide');
    $('#loginModal').modal('show');
}

// *********************************************************************************

function handleCouponInputKeyUp() {
    $(".right-coupon , .wrong-coupon , .right-coupon , .error-coupon , .small-loading").fadeOut(100);
}

// *********************************************************************************

function handleCouponApply() {

    if (isCouponApplied)
        return false;

    var currentCouponCode = $("#coupon-code").val();
    var totalCartPrice = parseFloat(totalPriceElement.text()).toFixed(2);
    console.log(totalCartPrice);
    var newTotalCartPrice = 0;
    var oldTotalPrice = totalCartPrice;
    $(".small-loading").show();
    $(".right-coupon , .wrong-coupon , .right-coupon , .error-coupon").fadeOut(150);
    setTimeout(function () {
        $.ajax({
            type: "GET",
            dataType: "json",
            url: "http://localhost:3000/coupons?value=" + currentCouponCode,
            ajaxStart: function () {
                $(".right-loading").fadeOut(150);
                $(".wrong-coupon").fadeOut(150);
                $(".error-coupon").fadeOut(150);
            },
            success: function (data) {
                $(".small-loading").fadeOut(150);
                $(".error-coupon").fadeOut(150);
                if (data.length > 0) {
                    discount_percentage = (data[0].discount_percent) / 100;
                    newTotalCartPrice = (totalCartPrice - (totalCartPrice * discount_percentage)).toFixed(2);
                    console.log(newTotalCartPrice);
                    oldTotalPriceElement.text(oldTotalPrice.toString());
                    oldTotalPriceElement.append("<hr class='position-absolute personal-cart-line my-0'>")
                    $(".right-coupon").fadeIn(150);
                    $(".wrong-coupon").fadeOut(150);
                    totalPriceElement.fadeOut(1000);
                    oldTotalPriceElement.parent().fadeIn(1000);
                    totalPriceElement.text(newTotalCartPrice.toString());
                    totalPriceElement.fadeIn(1000);
                    $("#coupon-code").prop("disabled", true);
                    $("#apply-coupon").prop("disabled", true);
                    isCouponApplied = true;
                }
                else {
                    $(".wrong-coupon").fadeIn(150);
                    $(".right-coupon").fadeOut(150);
                }
            },
            error: function () {
                $(".small-loading").fadeOut(150);
                $(".right-loading").fadeOut(150);
                $(".wrong-coupon").fadeOut(150);
                $(".error-coupon").fadeIn(150);
            }
        });
    }, 2000);
}

function handleCartRowDelete(row) {
    var productRowQuantity = $(".cart-row-quantity", row);
    var productRowTotalPrice = $(".cart-row-total-price", row);
    var productRowQuantityNumber = 0;
    var productRowTotalPriceNumber = parseFloat(productRowTotalPrice.text());
    productRowQuantity.text(productRowQuantityNumber.toString());
    productRowTotalPrice.text(productRowTotalPriceNumber.toString());
    // update total prce for products section
    oldTotalPriceElement.text((parseFloat(oldTotalPriceElement.text()) - productRowTotalPriceNumber).toFixed(2));
    if (!isCouponApplied) {
        totalPriceElement.text((parseFloat(totalPriceElement.text()) - productRowTotalPriceNumber).toFixed(2));
    }
    else {
        totalPriceElement.text((parseFloat(totalPriceElement.text()) - (productRowTotalPriceNumber - (productRowTotalPriceNumber * discount_percentage))).toFixed(2));
    }
    row.hide(500, function () {
        $(this).remove();
    });
}

// **********************************************************************************************************************

function handleCouponWindowClosing() {
    var applying_container = $(this).parent();
    var entering_container = $(".cart-coupon-entering");
    if (isCouponApplied) {
        totalPriceElement.text(oldTotalPriceElement.text());
        oldTotalPriceElement.parent().fadeOut(1000);
        isCouponApplied = false;
        discount_percentage = 0;
    }
    $("#coupon-code").prop("disabled", false);
    $("#apply-coupon").prop("disabled", false);
    applying_container.fadeOut(300, function () {
        $(".right-coupon").hide();
        $(".wrong-coupon").hide();
        $(".error-coupon").hide();
        $(".small-loading").hide();
        entering_container.fadeIn(300);
    })
}

// *********************************************************************************************************

function handleCartCouponEntering() {
    var entering_container = $(this).parent();
    var applying_container = $(".cart-coupon-applying");
    entering_container.fadeOut(500, function () {
        applying_container.fadeIn(500);
    })
}

// Handle Drag event
function handleMarkerDrag(event) {
    var position = { lat: event.latLng.lat(), lng: event.latLng.lng() };
    getAddressByGeo(position.lat, position.lng);
}

function handleMapClick(event) {
    var position = { 'lat': event.latLng.lat(), 'lng': event.latLng.lng() };
    console.log(position);
    getAddressByGeo(position.lat, position.lng);
}

function getAddressByGeo(lat, lng) {
    var latlng = new google.maps.LatLng(lat, lng);
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'latLng': latlng }, (results, status) => {
        if (status == google.maps.GeocoderStatus.OK) {
            console.log(results);
            var address = (results[0].formatted_address);
            $("#customer-location-input").val(address.toString());
            map.setCenter(latlng);
            map.setZoom(16);
            marker.setPosition(latlng);
        }
    });
}


// ********************************************************************************************
//FAQ Page Scripts

function copyToClipboard(textToCopy) {
    var temp = $("<input>");
    $("body").append(temp);
    temp.val(textToCopy);
    temp.select();
    document.execCommand("copy");
    temp.remove();
}

function showTooltip(icon) {
    $(".main-tooltip", icon).fadeIn(500);
    setTimeout(function () {
        $(".main-tooltip", icon).fadeOut(500);
    }, 700);
}

// ********************************************************************************************