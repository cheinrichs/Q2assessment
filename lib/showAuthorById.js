var knex = require('./knex');

module.exports = function(authorId){
  return knex('authors').where({id: authorId}).then(function(author){
    return knex('books_authors').where({ author_id: authorId }).pluck('book_id').then(function(bookIds){
      return knex('books').whereIn('id', bookIds).then(function(books){
        return {
          author: author[0],
          books: books
        }
      });
    });
  });
}
