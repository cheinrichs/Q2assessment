var knex = require('./knex');

module.exports = function(bookId){
  return knex('books').where({id: bookId});
}
