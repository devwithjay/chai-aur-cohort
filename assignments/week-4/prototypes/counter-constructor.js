/*
  Question:
  You need to create a Counter constructor function that initializes a count property to 0. 
  The counter should have two prototype methods:
  
  - increment() increases the count by 1.
  - decrement() decreases the count by 1.

  Description:
  Implement a constructor function Counter that initializes count to 0.
  Attach increment() and decrement() methods to the prototype.

  Function: Counter
  Description: Constructor function for creating Counter objects.

  @property {number} count - The current count value.

  Method: increment
  Description: Increases the count by 1.

  @returns {void}

  Method: decrement
  Description: Decreases the count by 1.

  @returns {void}
*/

function Counter() {
  this.count = 0;
}

Counter.prototype.increment = function () {
  this.count++;
};

Counter.prototype.decrement = function () {
  this.count--;
};

// Export the function for reuse in other modules
module.exports = Counter;
