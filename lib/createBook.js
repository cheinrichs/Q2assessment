var knex = require('./knex');

module.exports = function(title, genre, description, coverUrl, authors){

  return knex('books').insert({title: title, genre: genre, description: description, cover_url: coverUrl}).returning('id').then(function(id){
    var books_authorsInsert = [];
    authors = authors.split(',');
    for(var i = 0; i < authors.length; i++){
      var authorIdConnection = {};
      authorIdConnection.book_id = id[0];
      authorIdConnection.author_id = authors[i];
      books_authorsInsert.push(authorIdConnection);
    }
    return knex('books_authors').insert(books_authorsInsert);
  });
}
