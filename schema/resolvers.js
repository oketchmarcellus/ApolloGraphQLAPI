import FakeData from './FakeData.js';

const resolvers = {
  Query: { 
    users() {
      return FakeData;
    }, 
  },
};

export default resolvers;