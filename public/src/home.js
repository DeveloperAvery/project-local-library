const totalBooksCount = books => {
  let numberOfBooks = 0;
  for (book in books) {
    books[book] ? numberOfBooks += 1 : numberOfBooks += 0;
  }
  return numberOfBooks;
}

const totalAccountsCount = accounts => {
  let numberOfAccounts = 0;
  for (account in accounts) {
    accounts[account] ? numberOfAccounts += 1 : numberOfAccounts += 0;
  }
  return numberOfAccounts;
}

function booksBorrowedCount(books) {
  let numberOfBorrowedBooks = 0;
  for (let book in books) {
    if (!books[book].borrows[0].returned)
   numberOfBorrowedBooks += 1
  }
  return numberOfBorrowedBooks;
}

const getMostCommonGenres = books => {
  //this is the mostCommonGenres function!
  let unorderedList = [];
  for (book in books) {
    let name = books[book].genre;
    let count = 1;
    let found = false;
    for (items in unorderedList) {
      if (books[book].genre === unorderedList[items].name) {
        unorderedList[items].count += 1;
        found = true;
      } 
    }
    if (!found) unorderedList.push({name, count});
  } 
  const orderedList = unorderedList.sort((obj1, obj2) => obj1.count < obj2.count ? 1 : -1);
  return orderedList.slice(0,5);
}

const getMostPopularBooks = books => {
  //this is the mostPopularBooks function!
  let unorderedList = [];
  for (book in books) {
    let name = books[book].title;
    let count = 0;
    books[book].borrows.forEach(borrow => {
      count = books[book].borrows.length;    
    });
    unorderedList.push({name, count});
  }
  const orderedList = unorderedList.sort((obj1, obj2) => obj1.count < obj2.count ? 1 : -1);
  return orderedList.slice(0,5);
}

const getMostPopularAuthors = (books, authors) => {
  //this is the mostPopularAuthors function!
  const unorderedList = books.reduce((acc, book) => {
    const bookId = book.authorId;
    const findAuthorById = (authors, id) => authors.find((authorID) => authorID.id === id);
    const foundAuthor = findAuthorById(authors, bookId);
    const firstName = foundAuthor.name.first;
    const lastName = foundAuthor.name.last;
    const name = `${firstName} ${lastName}`
    const count = book.borrows.length;
    acc.push({name, count});
    return acc;
  }, []);
  const orderedList = unorderedList.sort((obj1, obj2) => obj1.count < obj2.count ? 1 : -1);
  return orderedList.slice(0,5);
}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  mostCommonGenres,
  mostPopularBooks,
  mostPopularAuthors,
};
