import "./styles/App.css";
import { Container, Box } from "@mui/material";
import Title from "./components/Title";
import SearchBar from "./components/SearchBar";
import ContactList from "./components/ContactList";

function App() {
	return (
		<Container>
			<Box>
				<Title />
				<Box>
					<SearchBar />
				</Box>

				<ContactList />
			</Box>
		</Container>
	);
}

export default App;
