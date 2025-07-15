import pkg from 'lodash'; // Import the entire lodash package
const { find } = pkg; // Destructure the find function from lodash
import { UserList, MovieList } from './FakeData.js'; // Import data into resolvers

// Create a resolver for the Query type in GraphQL schema
const resolvers = {
  Query: {
    // User resolvers
    users() {
      return UserList;
    },
    user(parent, args) {
      const { id } = args; // Correctly destructure args
      const user = find(UserList, { id: Number(id) });
      return user || null; // Return null if user not found
    },
    
    // Movie resolvers
    movies() {
      return MovieList;
    },
    movie(parent, args) {
      const { name } = args; // Correctly destructure args
      const movie = find(MovieList, { name });
      return movie || null; // Return null if movie not found
    },
  },
  
  User: {
    favouriteMovies(parent) {
      // Return the movies that are in the user's favouriteMovies array
      //return parent.favouriteMovies.map(movieId => find(MovieList, { id: movieId })) || [];
    }
  },

  Mutation: {
    // CreateUser mutation resolver
    createUser(parent, args) {
      const { input } = args; // Correctly destructure input
      const newUser = {
        id: UserList.length + 1,
        name: input.name, // Ensure this is set correctly
        username: input.username,
        age: input.age,
        nationality: input.nationality,
        favouriteMovies: [] // Initialize favouriteMovies as an empty array
      };
      UserList.push(newUser);
      return newUser;
    },

    // UpdateUser mutation resolver
    updateUser(parent, args) {
      const { input } = args; // Correctly destructure input
      const updateUserDetails = find(UserList, { id: Number(input.id) });
      if (updateUserDetails) {
        // updateUserDetails.username = input.username; // Update the username
        // updateUserDetails.name = input.name; // Update the name
        updateUserDetails.age = input.age; // Update the age if provided
        // updateUserDetails.nationality = input.nationality; // Update nationality
        return updateUserDetails;
      }
      throw new Error('User not found');
    },
    deleteUser(parent, args) {
      const { id } = args; // Correctly destructure args
      const userIndex = UserList.findIndex(user => user.id === Number(id));
      if (userIndex !== -1) {
        const deletedUser = UserList.splice(userIndex, 1)[0]; // Remove the user from the list
        return deletedUser; // Return the deleted user
      }
      throw new Error('User not found');
    }
  }
};

export default resolvers;