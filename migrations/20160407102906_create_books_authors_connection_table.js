
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books_authors', function(table){
    table.increments();
    table.integer('book_id').notNullable().references('id').inTable('books').onDelete('CASCADE');
    table.integer('author_id').notNullable().references('id').inTable('authors').onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books_authors');
};
