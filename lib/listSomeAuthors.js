var knex = require('./knex');

module.exports = function(limit){
  return knex('authors').limit(limit).then(function(authors){
    return knex('authors').count('id').then(function(count){
      return {
        authors: authors,
        count: count
      }
    });
  });
}
