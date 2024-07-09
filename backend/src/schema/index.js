const { gql } = require("apollo-server");

const typeDefs = gql`
	type PhonebookEntry {
		name: String!
		phone: String!
	}
	type Query {
		searchPhonebook(name: String!): [PhonebookEntry]
	}
`;

module.exports = typeDefs;
