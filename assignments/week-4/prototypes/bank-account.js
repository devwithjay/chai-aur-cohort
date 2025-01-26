/*
  Question:
  Create a BankAccount constructor that initializes balance and transactions.
  Implement the following methods:
  - deposit(amount): Increases the balance and logs the transaction.
  - withdraw(amount): Decreases the balance and logs the transaction, preventing overdraft.
  - getTransactionHistory(): Returns the list of all transactions.

  Description:
  Implement a constructor function BankAccount that initializes balance and transactions.
  Attach deposit(amount), withdraw(amount), and getTransactionHistory() methods to the prototype.

  Function: BankAccount
  Description: Constructor function for creating BankAccount objects.

  @property {number} balance - The current account balance.
  @property {Array} transactions - An array storing transaction logs.

  Method: deposit
  Description: Increases the balance and logs the transaction.

  @param {number} amount - The amount to be deposited.

  @returns {void}

  Method: withdraw
  Description: Decreases the balance, prevents overdraft, and logs the transaction.

  @param {number} amount - The amount to be withdrawn.

  @returns {void}

  Method: getTransactionHistory
  Description: Returns the list of all transactions in order.

  @returns {Array<string>} An array of transaction logs.
*/

function BankAccount(balance) {
  this.balance = balance;
  this.transactions = [];
}

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
  this.transactions.push(`Deposited ${amount}`);
};

BankAccount.prototype.withdraw = function (amount) {
  if (amount > this.balance) {
    this.transactions.push("Insufficient balance");
  } else {
    this.balance -= amount;
    this.transactions.push(`Withdrew ${amount}`);
  }
};

BankAccount.prototype.getTransactionHistory = function () {
  return this.transactions;
};

// Export the function for reuse in other modules
module.exports = BankAccount;