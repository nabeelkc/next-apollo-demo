const graphql = require("graphql");
const casual = require("casual");
const totalCountToFetch = 2000;
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql;

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLInt },
    fullName: { type: GraphQLString },
    address: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});

const fakeData = () => {
  let results = [];
  [...new Array(totalCountToFetch)].forEach((element) => {
    results.push({
      id: casual.uuid,
      fullName: casual.full_name,
      address: casual.address,
      email: casual.email,
      phone: casual.phone,
    })
  });
  return results;
}

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getPeopleData: {
      type: new GraphQLList(UserType),
      args: { id: { type: GraphQLInt } },
      resolve(parent, args) {
        return fakeData()
      },
    },
  },
});

module.exports = new GraphQLSchema({ query: RootQuery });
