const typeDefs = `#graphql 
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User]
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
  }
`;

export default typeDefs;