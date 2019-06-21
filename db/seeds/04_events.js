exports.seed = knex => {
    // Deletes ALL existing entries
    return knex('gymEvents').del()
        .then(function () {
            // Inserts seed entries
            return knex('gymEvents').insert([
                {title:'Spin Class', eventInfo:'6AM - Get ready to not be able to walk for 3 days after you pretend to ride a bike while you listen to loud music and an instructor yells at you!', date:'2019-06-21', intensity:8, gymId:1},
                {title:'Lifting with Legends', eventInfo:'3PM - Learn from the best how to lift!  Proper form and instructions on how to maximize your workouts.', date:'2019-06-22', intensity:5, gymId:1},

            ]);
        });
};
