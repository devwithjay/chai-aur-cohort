/*
  Question:
  You are developing a car rental service. Each car has a brand and model, but some cars don’t have a color assigned yet.
  You need to add a color property dynamically when a customer selects a car.

  Description:
  Write a function that takes a car object and a color string, then adds the color property to the object.

  Constraints:
  - car should be a valid object with at least brand and model properties.
  - color should be a non-empty string, otherwise return "Invalid color".

  Function: addCarColor
  Description: Adds a color property to the given car object.

  @param {object} car - The car object with brand and model properties.
  @param {string} color - The color to be added to the car.

  @returns {object|string} The updated car object with the color property or "Invalid color" for invalid inputs.
*/

function addCarColor(car, color) {
  if (typeof car !== 'object' || car === null || !car.brand || !car.model) {
    return 'Invalid car';
  }

  if (typeof color !== 'string' || color.trim() === '') {
    return 'Invalid color';
  }

  car.color = color;
  return car;
}

// Example usage
console.log(addCarColor({brand: 'Toyota', model: 'Supra'}, 'Silver')); // { brand: 'Toyota', model: 'Supra', color: 'Silver' }
console.log(addCarColor({}, 'Blue')); // "Invalid car"

// Export the function
module.exports = addCarColor;
