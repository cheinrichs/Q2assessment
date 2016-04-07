var knex = require('./knex');

module.exports = function(authorId){
  return knex('authors').where({id: authorId}).then(function(author){
    return knex('books_authors').where({ id: authorId }).pluck('book_id').then(function(bookIds){
      console.log(bookIds);
      return knex('books').whereIn('id', bookIds).then(function(books){
        return {
          author: author[0],
          books: books
        }
      });
    });
  });
}
