/*
  Question:
  Create a Product constructor that initializes name, price, and stock properties.
  Implement:
  - applyDiscount(percent): Reduces the price by the given percentage and rounds to the nearest integer.
  - purchase(quantity): Reduces stock if enough items are available, otherwise returns "Not enough stock".

  Description:
  Implement a constructor function Product that initializes name, price, and stock properties.
  Attach applyDiscount(percent) and purchase(quantity) methods to the prototype.

  Function: Product
  Description: Constructor function for creating Product objects.

  @property {string} name - The name of the product.
  @property {number} price - The price of the product (positive integer).
  @property {number} stock - The available stock (non-negative integer).

  Method: applyDiscount
  Description: Applies a discount and rounds the price to the nearest integer.

  @param {number} percent - The discount percentage.

  @returns {void}

  Method: purchase
  Description: Attempts to purchase a given quantity, reducing stock if available.

  @param {number} quantity - The number of items to purchase.

  @returns {string|void} "Not enough stock" if purchase is not possible, otherwise reduces stock.
*/

function Product(name, price, stock) {
  this.name = name;
  this.price = price;
  this.stock = stock;
}

Product.prototype.applyDiscount = function (percent) {
  this.price = Math.round(this.price * (1 - percent / 100));
};

Product.prototype.purchase = function (quantity) {
  return quantity <= this.stock ? (this.stock -= quantity) : "Not enough stock";
};

// Export the function for reuse in other modules
module.exports = Product;
