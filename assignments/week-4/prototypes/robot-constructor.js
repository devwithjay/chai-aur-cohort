/*
  Question:
  You are designing a simple robot system. Each robot has a name and a batteryLevel.
  The robot should have a method charge() that increases the battery level by 20, but it cannot exceed 100.

  Description:
  Implement a constructor function Robot that initializes the name and batteryLevel properties.
  Attach a method charge() to its prototype that increases batteryLevel by 20, ensuring it does not go above 100.

  Function: Robot
  Description: Constructor function for creating Robot objects.

  @param {string} name - The name of the robot.
  @param {number} batteryLevel - The initial battery level of the robot.

  Method: charge
  Description: Increases battery level by 20, ensuring it does not exceed 100.

  @returns {void}
*/
function Robot(name, batteryLevel) {
  this.name = name;
  this.batteryLevel = batteryLevel;
}

Robot.prototype.charge = function () {
  this.batteryLevel = Math.min(this.batteryLevel + 20, 100);
};

// Export the function for reuse in other modules
module.exports = Robot;