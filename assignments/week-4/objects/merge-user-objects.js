/*
  Question:
  You are working on a system that stores user profile information from multiple sources.
  Sometimes, the same user has two different records, and you need to merge them into a single object.

  Description:
  Write a function that takes two objects and merges them into one.
  If a key exists in both objects, the value from the second object should overwrite the value from the first object.

  Constraints:
  - Both inputs should be valid objects.
  - If an object is empty, return the other object as it is.
  - If both objects are empty, return {}.

  Function: mergeObjects
  Description: Merges two objects into one, with the second object overriding duplicate keys.

  @param {object} obj1 - The first object.
  @param {object} obj2 - The second object.

  @returns {object} The merged object.
*/

function mergeObjects(obj1, obj2) {
  if (typeof obj1 !== "object" || obj1 === null) obj1 = {};
  if (typeof obj2 !== "object" || obj2 === null) obj2 = {};

  if (Object.keys(obj1).length === 0 && Object.keys(obj2).length === 0) {
    return {};
  }

  if (Object.keys(obj1).length === 0) return obj2;
  if (Object.keys(obj2).length === 0) return obj1;

  return {...obj1, ...obj2};
}

// Example usage
console.log(mergeObjects({name: "Rushikesh", age: 25}, {age: 30, city: "Sangamner"})); // { name: 'Rushikesh', age: 30, city: 'Sangamner' }
console.log(mergeObjects({}, {hobby: "Reading"})); // { hobby: 'Reading' }

// Export the function
module.exports = mergeObjects;
