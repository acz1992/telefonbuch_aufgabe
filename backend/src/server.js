const express = require("express");
require("dotenv").config();
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

async function startServer() {
	const app = express();
	// Pass imported schema & resolvers to new ApolloServer instance
	const server = new ApolloServer({ typeDefs, resolvers });

	// Apply Middleware
	await server.start();
	server.applyMiddleware({ app });

	// Start the server
	const PORT = process.env.PORT || 4000;
	app.listen(PORT, () => {
		console.log(
			`Server ready at http://localhost:${PORT}${server.graphqlPath}`
		);
	});
}

startServer();
