var knex = require('./knex');

module.exports = function(){
  return knex('books').select('genre').groupBy('genre');
}
