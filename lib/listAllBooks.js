var knex = require('./knex');

module.exports = function(){
  // return knex('books')
  //   .then(function(books){
  //   return knex('books_authors')
  //     .then(function(booksAndAuthors){
  //     return {
  //       books: books,
  //       booksAndAuthors: booksAndAuthors
  //     };
  //   });
  // });

  return knex('books');
}

// knex.table('users').innerJoin('accounts', 'users.id', '=', 'accounts.user_id')


// knex.from('users').innerJoin('accounts', 'users.id', 'accounts.user_id')
// Outputs:
// select * from `users` inner join `accounts` on `users`.`id` = `accounts`.`user_id`
