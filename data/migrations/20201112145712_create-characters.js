
exports.up = function(knex) {
  return knex.schema.createTable("characters", tbl => {
      tbl.increments();
      tbl.string("name",128).notNullable();
      tbl.string("race",128).notNullable();
      tbl.string("class",128).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("characters");
};
