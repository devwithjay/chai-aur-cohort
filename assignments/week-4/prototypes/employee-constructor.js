/*
  Question:
  Create an Employee constructor that initializes name, position, and salary. 
  Implement applyBonus(percent): Increases the salary by the given percentage.

  Description:
  Implement a constructor function Employee that initializes name, position, and salary.
  Attach applyBonus(percent) to its prototype to increase salary.

  Function: Employee
  Description: Constructor function for creating Employee objects.

  @property {string} name - The name of the employee.
  @property {string} position - The job position of the employee.
  @property {number} salary - The salary of the employee.

  Method: applyBonus
  Description: Increases the salary by the given percentage.

  @param {number} percent - The percentage increase to be applied.

  @returns {void}
*/

function Employee(name, position, salary) {
  this.name = name;
  this.position = position;
  this.salary = salary;
}

Employee.prototype.applyBonus = function (percent) {
  this.salary += Math.round((this.salary * percent) / 100);
};

// Export the function for reuse in other modules
module.exports = Employee;
