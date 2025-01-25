/*
  Question:
  You are building a banking system where multiple bank accounts can exist.
  Each account has an accountNumber, holderName, and balance.
  Implement the following methods:
  
  - deposit(amount): Adds money to the balance.
  - withdraw(amount): Deducts money but prevents overdraft.
  - transfer(amount, targetAccount): Transfers money from one account to another if the balance allows it.

  Description:
  Implement a constructor function BankAccount that initializes accountNumber, holderName, and balance.
  Attach deposit(amount), withdraw(amount), and transfer(amount, targetAccount) methods to the prototype.

  Function: BankAccount
  Description: Constructor function for creating BankAccount objects.

  @property {string} accountNumber - The unique account number.
  @property {string} holderName - The name of the account holder.
  @property {number} balance - The account balance.

  Method: deposit
  Description: Adds money to the balance.

  @param {number} amount - The amount to be deposited.

  @returns {void}

  Method: withdraw
  Description: Deducts money but prevents overdraft.

  @param {number} amount - The amount to be withdrawn.

  @returns {void}

  Method: transfer
  Description: Transfers money from one account to another if the balance allows it.

  @param {number} amount - The amount to be transferred.
  @param {object} targetAccount - The target BankAccount object to receive the transfer.

  @returns {void}
*/

// You need to implement the BankAccount constructor function and its prototype methods

function BankAccount(accountNumber, holderName, balance) {
  // Initialize accountNumber, holderName, and balance properties
}

// Define deposit method on BankAccount's prototype

// Define withdraw method on BankAccount's prototype

// Define transfer method on BankAccount's prototype
