const { gql } = require("apollo-server");

const typeDefs = gql`
	type PhonebookEntry {
		name: String!
		phone: String!
	}

	type PhonebookConnection {
		totalCount: Int!
		contacts: [PhonebookEntry!]!
	}

	type Query {
		searchPhonebook(
			name: String
			pageSize: Int!
			pageIndex: Int!
		): PhonebookConnection!
	}
`;

module.exports = typeDefs;
