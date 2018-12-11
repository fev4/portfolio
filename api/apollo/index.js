const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => "Hello world from ApolloServer on Now 2.0!"
  }
};

const server = new ApolloServer({ typeDefs, resolvers, introspection: true, playground: true });

const app = express();
server.applyMiddleware({ app, path: '/' });
app.get("/", (req, res) => {
  res.redirect("/");
});

const port = 4000;

app.listen({ port }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
  )
);