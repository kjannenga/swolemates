exports.up = knex => {
    return knex.schema.createTable('gymPosts', (table) => {
        table.increments();
        table.string('title');
        table.string('post');
        table.integer('gymId')
            .references('id')
            .inTable('gyms')
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
    return knex.schema.dropTable('gymPosts');
};