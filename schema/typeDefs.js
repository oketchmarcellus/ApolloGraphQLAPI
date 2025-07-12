const typeDefs = `#graphql 
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality
    friends: [User]
    favouriteMovies: [Movie]
  }
  
  type Movie {
    id: ID!
    name: String!
    yearofRelease: Int!
    genre: String!
    isInTheaters: Boolean!
  }
  type Query {
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie!]!
    movie(name: String!): Movie!
  }

  input createUser{
    name: String!
    username: String!
    age: Int
    nationality: Nationality
  }
  input createMovie {
    name: String!
    yearofRelease: Int!
    genre: String!
    isInTheaters: Boolean!
  }

  type Mutation {
    createUser(input: createUser): User!
    createMovie(input : createMovie): Movie!
  }
  enum Nationality {
    KENYA
    NIGERIA
    GHANA
    ETHIOPIA
    TANZANIA
    UGANDA
    ZAMBIA
    ZIMBABWE
    RWANDA
    MALAWI
    CONGO
    MOZAMBIQUE
    ANGOLA
    CAMEROON
    SENEGAL
    IVORY_COAST
    TUNISIA
    ALGERIA
    EGYPT
    MOROCCO
    LIBYA
    SOUTH_SUDAN
    SOMALIA
    BURUNDI
  }
`;

export default typeDefs;