const mango = (quantity, price) => price * (quantity - Math.floor(quantity / 3))

// const mango declares a constant variable named mango that is a function.
// (quantity, price) are the two parameters that the mango function takes. 
// quantity represents the number of mangoes to be purchased, and price 
// represents the price of one mango.
// => is the arrow function syntax, which indicates that the function 
// returns a value.
// price * (quantity - Math.floor(quantity / 3)) is the expression 
// that calculates the total price of the mangoes. It does this by 
// subtracting the number of free mangoes (calculated using Math.floor
// (quantity / 3)) from the
// total quantity of mangoes, and multiplying the result by the price per mango.

// function mango(quantity, price){
//   return price * (quantity - Math.floor(quantity / 3));
// }

// function mango(quantity, price) {
//   const discountedPrice = (2/3) * price;
//   const discountedQuantity = Math.floor(quantity / 3);
//   const regularQuantity = quantity % 3;
//   const totalPrice = (discountedQuantity * 2 + regularQuantity) * price;
//   return totalPrice;
// }