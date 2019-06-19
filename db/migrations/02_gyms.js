exports.up = knex => {
    return knex.schema.createTable('gyms', (table) => {
        table.increments();
        table.string('gymName');
    })
};

exports.down = knex => {
    return knex.schema.dropTable('gyms');
};