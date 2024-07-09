const phoneData = require("../../data/telefonbuch.json");

const resolvers = {
	Query: {
		searchPhonebook: (_, { name }) => {
			return phoneData.filter((entry) =>
				entry.name.toLowerCase().includes(name.toLowerCase())
			);
		},
	},
};

module.exports = resolvers;
