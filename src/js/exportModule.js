console.log("exporting modules");

const shoppingCart = [];


const addToCart = function(name , quantity){
shoppingCart.push({name, quantity});
};

export default function() {
    return {shoppingCart , addToCart};
}