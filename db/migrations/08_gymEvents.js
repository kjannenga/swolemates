exports.up = knex => {
    return knex.schema.createTable('gymEvents', (table) => {
        table.increments();
        table.string('title');
        table.string('eventInfo');
        table.string('date');
        table.integer('gymId')
            .references('id')
            .inTable('gyms')
            .onDelete('CASCADE')
            .index();
    })
};

exports.down = knex => {
    return knex.schema.dropTable('gymEvents');
};