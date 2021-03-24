import { ApolloServer } from "apollo-server-express";
import schema from "./schemas/schema";

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  schema,
  playground: true,
  introspection: true,
});

export default server;
