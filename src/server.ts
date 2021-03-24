import express from "express";
import { altairExpress } from "altair-express-middleware";
import { ApolloServer } from "apollo-server-express";
import schema from "./schemas/schema";

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  schema,
  playground: true,
  introspection: true,
});

const port = process.env.PORT || 4000;
const app = express();
server.applyMiddleware({ app });

// The `listen` method launches a web server.
app.listen(port, () => {
  console.log(
    `🚀  Server ready at http://localhost:${port}${server.graphqlPath}`
  );
});

app.use(
  "/altair",
  altairExpress({
    endpointURL: server.graphqlPath,
  })
);
