exports.up = knex => {
    return knex.schema.createTable('gymEventComments', (table) => {
        table.increments();
        table.string('comment');
        table.integer('eventId')
            .references('id')
            .inTable('gymEvents')
            .onDelete('CASCADE')
            .index();
        table.integer('userId')
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .index();
    })
};

exports.down = knex => {
    return knex.schema.dropTable('gymEventComments');
};