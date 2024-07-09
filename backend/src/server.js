const express = require("express");
require("dotenv").config();
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const app = express();
// Pass imported schema to new ApolloServer instance
const server = new ApolloServer({ typeDefs, resolvers });
server.start();
server.applyMiddleware({ app });

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
	console.log(
		`Server ready at http://localhost:${PORT}${server.graphqlPath}`
	);
});
