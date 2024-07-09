const phoneData = require("../../data/telefonbuch.json");

const resolvers = {
	Query: {
		searchPhonebook: ({ name }) => {
			return phoneData.filter((entry) => entry.name.includes(name));
		},
	},
};

module.exports = resolvers;
