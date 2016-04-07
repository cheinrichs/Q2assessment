var knex = require('./knex');

module.exports = function(authorId){
  return knex('authors').where({id: authorId});
}
