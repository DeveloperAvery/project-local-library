const findAuthorById = (authors, id) => authors.find((authorID) => authorID.id === id);

function findBookById(books, id) {
  for (let name in books) {
    let authorID = books[name];
    if (authorID.id === id) {
      return authorID;
    }
  }
}

function partitionBooksByBorrowedStatus(books) {
  let borrowedBooks = books.filter (book => book.borrows[0].returned === false);
  let returnedBooks = books.filter(book => {
    return book.borrows[0].returned == true;
  })
  return [borrowedBooks, returnedBooks];
}

const getBorrowersForBook = (book, accounts) => {
  let previousBorrowers = [];
  accounts.forEach(account => {
    book.borrows.forEach(transaction => {
      if (transaction.id === account.id) {
        let accountObj = {...account};
        accountObj.returned = transaction.returned;
        previousBorrowers.push(accountObj);
      }
    })
  })
  return previousBorrowers.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
