exports.seed = knex => {
    // Deletes ALL existing entries
    return knex('users').del()
        .then(function () {
            // Inserts seed entries
            return knex('users').insert([
                {name: 'Krystine', email: 'kjannenga@gmail.com', bio:'Hi I like to work out', imgUrl: 'https://images.unsplash.com/photo-1512005286309-e5b890ca36b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80', age: 23, gymId: 1, password: 'password', isAdmin: 1},
                {name: 'Chris', email: 'chris@gmail.com', bio:'Hi I like to work out', imgUrl: 'https://images.unsplash.com/photo-1522098427438-f10a7755aa86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80', age: 25, gymId: 1, password: 'password', isAdmin: 0},
                {name: 'Sage', email: 'sage@gmail.com', bio:'Hi I like to work out', imgUrl: 'https://images.unsplash.com/flagged/photo-1551887373-6edba6dacbb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80', age: 2, gymId: 2, password: 'password', isAdmin: 1},
                {name: 'Bella', email: 'bella@gmail.com', bio:'Hi I like to work out', imgUrl: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80', age: 2, gymId: 2, password: 'password', isAdmin: 0},
                {name: 'Mom', email: 'mom@gmail.com', bio:'Hi I like to work out', imgUrl: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80', age: 30, gymId: 3, password: 'password', isAdmin: 1},
                {name: 'Dad', email: 'dad@gmail.com', bio:'Hi I like to work out', imgUrl: 'https://images.unsplash.com/photo-1545346315-f4c47e3e1b55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80', age: 50, gymId: 3, password: 'password', isAdmin: 0},
                {name: 'Babcia', email: 'babcia@gmail.com', bio:'Hi I like to work out', imgUrl: 'https://images.unsplash.com/photo-1547852356-b20668106c51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80', age: 30, gymId: 4, password: 'password', isAdmin: 1},
                {name: 'Dziadzio', email: 'dziadzio@gmail.com', bio:'Hi I like to work out', imgUrl: 'https://images.unsplash.com/photo-1530822847156-5df684ec5ee1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80', age: 50, gymId: 4, password: 'password', isAdmin: 0},
                {name: 'Rose', email: 'rose@gmail.com', bio:'Hi I like to work out', imgUrl: 'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1526&q=80', age: 21, gymId: 5, password: 'password', isAdmin: 1},
                {name: 'Makayla', email: 'makayla@gmail.com', bio:'Hi I like to work out', imgUrl: 'https://images.unsplash.com/photo-1531260490936-5be73c4f8fc0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=989&q=80', age: 22, gymId: 5, password: 'password', isAdmin: 0},
                {name: 'Steve', email: 'steve@gmail.com', bio:'Hi I like to work out', imgUrl: 'https://images.unsplash.com/photo-1486218119243-13883505764c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1952&q=80', age: 45, gymId: 6, password: 'password', isAdmin: 1},
                {name: 'Michelle', email: 'michelle@gmail.com', bio:'Hi I like to work out', imgUrl: 'https://images.unsplash.com/photo-1528656707959-c9dc050e4841?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80', age: 50, gymId: 6, password: 'password', isAdmin: 0},
                {name: 'Ziggy', email: 'ziggy@gmail.com', bio:'Hi I like to work out', imgUrl: 'https://images.unsplash.com/photo-1519057957471-ad0ce6bbeabe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80', age: 19, gymId: 7, password: 'password', isAdmin: 1},
                {name: 'Kristian', email: 'kristian@gmail.com', bio:'Hi I like to work out', imgUrl: 'https://images.unsplash.com/photo-1546728146-3f1e78efc23e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80', age: 17, gymId: 7, password: 'password', isAdmin: 0},
                {name: 'Sara', email: 'sara@gmail.com', bio:'Hi I like to work out', imgUrl: 'https://images.unsplash.com/photo-1458312732998-763933ed4896?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80', age: 16, gymId: 8, password: 'password', isAdmin: 1},
                {name: 'Halle', email: 'halle@gmail.com', bio:'Hi I like to work out', imgUrl: 'https://images.unsplash.com/photo-1554245064-3ab88761ac5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80', age: 8, gymId: 8, password: 'password', isAdmin: 0},
            ]);
        });
};

