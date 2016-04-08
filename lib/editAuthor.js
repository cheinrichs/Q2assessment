var knex = require('./knex');

module.exports = function(authorId, first, last, bio, portraitUrl){
  return knex('authors').where({ id: authorId}).update({first: first, last: last, bio: bio, portrait_url: portraitUrl});
}
