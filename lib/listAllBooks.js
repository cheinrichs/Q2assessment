var knex = require('./knex');

module.exports = function(){
  return knex('books_authors').then(function(booksAndAuthors){
    return knex()
  });
}


// knex.from('users').innerJoin('accounts', 'users.id', 'accounts.user_id')
//
//
// Outputs:
// select * from `users` inner join `accounts` on `users`.`id` = `accounts`.`user_id`
