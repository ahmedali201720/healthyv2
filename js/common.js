var lastScrollTop = 0;

const mainHeaderContainer = $(".main-container");
const mainHeaderNavbar = $(".main-navbar");

const oldTotalPriceElement = $(".personal-cart-total-price-old p");
const totalPriceElement = $(".personal-cart-total-price p");
var isCouponApplied = false;
var discount_percentage = 0;

const cartRowCloseWindowIcon = $(".cart-row-container .fa-window-close");
const cartRowDeleteLink = $(".personal-cart-product-delete");

const closeCouponWindowIcon = $("#close-coupon-window");

const cartCouponEnteringLink = $(".cart-coupon-entering a");
const cartCouponLoginLink = $(".personal-cart-login-btn a");

const orderActionButton = $(".order-action-button");

const cartIncrementBtn = $(".cart-increment-btn");
const cartDecrementBtn = $(".cart-decrement-btn");


// variable holds the whole container of product rows and order control
var mainContainer = $(".personal-cart-details-container");
// variable holds element of no data to display container
var noDataInCartContainer = $(".cart-no-data-container");
// variable  holds all rows in cart
var cartRowElements = $(".cart-row-container");
// Cart Row Quantity element
var productQuantityElements = $(".cart-row-quantity");
// Get product Number from main and small headers
var largeHeaderItemsNumberElement = $("#cart-items-number");
var smallHeaderItemsNumberElement = $("#small-cart-items-number");
var footerItemsNumberElement = $(".footer-product-num");
var absoluteCartItemsNumberElement = $("#absolute-cart-items-number");
// Get footer price elements for main header and small header
var footerTotalPriceElement = $(".footer-price");
// variable holds the total price number to be paid
var cartTotalPriceNumber = 0;
// cart Total Quantity Number (sum of all product quantities)
var cartQuantitySum = 0;