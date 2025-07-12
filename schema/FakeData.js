const UserList = [
    {
        id: 1,
        name: "John Doe",
        username: "johndoe",
        age: 20,
        nationality: "BURUNDI",
        friends: [
            {
                id: 2,
                name: "Jane Smith",
                username: "janesmith",
                age: 25,
            },
            {
                id: 3,
                name: "Alice Johnson",
                username: "alicejohnson",
                age: 30,
            },
        ]
    },
    {   id: 2,                          
        name: "Jane Smith",
        username: "janesmith",
        age: 25,
        nationality: "UGANDA",
    },
    {
        id: 3,
        name: "Alice Johnson",
        username: "alicejohnson",
        age: 30,
        nationality: "TANZANIA",
    },  
    {
        id: 4,
        name: "Bob Brown",
        username: "bobbrown",
        age: 22,
        nationality: "RWANDA",

    },
    {
        id: 5,
        name: "Marcel Dikembe",
        username: "Marcos",
        age: 28,
        nationality: "KENYA",
    },
]

const MovieList = [
    {
        id: 1,
        name: "Inception",
        yearofRelease: 2010,
        genre: "Science Fiction",
        isInTheaters: false,
    },
    {
        id: 2,
        name: "The Matrix",
        yearofRelease: 1999,
        genre: "Action",
        isInTheaters: false,
    },
    {
        id: 3,
        name: "Interstellar",
        yearofRelease: 2014,
        genre: "Science Fiction",
        isInTheaters: false,
    },
    {
        id: 4,
        name: "Parasite",
        yearofRelease: 2019,
        genre: "Thriller",
        isInTheaters: false,
    },
    {
        id: 5,
        name: "The Shawshank Redemption",
        yearofRelease: 1994,
        genre: "Drama",
        isInTheaters: false,
    },
];


// This file contains fake data for users and movies.
// The UserList array contains user objects with properties like id, name, username, age,
export { UserList, MovieList };