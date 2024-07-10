import {
	Container,
	Box,
	Pagination,
	CircularProgress,
	Typography,
} from "@mui/material";
import Title from "./components/Title";
import SearchBar from "./components/SearchBar";
import ContactsGrid from "./components/ContactsGrid";
import { useState } from "react";

import { useQuery } from "@apollo/client";
import { SEARCH_PHONEBOOK } from "./graphql/queries";
import useDebounce from "./hooks/useDebounce";

function App() {
	// State for search input and current page
	const [search, setSearch] = useState("");
	const debouncedSearchTerm = useDebounce(search, 250);
	const [page, setPage] = useState(1);
	const pageSize = 12;

	// Executed Query to fetch paginated contacts based on search value
	const { loading, error, data } = useQuery(SEARCH_PHONEBOOK, {
		variables: { name: debouncedSearchTerm, pageSize, pageIndex: page - 1 },
	});

	// Calculate total contacts and pages for pagination
	const totalContacts = data ? data.searchPhonebook.totalCount : 0;
	const contacts = data ? data.searchPhonebook.contacts : [];
	const totalPages = Math.ceil(totalContacts / pageSize);

	// Handle page change
	const handlePageChange = (event, value) => {
		setPage(value);
	};

	return (
		<Container>
			<Box>
				<Title />
				<Box display="flex" justifyContent="center">
					<SearchBar
						value={search}
						onChange={(e) => {
							setSearch(e.target.value);
							setPage(1);
						}}
					/>
				</Box>

				{loading && (
					<Box
						display="flex"
						justifyContent="center"
						alignItems="center"
						height="40vh"
					>
						<CircularProgress />
					</Box>
				)}

				{error && (
					<Box display="flex" justifyContent="center" my={2}>
						<Typography color="error">
							Error: {error.message}
						</Typography>
					</Box>
				)}

				<ContactsGrid contacts={contacts} />
				{totalPages > 1 && (
					<Box my={2} display="flex" justifyContent="center">
						<Pagination
							count={totalPages}
							page={page}
							onChange={handlePageChange}
						/>
					</Box>
				)}
			</Box>
		</Container>
	);
}

export default App;
