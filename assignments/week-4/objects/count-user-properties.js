/*
  Question:
  You are analyzing user data in a database. You need to count how many properties exist in a user's profile to determine if the profile is complete.

  Description:
  Write a function that returns the number of properties in an object.

  Constraints:
  - user should be a valid object.
  - If the object is empty, return 0.

  Function: countProperties
  Description: Returns the number of properties in the user object.

  @param {object} user - The user object whose properties need to be counted.

  @returns {number} The number of properties in the object.
*/

function countProperties(user) {
  if (typeof user !== "object" || user === null) {
    return 0;
  }

  return Object.keys(user).length;
}

// Example usage
console.log(countProperties({name: "Nikhil", age: 20})); // 2
console.log(countProperties({})); // 0

// Export the function
module.exports = countProperties;
