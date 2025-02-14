/*
  Question:
  Create a Library constructor that initializes a books array.
  Implement:
  - addBook(book): Adds a book to the books array.
  - findBook(title): Searches for a book by title and returns "Book found" or "Book not found".

  Description:
  Implement a constructor function Library that initializes a books array.
  Attach addBook(book) and findBook(title) methods to the prototype.

  Function: Library
  Description: Constructor function for creating Library objects.

  @property {Array} books - An array storing books in the library.

  Method: addBook
  Description: Adds a new book to the books array.

  @param {string} book - The book title to be added.

  @returns {void}

  Method: findBook
  Description: Searches for a book by title.

  @param {string} title - The title of the book to search.

  @returns {string} "Book found" or "Book not found".
*/

function Library() {
  this.books = [];
}

Library.prototype.addBook = function (book) {
  this.books.push(book);
};

Library.prototype.findBook = function (title) {
  return this.books.includes(title) ? 'Book found' : 'Book not found';
};

// Export the function for reuse in other modules
module.exports = Library;
