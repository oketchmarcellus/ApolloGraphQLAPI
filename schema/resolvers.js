import {UserList, MovieList} from './FakeData.js';//import data into resolvers
import finder from 'lodash';//import arraymanager from lodash to use its find function
// lodash is a utility library that provides many useful functions for working with arrays, objects, and other data types.
// In this case, we are using the find function to search for a user by their id  

const { find } = finder;//Destructure the find function from lodash
//create a resolver for the Query type in GraphQL schema
//The resolvers object contains functions that resolve the data for each field in the schema
const resolvers = {
  Query: {
    //user resolvers
    //These functions will be called when the corresponding fields are queried in a GraphQL request 
    users() {
      return UserList;
    },
    user(parent, args) {
      const { id } = args;//Correctly destructure args
      const user = find(UserList, { id: Number(id) });
      return user;
    },
    //movie resolvers
    //These functions will be called when the corresponding fields are queried in a GraphQL request
    movies() {
      return MovieList;
    },
    movie (parent, args) {
        const { name } = args; // Correctly destructure args
        const movie = find(MovieList, { name });
        return movie;
      },
    },
};

export default resolvers;