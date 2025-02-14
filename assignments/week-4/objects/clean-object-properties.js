/*
  Question:
  In your web application, some objects contain unnecessary properties.
  To optimize performance, you need to remove all properties that have null or undefined values.

  Description:
  Write a function that removes all properties with null or undefined values from an object.

  Constraints:
  - The input should be a valid object.
  - If the object has no valid properties left, return {}.

  Function: cleanObject
  Description: Removes properties with null or undefined values from the given object.

  @param {object} obj - The object to be cleaned.

  @returns {object} The cleaned object with valid properties.
*/

function cleanObject(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return {};
  }

  for (let key in obj) {
    if (obj[key] === null || obj[key] === undefined) {
      delete obj[key];
    }
  }

  return obj;
}

// Example usage
console.log(cleanObject({name: 'Jay', age: null, city: 'Sangamner'})); // { name: 'Jay', city: 'Sangamner' }
console.log(cleanObject({a: undefined, b: null})); // {}

// Export the function
module.exports = cleanObject;
