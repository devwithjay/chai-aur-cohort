/*
  Question:
  You are building an online shopping platform. Some products have discounts, and some don’t.
  You need to check whether a product object contains a discount property.

  Description:
  Write a function that checks if a product object has a discount property and returns true or false.

  Constraints:
  - product should be a valid object.

  Function: hasDiscount
  Description: Checks if the product object contains a discount property.

  @param {object} product - The product object to check.

  @returns {boolean} true if the product has a discount property, false otherwise.
*/

function hasDiscount(product) {
  if (typeof product !== "object" || product === null || !product.discount) {
    return false;
  }
  return true;
}

// Example usage
console.log(hasDiscount({price: 100, discount: 20})); // true
console.log(hasDiscount({price: 50})); // false

// Export the function
module.exports = hasDiscount;
