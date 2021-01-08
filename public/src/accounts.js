const findAccountById = (accounts, id) => accounts.find((accountID) => accountID.id === id);

function sortAccountsByLastName(accounts) {
    return accounts.sort((name1, name2) => 
    name1.name.last.toLowerCase() > name2.name.last.toLowerCase() ? 1 : -1); 
}   

const numberOfBorrows = (accounts, books) => {
  let borrowsNumber = 0;
  let holderArray; 
    for (book in books) {
      holderArray = books[book].borrows.map((borrowArray) => {
        return borrowArray.id;
      });
      holderArray = holderArray.filter((id) => id === accounts.id);
      if (holderArray.length > 0) borrowsNumber++
    }
  return borrowsNumber; 
}

const booksInPossession = ({ id }, books, authors) => {
  let borrowedBooks = [];
    for (let book in books) {
      let bookObj = books[book];
      if (bookObj.borrows.find((borrowObj) => (borrowObj.id === id && borrowObj.returned == false))) {
        for (let author in authors) {
          if (bookObj.authorId === authors[author].id) {
            bookObj.author = authors[author];
            borrowedBooks.push(bookObj);
          }
        }
      }
    }
  return borrowedBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  booksInPossession,
};
