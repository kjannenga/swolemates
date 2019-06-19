exports.up = knex => {
    return knex.schema.createTable('gymComments', (table) => {
        table.increments();
        table.string('comment');
        table.integer('postId')
            .references('id')
            .inTable('gymPosts')
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
    return knex.schema.dropTable('gymComments');
};