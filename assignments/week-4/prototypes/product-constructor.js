/*
  Question:
  You are developing an online store system where each product has the following properties:
  
  - name: The name of the product (e.g., "Laptop").
  - price: The price of the product (a positive integer).
  - stock: The available stock (a non-negative integer).

  Implement the following methods:

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

// You need to implement the Product constructor function and its prototype methods

function Product(name, price, stock) {
  // Initialize name, price, and stock properties
}

// Define applyDiscount method on Product's prototype

// Define purchase method on Product's prototype
