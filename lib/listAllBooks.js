var knex = require('./knex');

module.exports = function(){
  return knex('books').then(function(books){
    return knex('books').count('id').then(function(count){
      return {
        books: books,
        count: count
      }
    });
  });
}
