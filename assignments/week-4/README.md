<a href="./">
  <h1 align="center">Week - 4</h1>
</a>

<p align="center">
  Welcome to my Week Four Assignments repository! Here, you'll find solutions to Javascript challenges. 
</p>

<br>

<p align="center">
  <a href="#1-prototypes"><strong>Prototypes</strong></a> 
</p>

</br>

### 1. Prototypes

#### [Animal Constructor](./prototypes/animal-constructor.js)

You need to create a constructor function Animal that takes a name parameter. Add a method makeSound to its prototype, which always returns "Some generic sound".

#### Challenge

- Implement a constructor function Animal that initializes the name property.
- Attach a method makeSound to its prototype that returns "Some generic sound".

#### [Robot Constructor](./prototypes/robot-constructor.js)

You are designing a simple robot system. Each robot has a `name` and a `batteryLevel`. The robot should have a method `charge()` that increases the battery level by `20`, but it cannot exceed `100`.

#### Challenge

- Implement a constructor function `Robot` that initializes `name` and `batteryLevel`.
- Attach a method `charge()` to its prototype that increases `batteryLevel` by `20`, ensuring it does not go above `100`.

#### [Counter Constructor](./prototypes/counter-constructor.js)

You need to create a `Counter` constructor function that initializes a `count` property to `0`. The counter should have two prototype methods:

- `increment()` increases the count by `1`.
- `decrement()` decreases the count by `1`.

#### Challenge

- Implement a constructor function `Counter` that initializes `count` to `0`.
- Attach `increment()` and `decrement()` methods to the prototype.\
  
#### [Playlist Constructor](./prototypes/playlist-constructor.js)

Create a `Playlist` constructor that initializes with an empty `songs` array. Add a method `addSong(song)` to the prototype that adds a new song to the playlist.

#### Challenge

- Implement a constructor function `Playlist` that initializes an empty `songs` array.
- Attach a method `addSong(song)` to its prototype that adds the song to the `songs` array.

#### [Shopping Cart](./prototypes/shopping-cart.js)

Create a `ShoppingCart` system where items can be added with a `price`. Implement a method `getTotalPrice()` that calculates the total price of all items in the cart.

#### Challenge

- Implement a constructor function `ShoppingCart` that initializes an empty `items` array.
- Attach `addItem(price)` to the prototype to add items.
- Attach `getTotalPrice()` to calculate the total price of items.

#### [Bank Account](./prototypes/bank-account.js)

Create a `BankAccount` constructor that initializes:

- A `balance` property representing the account balance.
- A `transactions` array to log all deposit and withdrawal activities.

Implement the following **methods** on the prototype:

1. `deposit(amount)`:  
   - Increases the `balance` by the given amount.
   - Adds a transaction log in the format: `"Deposited X"` (where X is the amount).

2. `withdraw(amount)`:  
   - Decreases the `balance` by the given amount.
   - Prevents **overdraft** (cannot withdraw if balance is insufficient).
   - If withdrawal is **successful**, log: `"Withdrew X"`.
   - If balance is **insufficient**, log: `"Insufficient balance"`.

3. `getTransactionHistory()`:  
   - Returns the list of all transactions as an **array of strings** in the order they occurred.

#### Challenge

- Implement `BankAccount` constructor with `balance` and `transactions`.
- Attach `deposit(amount)`, `withdraw(amount)`, and `getTransactionHistory()` methods to the prototype.

#### [Employee Constructor](./prototypes/employee-constructor.js)

Create an `Employee` constructor that initializes `name`, `position`, and `salary`. Implement:

- `applyBonus(percent)`: Increases the salary by the given percentage.

#### Challenge

- Implement `Employee` constructor with `name`, `position`, and `salary`.
- Attach `applyBonus(percent)` to the prototype to increase salary.

#### [Library Constructor](./prototypes/library-constructor.js)

Create a `Library` constructor that initializes a `books` array. Implement:

- `addBook(book)`: Adds a book to the `books` array.
- `findBook(title)`: Searches for a book by title and returns `"Book found"` or `"Book not found"`.

#### Challenge

- Implement `Library` constructor with a `books` array.
- Attach `addBook(book)` and `findBook(title)` methods to the prototype.

#### [Bank Account-2](./prototypes/bank-account-2.js)

You are building a **banking system** where multiple bank accounts can exist. Each account has an `accountNumber`, `holderName`, and `balance`. Implement the following methods:

- `deposit(amount)`: Adds money to the balance.
- `withdraw(amount)`: Deducts money but prevents overdraft.
- `transfer(amount, targetAccount)`: Transfers money from one account to another if the balance allows it.

#### Challenge

- Implement `BankAccount` constructor with `accountNumber`, `holderName`, and `balance`.
- Attach `deposit(amount)`, `withdraw(amount)`, and `transfer(amount, targetAccount)` methods to the prototype.

#### [Product Constructor](./prototypes/product-constructor.js)

You are developing an **online store** system where each product has the following properties:

- `name`: The name of the product (e.g., `"Laptop"`).
- `price`: The price of the product (a positive integer).
- `stock`: The available stock (a non-negative integer).

Your task is to implement the following methods:

1. **applyDiscount(percent)**  
   - Reduces the `price` of the product by the given **percentage**.  
   - The final price should be **rounded to the nearest integer** (use `Math.round`).  
   - Example: If a product costs `$1000` and a **10%** discount is applied, the new price should be **$900**.

2. **purchase(quantity)**  
   - If the requested `quantity` is **available in stock**, reduce the stock accordingly.  
   - If **not enough stock** is available, return `"Not enough stock"`.  
   - Example: If `5` items are in stock and the user buys `3`, the new stock should be `2`.

#### Challenge

- Implement the `Product` constructor with `name`, `price`, and `stock` properties.
- Attach `applyDiscount(percent)` and `purchase(quantity)` methods to the **prototype** (for memory efficiency).
- Ensure **integer values** for price after applying a discount.
- Handle **edge cases** like **zero stock** or **excessive purchases**.