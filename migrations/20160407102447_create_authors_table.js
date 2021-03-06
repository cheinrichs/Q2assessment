
exports.up = function(knex, Promise) {
  return knex.schema.createTable('authors', function(table){
    table.increments();
    table.string('first');
    table.string('last');
    table.string('bio', 1000);
    table.string('portrait_url');
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('authors');
};
