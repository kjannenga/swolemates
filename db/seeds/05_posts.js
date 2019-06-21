exports.seed = knex => {
    // Deletes ALL existing entries
    return knex('gymPosts').del()
        .then(function () {
            // Inserts seed entries
            return knex('gymPosts').insert([
                {title:'Running Buddy', post:'Looking for someone to go running with in the evenings.  We can meet at the gym and run at the park or on the treadmills!', gymId:1, userId:1},
                {title:'Pre Workout', post:'What kind of pre-workout do you take?  Looking for something that doesnt make me jumpy', gymId:1, userId:2}
            ]);
        });
};
