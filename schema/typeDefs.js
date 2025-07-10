const typeDefs = `#graphql 
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User]
  }
  
  type Query {
    users: [User!]!
    user(id: ID!): User!
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
    SWITZERLAND
    BELGIUM
    AUSTRIA
    DENMARK
    FINLAND
    IRELAND
    PORTUGAL
    GREECE
    POLAND
    CZECH_REPUBLIC
    HUNGARY
    SLOVAKIA
    BULGARIA
    ROMANIA
    NORDIC_COUNTRIES
    NORDIC_COUNTRIES_EXCEPT_FINLAND
    CROATIA
    SLOVENIA
    LITHUANIA
    SINGAPORE
    LATVIA
    ESTONIA
    ICELAND
    LUXEMBOURG
    NORWAY
    CANADA
    USA
    MEXICO
    UK
    FRANCE
    GERMANY
    ITALY
    SPAIN
    JAPAN
    CHINA
    INDIA
    BRAZIL
    AUSTRALIA
    RUSSIA
    SOUTH_AFRICA
    ARGENTINA
    SOUTH_KOREA
    NETHERLANDS
    SWEDEN
    TURKEY
  }
`;

export default typeDefs;