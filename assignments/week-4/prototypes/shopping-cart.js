/*
  Question:
  Create a ShoppingCart system where items can be added with a price. 
  Implement a method getTotalPrice() that calculates the total price of all items in the cart.

  Description:
  Implement a constructor function ShoppingCart that initializes an empty items array.
  Attach addItem(price) to the prototype to add items.
  Attach getTotalPrice() to calculate the total price of items.

  Function: ShoppingCart
  Description: Constructor function for creating ShoppingCart objects.

  @property {Array} items - An array storing item prices.

  Method: addItem
  Description: Adds a new item price to the items array.

  @param {number} price - The price of the item.

  @returns {void}

  Method: getTotalPrice
  Description: Calculates the total price of all items in the cart.

  @returns {number} The total price of all items.
*/

function ShoppingCart() {
  this.items = [];
}

// Define addItem method on ShoppingCart's prototype
ShoppingCart.prototype.addItem = function (price) {
  this.items.push(price);
};

ShoppingCart.prototype.getTotalPrice = function () {
  return this.items.reduce((total, price) => total + price, 0);
};

// Export the function for reuse in other modules
module.exports = ShoppingCart;
