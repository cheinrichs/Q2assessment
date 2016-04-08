var knex = require('./knex');

module.exports = function(bookId){
  return knex('books').where({id: bookId}).then(function(book){
    return knex('books_authors').where({ book_id: bookId }).pluck('author_id').then(function(authorIds){
      return knex('authors').whereIn('id', authorIds).then(function(authors){
        return {
          book: book[0],
          authors: authors
        }
      });
    });
  });
}
