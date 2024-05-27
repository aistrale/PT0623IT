/* Relazioni MongoDB */
// One to One | One to Many | Many to Many

/* Referencing - Embedding */

// User
let user = [
    { 
        _id: 1,
        name: 'John',
        lastname: 'Smith',
        age: 36,
        /* address: {
            city: 'Paris',
            state: 'France'
        }, */
        address_id: 1,
        posts: [ 1, 2]
    },
    { 
        _id: 2,
        name: 'Mario',
        lastname: 'Rossi',
        age: 41,
        /* address: {
            city: 'Paris',
            state: 'France'
        }, */
        address_id: 2,
        posts: [ ]
    }
]


// Address
let address = [
    {
        _id: 1,
        city: 'Paris',
        state: 'France'
    },
    {
        _id: 2,
        city: 'Roma',
        state: 'Italy'
    }
]

// Posts
let posts = [
    {
        _id: 1,
        title: 'First Post',
        body: 'Lorem ipsum dolor sit amet',
        date: '25-05-2024',
        comments: [{
            comment: 'Second Post',
            date: '26-05-2024',
            author: 'John Smith'
        }]
    },
    {
        _id: 2,
        title: 'Second Post',
        body: 'Lorem sit amet',
        date: '27-05-2024',
        comments: []
    }
]