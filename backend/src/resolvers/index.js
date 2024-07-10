// Directly loads JSON data making it immediately useful
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

			// Sort filtered data alphabetically
			filteredData.sort((a, b) =>
				a.name.toLowerCase().localeCompare(b.name.toLowerCase())
			);

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
