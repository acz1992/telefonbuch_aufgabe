import { useState } from "react";
import {
	Container,
	Box,
	Pagination,
	CircularProgress,
	Typography,
	Grid,
} from "@mui/material";
import Title from "./components/Title";
import SearchBar from "./components/SearchBar";
import ContactsGrid from "./components/ContactsGrid";
import DarkModeToggle from "./components/DarkModeToggle";
import useDebounce from "./hooks/useDebounce";
import usePhonebookSearch from "./hooks/usePhonebookSearch";

function App() {
	// State for search input and current page
	const [search, setSearch] = useState("");
	const debouncedSearchTerm = useDebounce(search, 250);
	const [page, setPage] = useState(1);
	const pageSize = 12;

	const { loading, error, data } = usePhonebookSearch(
		debouncedSearchTerm,
		page,
		pageSize
	);

	// Calculate total contacts and pages for pagination
	const totalContacts = data ? data.searchPhonebook.totalCount : 0;
	const contacts = data ? data.searchPhonebook.contacts : [];
	const totalPages = Math.ceil(totalContacts / pageSize);

	// Handle page change
	const handlePageChange = (event, value) => {
		setPage(value);
	};

	const noContactsMessage =
		!loading && !error && totalContacts === 0 && search !== "";

	return (
		<Container>
			<Box>
				<Title />
				<Box display="flex" justifyContent="center">
					<DarkModeToggle />
				</Box>
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
						height="20vh"
					>
						<CircularProgress />
					</Box>
				)}

				{error && (
					<Box
						display="flex"
						justifyContent="center"
						alignItems="center"
						height="20vh"
					>
						<Typography color="error">
							Error: {error.message}
						</Typography>
					</Box>
				)}

				{noContactsMessage && (
					<Box
						display="flex"
						justifyContent="center"
						alignItems="center"
						height="20vh"
					>
						<Typography color="error" variant="h5">
							No contacts with that name
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
