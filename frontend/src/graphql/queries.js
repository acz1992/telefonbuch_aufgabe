import { gql } from "@apollo/client";

export const SEARCH_PHONEBOOK = gql`
	query SearchPhonebook($name: String!) {
		searchPhonebook(name: $name) {
			name
			phone
		}
	}
`;
