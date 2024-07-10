import { useQuery } from "@apollo/client";
import { SEARCH_PHONEBOOK } from "../graphql/queries";

function usePhonebookSearch(searchTerm, page, pageSize) {
	const { loading, error, data } = useQuery(SEARCH_PHONEBOOK, {
		variables: {
			name: searchTerm,
			pageSize,
			pageIndex: page - 1,
		},
	});

	return { loading, error, data };
}

export default usePhonebookSearch;
