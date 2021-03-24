import { ApolloServer, gql } from "apollo-server";
import { createTestClient } from "apollo-server-testing";
import schema from "./schemas/schema";

const server = new ApolloServer({
  schema,
});

const { query, mutate } = createTestClient(server);

export { query, mutate };
