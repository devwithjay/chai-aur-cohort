/*
  Question:
  You need to create a constructor function Animal that takes a name parameter. Add a method makeSound to its prototype, which always returns "Some generic sound".

  Description:
  Implement a constructor function Animal that initializes the name property. Attach a method makeSound to its prototype that returns "Some generic sound".

  Function: Animal
  Description: Constructor function for creating Animal objects.

  @param {string} name - The name of the animal.

  Method: makeSound
  Description: Returns a generic sound string.

  @returns {string} "Some generic sound".
*/
function Animal(name) {
  this.name = name;
}

Animal.prototype.makeSound = function () {
  return "Some generic sound";
};

// Export the function for reuse in other modules
module.exports = Animal;