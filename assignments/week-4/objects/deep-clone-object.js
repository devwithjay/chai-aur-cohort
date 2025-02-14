/*
  Question:
  You are working on a web application where objects contain nested properties.
  JavaScript’s built-in assignment (=) creates a shallow copy, meaning changes to the copied object will also affect the original.
  To prevent this, you need to create a deep copy of an object, ensuring that nested objects are also cloned properly.

  Description:
  Write a function that takes an object and returns a deep copy of it.

  Constraints:
  - The input should be a valid object.
  - The function should work with nested objects and arrays inside objects.
  - The function should not modify the original object.

  Function: deepClone
  Description: Returns a deep copy of the provided object.

  @param {object} obj - The object to be deeply cloned.

  @returns {object} A deep copy of the input object.
*/

function deepClone(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  return JSON.parse(JSON.stringify(obj));
}

// Example usage
const original = {name: 'Sanket', details: {age: 30, city: 'Sangamner'}};
const cloned = deepClone(original);
console.log(cloned); // { name: 'Sanket', details: { age: 30, city: 'Sangamner' } }
console.log(cloned !== original); // true

// Export the function
module.exports = deepClone;
