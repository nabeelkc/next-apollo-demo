/**
 * Tried this way to make fake data generator but did not work as expected.
 *
 */
const { ApolloServer, MockList } = require("@apollo/server");
const casual = require("casual");

const typeDefs = `
    type People {
        id: ID!
        name: String!
        address: String!
        email: String!
    }
    type Query {
        allPeople: [People!]!
    }
`;

const mocks = {
  People: () => ({
    name: () => casual.full_name,
    address: () => casual.address,
    email: () => casual.email,
  }),
  Query: () => ({
    allPeople: () => new MockList(2000)
  }),
  ID: () => casual.uuid,
};

const resolvers = {
  Query: {
    allCats: () => [
      {
        id: 1,
        name: "Meatball"
      }
    ]
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  mocks,
  // mockEntireSchema: false
});

server.listen().then(({ url }) => console.log(`Server running on port ${url}`));
