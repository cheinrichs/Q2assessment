var knex = require('./knex');

module.exports = function(bookId){
  return knex('books').where({ id: bookId}).del().then(function(){
    return knex('books_authors').where({ book_id: bookId }).del();
  });
}
