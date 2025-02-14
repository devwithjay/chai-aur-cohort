/*
  Question:
  In many applications, data is stored in deeply nested objects.
  Accessing a property from a deeply nested object requires multiple checks to avoid errors.
  Instead of manually checking each level, we need a function that safely retrieves a value from a nested object using a dot-separated key path.

  Description:
  Write a function that takes a nested object and a key path string (e.g., "user.address.city") and returns the value.
  If any part of the path is missing, return "Key not found".

  Constraints:
  - The input object should be valid.
  - The key path should be a string with dot notation (.) separating keys.
  - If a key is missing, return "Key not found".
  - The function should handle deeply nested objects.

  Function: getNestedValue
  Description: Retrieves a value from a nested object based on the provided key path.

  @param {object} obj - The nested object to search.
  @param {string} keyPath - The dot-separated path to the desired value.

  @returns {any} The value if found, or "Key not found" if any part of the path is missing.
*/

function getNestedValue(obj, keyPath) {
  if (
    typeof obj !== 'object' ||
    obj === null ||
    typeof keyPath !== 'string' ||
    !keyPath
  ) {
    return 'Key not found';
  }

  const keys = keyPath.split('.');
  let current = obj;

  for (let key of keys) {
    if (current[key] === undefined) {
      return 'Key not found';
    }
    current = current[key];
  }

  return current;
}

// Example usage
const data = {user: {address: {city: 'Sangamner'}}};
console.log(getNestedValue(data, 'user.address.city')); // "Sangamner"
console.log(getNestedValue(data, 'user.phone')); // "Key not found"

// Export the function
module.exports = getNestedValue;
