exports.seed = knex => {
    // Deletes ALL existing entries
    return knex('gyms').del()
        .then(function () {
            // Inserts seed entries
            return knex('gyms').insert([
                {gymName: 'EOS Finess - Gilbert'},
                {gymName: 'Planet Fitness - Gilbert'},
                {gymName: '24 Hour Fitness - Mesa'},
                {gymName: 'Crunch - Mesa '},
                {gymName: 'EOS Fitness - Scottsdale'},
                {gymName: 'Planet Fitness - Scottsdale'},
                {gymName: '24 Hour Fitness - Phoenix'},
                {gymName: 'Crunch - Phoenix'},
            ]);
        });
};

