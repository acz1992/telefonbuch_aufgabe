const phoneData = require("../../data/telefonbuch.json");

const resolvers = {
	Query: {
		searchPhonebook: (_, { name, pageSize, pageIndex }) => {
			// Filter data based on search value
			const filteredData = name
				? phoneData.filter((entry) =>
						entry.name.toLowerCase().includes(name.toLowerCase())
				  )
				: phoneData;

			// Calculate start and end indices for pagination
			const start = pageIndex * pageSize;
			const end = start + pageSize;

			// Slice data to get only relevant page
			const paginatedData = filteredData.slice(start, end);

			return {
				totalCount: filteredData.length,
				contacts: paginatedData,
			};
		},
	},
};

module.exports = resolvers;
