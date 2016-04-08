var knex = require('./knex');

module.exports = function(authorId){
  return knex('authors').where({ id: authorId}).del().then(function(){
    return knex('books_authors').where({ author_id: authorId }).del();
  });
}
