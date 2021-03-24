import express from "express";
import { altairExpress } from "altair-express-middleware";
import server from "./server";

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
