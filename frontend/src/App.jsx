import "./styles/App.css";
import { Container, Box } from "@mui/material";
import Title from "./components/Title";
import SearchBar from "./components/SearchBar";
import ContactList from "./components/ContactList";
import { useState } from "react";

function App() {
	const [search, setSearch] = useState("");
	return (
		<Container>
			<Box>
				<Title />
				<Box>
					<SearchBar
						value={search}
						onChange={(e) => {
							setSearch(e.target.value);
						}}
					/>
				</Box>

				<ContactList />
			</Box>
		</Container>
	);
}

export default App;
