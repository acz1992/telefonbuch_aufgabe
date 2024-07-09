import "./styles/App.css";
import { Container, Box } from "@mui/material";
import Title from "./components/Title";
import SearchBar from "./components/SearchBar";
import ContactsGrid from "./components/ContactsGrid";
import { useState } from "react";
import { Person } from "@mui/icons-material";

import { useQuery } from "@apollo/client";
import { SEARCH_PHONEBOOK } from "./graphql/queries";

function App() {
	const [search, setSearch] = useState("");

	const { loading, error, data } = useQuery(SEARCH_PHONEBOOK, {
		variables: { name: search },
	});

	// Search Functionality Logic
	const filteredContacts = contacts.filter((contact) =>
		contact.name.toLowerCase().includes(search.toLowerCase())
	);

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

				<ContactsGrid contacts={filteredContacts} />
			</Box>
		</Container>
	);
}

export default App;
