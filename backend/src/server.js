const express = require("express");
require("dotenv").config();
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");

const app = express();

// Pass imported schema to new ApolloServer instance
const server = new ApolloServer({ typeDefs });
const port = 3000;

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
