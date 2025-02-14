/*
  Question:
  You are working on a system that stores product details in an object.
  However, for some functionalities, the data needs to be in an array format.

  Description:
  Write a function that converts an object into an array of key-value pairs.
  Each element in the array should be an array where the first item is the key and the second item is the value.

  Constraints:
  - The input should be a valid object.
  - If the object is empty, return an empty array.

  Function: objectToArray
  Description: Converts an object into an array of key-value pairs.

  @param {object} obj - The object to be converted.

  @returns {Array} An array of key-value pair arrays.
*/

function objectToArray(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return [];
  }

  return Object.entries(obj);
}

// Example usage
console.log(objectToArray({name: 'Sarthak', age: 30})); // [['name', 'Sarthak'], ['age', 30]]
console.log(objectToArray({})); // []

// Export the function
module.exports = objectToArray;
