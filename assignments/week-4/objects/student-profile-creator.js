/*
  Question:
  Imagine you are building an online school management system. Each student has a profile containing their name, age, and grade.
  You need to store this information in an object format so that it can be accessed easily when required.

  Description:
  Write a function that takes name, age, and grade as parameters and returns a student object containing these properties.

  Constraints:
  - name should be a string.
  - age should be a positive integer greater than 5.
  - grade should be a string like "10th", "12th", etc.
  - return "Invalid input" for wrong inputs.

  Function: createStudentProfile
  Description: Creates a student profile with the given name, age, and grade.

  @param {string} name - The name of the student.
  @param {number} age - The age of the student (must be greater than 5).
  @param {string} grade - The grade of the student (e.g., "10th", "12th").

  @returns {object|string} An object containing name, age, and grade if valid, otherwise "Invalid input".
*/

function createStudentProfile(name, age, grade) {
  if (typeof name !== 'string' || name === '') {
    return 'Invalid input';
  }

  if (typeof age !== 'number' || age <= 5 || !Number.isInteger(age)) {
    return 'Invalid input';
  }

  if (typeof grade !== 'string' || grade === '') {
    return 'Invalid input';
  }

  return {name, age, grade};
}

// Example usage
console.log(createStudentProfile('Mukul', 10, '5th')); // { name: 'Mukul', age: 10, grade: '5th' }
console.log(createStudentProfile('Hitesh', 4, '3rd')); // "Invalid input"

// Export the function
module.exports = createStudentProfile;
