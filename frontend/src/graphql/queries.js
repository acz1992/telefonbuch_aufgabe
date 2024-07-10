import { gql } from "@apollo/client";

export const SEARCH_PHONEBOOK = gql`
	query SearchPhonebook($name: String, $pageSize: Int!, $pageIndex: Int!) {
		searchPhonebook(
			name: $name
			pageSize: $pageSize
			pageIndex: $pageIndex
		) {
			totalCount
			contacts {
				name
				phone
			}
		}
	}
`;
