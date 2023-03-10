function findAuthorById(authors, id) {
  return authors.find(author => author.id ===id);
}

function findBookById(books, id) {
  return books.find(books => books.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  let array1 = books.filter((book) => book.borrows[0].returned === false);
  let array2 = books.filter((book) => book.borrows[0].returned !== false)
  return [array1,array2] ; 

}

function getBorrowersForBook(book, accounts) {
  return book.borrows.map(borrow => {
    let account = accounts.find(account => account.id === borrow.id);
    return {...borrow, ...account};
  }).slice(0, 10);
}


module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
