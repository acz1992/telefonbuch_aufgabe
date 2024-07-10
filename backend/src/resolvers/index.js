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
			filteredData.sort((a, b) => {
				const nameA = a.name.toLowerCase();
				const nameB = b.name.toLowerCase();
				if (nameA < nameB) return -1;
				if (nameA > nameB) return 0;
			});

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
