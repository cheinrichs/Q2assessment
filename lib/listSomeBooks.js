var knex = require('./knex');

module.exports = function(limit){
  return knex('books').limit(limit).then(function(books){
    return knex('books').count('id').then(function(count){
      return {
        books: books,
        count: count
      }
    });
  });
}
