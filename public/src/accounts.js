function findAccountById(accounts, id) {
  return accounts.find(account => account.id === id);
  
}

function sortAccountsByLastName(accounts) {
  const result = accounts.sort((accountA , accountB)=> 
                               accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1
 );
 return accounts;

}

function getTotalNumberOfBorrows(account, books) {
  let totalBorrows = 0 
   for (let i = 0; i < books.length; i++) {
  for (let j = 0; j < books[i].borrows.length; j++) {
   if (account.id === books[i].borrows[j].id) {
    totalBorrows += 1;
   }
  }
 }
 return totalBorrows
  }
 


function getBooksPossessedByAccount(account, books, authors) {
     return books.filter((book) => book.borrows.some(acc => acc.id === account.id && acc.returned === false))
    .map(book => { const author = authors.find(author => author.id === book.authorId)
      book.author = author; 
      return book;         
 })  

}
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
