import ShoppingCart from  "./exportModule.js";

const {shoppingCart , addToCart} = ShoppingCart();

addToCart("Pizza" , 2);
addToCart("burger", 1);
console.log(shoppingCart);

