import { ApolloServer, gql } from "apollo-server";
import { createTestClient } from "apollo-server-testing";
import typeDefs from "./schemas/typeDefs";
import resolvers from "./schemas/resolvers";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { query, mutate } = createTestClient(server);

export { query, mutate };
