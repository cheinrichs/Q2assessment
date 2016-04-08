var knex = require('./knex');

module.exports = function(first, last, bio, portrait_url){
  return knex('authors').insert({first: first, last: last, bio: bio, portrait_url: portrait_url}).returning('id');
}
