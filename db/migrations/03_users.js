exports.up = knex => {
    return knex.schema.createTable('users', (table) => {
        table.increments();
        table.string('name');
        table.string('email').unique;
        table.text('bio');
        table.string('imgUrl');
        table.integer('age');
        table.integer('gymId')
            .references('id')
            .inTable('gyms')
            .onDelete('CASCADE')
            .index();
        table.string('password');
        table.integer('isAdmin');
    })
};

exports.down = knex => {
    return knex.schema.dropTable('users');
};