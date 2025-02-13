/*
  Question:
  For security reasons, when a user logs out, their password should be removed from the user object before storing it in logs or analytics.

  Description:
  Write a function that removes the password property from a user object and returns the updated object.

  Constraints:
  - user should be a valid object with at least a username and password.
  - If password does not exist, return the object as it is.

  Function: removePassword
  Description: Removes the password property from the user object.

  @param {object} user - The user object containing user details.

  @returns {object} The updated user object without the password property.
*/

function removePassword(user) {
  if (typeof user !== "object" || user === null || !user.username) {
    return "Invalid user";
  }

  if (user.hasOwnProperty("password")) {
    delete user.password;
  }

  return user;
}

// Example usage
console.log(removePassword({username: "Onkar", password: "secret"})); // { username: 'Onkar' }
console.log(removePassword({username: "Anirudh"})); // { username: 'Bob' }

// Export the function
module.exports = removePassword;
