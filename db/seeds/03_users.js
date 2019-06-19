exports.seed = knex => {
    // Deletes ALL existing entries
    return knex('users').del()
        .then(function () {
            // Inserts seed entries
            return knex('users').insert([
                {name: 'Krystine', email: 'kjannenga@gmail.com', bio:'Hi I like to work out', imgUrl: '', age: 23, gymId: 1, password: 'password', isAdmin: 1},
                {name: 'Chris', email: 'chris@gmail.com', bio:'Hi I like to work out', imgUrl: '', age: 25, gymId: 1, password: 'password', isAdmin: 0},
                {name: 'Sage', email: 'sage@gmail.com', bio:'Hi I like to work out', imgUrl: '', age: 2, gymId: 2, password: 'password', isAdmin: 1},
                {name: 'Bella', email: 'bella@gmail.com', bio:'Hi I like to work out', imgUrl: '', age: 2, gymId: 2, password: 'password', isAdmin: 0},
                {name: 'Mom', email: 'mom@gmail.com', bio:'Hi I like to work out', imgUrl: '', age: 30, gymId: 3, password: 'password', isAdmin: 1},
                {name: 'Dad', email: 'dad@gmail.com', bio:'Hi I like to work out', imgUrl: '', age: 50, gymId: 3, password: 'password', isAdmin: 0},
                {name: 'Babcia', email: 'babcia@gmail.com', bio:'Hi I like to work out', imgUrl: '', age: 30, gymId: 4, password: 'password', isAdmin: 1},
                {name: 'Dziadzio', email: 'dziadzio@gmail.com', bio:'Hi I like to work out', imgUrl: '', age: 50, gymId: 4, password: 'password', isAdmin: 0},
                {name: 'Rose', email: 'rose@gmail.com', bio:'Hi I like to work out', imgUrl: '', age: 21, gymId: 5, password: 'password', isAdmin: 1},
                {name: 'Makayla', email: 'makayla@gmail.com', bio:'Hi I like to work out', imgUrl: '', age: 22, gymId: 5, password: 'password', isAdmin: 0},
                {name: 'Steve', email: 'steve@gmail.com', bio:'Hi I like to work out', imgUrl: '', age: 45, gymId: 6, password: 'password', isAdmin: 1},
                {name: 'Michelle', email: 'michelle@gmail.com', bio:'Hi I like to work out', imgUrl: '', age: 50, gymId: 6, password: 'password', isAdmin: 0},
                {name: 'Ziggy', email: 'ziggy@gmail.com', bio:'Hi I like to work out', imgUrl: '', age: 19, gymId: 7, password: 'password', isAdmin: 1},
                {name: 'Kristian', email: 'kristian@gmail.com', bio:'Hi I like to work out', imgUrl: '', age: 17, gymId: 7, password: 'password', isAdmin: 0},
                {name: 'Sara', email: 'sara@gmail.com', bio:'Hi I like to work out', imgUrl: '', age: 16, gymId: 8, password: 'password', isAdmin: 1},
                {name: 'Halle', email: 'halle@gmail.com', bio:'Hi I like to work out', imgUrl: '', age: 8, gymId: 8, password: 'password', isAdmin: 0},
            ]);
        });
};

