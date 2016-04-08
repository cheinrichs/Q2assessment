var knex = require('./knex');

module.exports = function(bookId){
  // return knex('books').where({ id: bookId}).del().then(function(){
  //   return knex('books_authors').where({ book_id: bookId }).del();
  // });
  return knex('books').where({ id: bookId}).then(function(books){
    return knex('books_authors').where({ book_id: bookId }).then(function(connectors){
      console.log("connectors!");
      console.log(connectors);
    });
  });
}
