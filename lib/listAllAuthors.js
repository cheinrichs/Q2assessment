var knex = require('./knex');

module.exports = function(){
  return knex('authors').orderBy('last').then(function(authors){
    return knex('authors').count('id').then(function(count){
      return {
        authors: authors,
        count: count
      }
    });
  });
}
