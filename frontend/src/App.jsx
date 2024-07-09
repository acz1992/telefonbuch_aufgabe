import { Container, Box } from "@mui/material";
import Title from "./components/Title";
import SearchBar from "./components/SearchBar";
import ContactsGrid from "./components/ContactsGrid";
import { useState } from "react";

import { useQuery } from "@apollo/client";
import { SEARCH_PHONEBOOK } from "./graphql/queries";
import useDebounce from "./hooks/useDebounce";

function App() {
	const [search, setSearch] = useState("");
	const debouncedSearchTerm = useDebounce(search, 250);

	// Executed Query fetches relevant data based on debounced search term
	const { loading, error, data } = useQuery(SEARCH_PHONEBOOK, {
		variables: { name: debouncedSearchTerm },
	});

	// If data exists, fetch data
	const contacts = data ? data.searchPhonebook : [];

	return (
		<Container>
			<Box>
				<Title />
				<Box display="flex" justifyContent="center">
					<SearchBar
						value={search}
						onChange={(e) => {
							setSearch(e.target.value);
						}}
					/>
				</Box>

				<ContactsGrid contacts={contacts} />
			</Box>
		</Container>
	);
}

export default App;
