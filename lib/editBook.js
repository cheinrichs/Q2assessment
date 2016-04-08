var knex = require('./knex');

module.exports = function(bookId, title, genre, description, coverUrl, authors){
  return knex('books').where({ id: bookId }).update({ title: title, genre: genre, description: description, cover_url: coverUrl })
  .then(function(id){
    return knex('books_authors').where({ book_id: bookId }).del()
    .then(function(){
      console.log(authors);
      console.log(bookId);
      var books_authorsInsert = [];
      authors = authors.split(',');
      for(var i = 0; i < authors.length; i++){
        var authorIdConnection = {};
        authorIdConnection.book_id = bookId;
        authorIdConnection.author_id = authors[i];
        books_authorsInsert.push(authorIdConnection);
      }
      return knex('books_authors').insert(books_authorsInsert);
    });
  });
}
