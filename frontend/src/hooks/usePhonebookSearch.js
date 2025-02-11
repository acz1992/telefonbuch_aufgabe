import { useQuery } from "@apollo/client";
import { SEARCH_PHONEBOOK } from "../graphql/queries";

// Execute query to fetch paginated contacts based on search value
function usePhonebookSearch(searchTerm, page, pageSize) {
	const { loading, error, data } = useQuery(SEARCH_PHONEBOOK, {
		variables: {
			name: searchTerm, // Pass search value to GraphQl query
			pageSize, // Number of results per page
			pageIndex: page - 1, // Zero-based page indexing
		},
	});

	return { loading, error, data };
}

export default usePhonebookSearch;
