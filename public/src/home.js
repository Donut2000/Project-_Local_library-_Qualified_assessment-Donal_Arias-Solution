function getTotalBooksCount(books) {
  return books.length;
}
  
function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
   let booksCheckedOut = books.filter(
  (book) =>
   book.borrows.filter((record) => record.returned === false).length > 0
 );
 return booksCheckedOut.length;
}


function getMostCommonGenres(books) {
  let topGenres = [];
  let common = books.map((book) => book.genre);
    
    common.map((genre)=>{
    const count = topGenres.findIndex((match) => match.name === genre);
      if(count >= 0){
     
        topGenres[count].count = topGenres[count].count +1;
      }else{
        
        topGenres.push({ name: genre, count: 1 });
      }
  });
  topGenres.sort((genreA, genreB) => genreB.count - genreA.count);
    if(topGenres.length > 5){
      return topGenres.slice(0,5);
    }
  return topGenres;
}

function getMostPopularBooks(books) {
//return list of top five borrowed books
  let topFive = books.map((book) =>{
    return { name: book.title, count: book.borrows.length};
  });
    return topFive.sort((bookA, bookB) => (bookA.count < bookB.count ? 1 : -1)).slice(0, 5); 
}

function getMostPopularAuthors(books, authors) {
//return a list of top five authors
  let topFive = [];
    for(let author of authors){
      let name = `${author.name.first} ${author.name.last}`;
        
      let count = 0;
      for(let book of books){
         if(author.id === book.authorId){
           count += book.borrows.length;
        }
      }
      const result = { name: name, count: count};
      topFive.push(result);
    }
  return topFive.sort((authorA, authorB) => (authorA.count < authorB.count ? 1 : -1)).slice(0, 5); 
 }

//created helper function
function countItems(item) {
  return item.length;
}
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
