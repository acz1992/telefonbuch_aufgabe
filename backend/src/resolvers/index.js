const phoneData = require("../../data/telefonbuch.json");

const resolvers = {
	Query: {
		searchPhonebook: (_, { name, pageSize, pageIndex }) => {
			const filteredData = name
				? phoneData.filter((entry) =>
						entry.name.toLowerCase().includes(name.toLowerCase())
				  )
				: phoneData;

			const start = pageIndex * pageSize;
			const end = start + pageSize;
			const paginatedData = filteredData.slice(start, end);

			return {
				totalCount: filteredData.length,
				contacts: paginatedData,
			};
		},
	},
};

module.exports = resolvers;
