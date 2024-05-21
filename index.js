const { ApolloServer, gql } = require("apollo-server");
const { typeDef } = require("./schema");
const { db } = require("./data");
const { Mutation } = require("./resolvers/Mutation");
const { Query } = require("./resolvers/Query");
const { Course } = require("./resolvers/Course");
const { Genre } = require("./resolvers/Genre");
const { typeDefs } = require("./schema");

// Create Apollo Server instance
const server = new ApolloServer({
  typeDefs,
  resolvers: { Query, Mutation, Course, Genre },
  context: { db },
});

// Start the server
server.listen().then(({ url }) => {
  console.log(`🚀 Server is running at ${url}`);
});
