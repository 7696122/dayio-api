"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var altair_express_middleware_1 = require("altair-express-middleware");
var apollo_server_express_1 = require("apollo-server-express");
var schema_1 = __importDefault(require("./schemas/schema"));
var server = new apollo_server_express_1.ApolloServer({
    schema: schema_1.default,
});
var port = process.env.PORT || 4000;
var app = express_1.default();
server.applyMiddleware({ app: app });
app.listen(port, function () {
    console.log("\uD83D\uDE80  Server ready at http://localhost:" + port + server.graphqlPath);
});
app.use("/altair", altair_express_middleware_1.altairExpress({
    endpointURL: server.graphqlPath,
}));
