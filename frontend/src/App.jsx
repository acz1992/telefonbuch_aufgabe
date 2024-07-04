import "./styles/App.css";
import { Container, Box } from "@mui/material";
import Title from "./components/Title";
import SearchBar from "./components/SearchBar";
import ContactsGrid from "./components/ContactsGrid";
import { useState } from "react";
import { Person } from "@mui/icons-material";

function App() {
	const [search, setSearch] = useState("");
	const [contacts] = useState([
		{ icon: <Person />, name: "John Doe", phone: "123-456-7890" },
		{ icon: <Person />, name: "Jane Smith", phone: "098-765-4321" },
		{ icon: <Person />, name: "Alice Johnson", phone: "234-567-8901" },
		{ icon: <Person />, name: "Bob Brown", phone: "345-678-9012" },
		{ icon: <Person />, name: "Carol White", phone: "456-789-0123" },
		{ icon: <Person />, name: "David Green", phone: "567-890-1234" },
		{ icon: <Person />, name: "Eva Black", phone: "678-901-2345" },
		{ icon: <Person />, name: "Frank Grey", phone: "789-012-3456" },
		{ icon: <Person />, name: "Grace Blue", phone: "890-123-4567" },
		{ icon: <Person />, name: "Henry Red", phone: "901-234-5678" },
		{ icon: <Person />, name: "Ivy Gold", phone: "012-345-6789" },
		{ icon: <Person />, name: "Jack Silver", phone: "123-456-7890" },
		{ icon: <Person />, name: "Karen Bronze", phone: "234-567-8901" },
		{ icon: <Person />, name: "Larry Copper", phone: "345-678-9012" },
		{ icon: <Person />, name: "Mona Zinc", phone: "456-789-0123" },
		{ icon: <Person />, name: "Nina Iron", phone: "567-890-1234" },
		{ icon: <Person />, name: "Oscar Steel", phone: "678-901-2345" },
		{ icon: <Person />, name: "Paul Nickel", phone: "789-012-3456" },
		{ icon: <Person />, name: "Quincy Lead", phone: "890-123-4567" },
		{ icon: <Person />, name: "Rita Brass", phone: "901-234-5678" },
		{ icon: <Person />, name: "Steve Tin", phone: "012-345-6789" },
		{ icon: <Person />, name: "Tina Magnesium", phone: "123-456-7890" },
		{ icon: <Person />, name: "Uma Lithium", phone: "234-567-8901" },
		{ icon: <Person />, name: "Victor Sodium", phone: "345-678-9012" },
		{ icon: <Person />, name: "Wendy Potassium", phone: "456-789-0123" },
		{ icon: <Person />, name: "Xander Calcium", phone: "567-890-1234" },
		{ icon: <Person />, name: "Yara Phosphorus", phone: "678-901-2345" },
		{ icon: <Person />, name: "Zane Sulfur", phone: "789-012-3456" },
		{ icon: <Person />, name: "Amy Chlorine", phone: "890-123-4567" },
		{ icon: <Person />, name: "Ben Argon", phone: "901-234-5678" },
		{ icon: <Person />, name: "Cathy Krypton", phone: "012-345-6789" },
		{ icon: <Person />, name: "Dan Xenon", phone: "123-456-7890" },
		{ icon: <Person />, name: "Ellie Radon", phone: "234-567-8901" },
		{ icon: <Person />, name: "Fred Barium", phone: "345-678-9012" },
		{ icon: <Person />, name: "Gina Cesium", phone: "456-789-0123" },
		{ icon: <Person />, name: "Hank Francium", phone: "567-890-1234" },
		{ icon: <Person />, name: "Irene Radium", phone: "678-901-2345" },
		{ icon: <Person />, name: "Jake Actinium", phone: "789-012-3456" },
		{ icon: <Person />, name: "Lily Thorium", phone: "890-123-4567" },
	]);

	// Search Functionality Logic
	const filteredContacts = contacts.filter((contact) =>
		contact.name.toLowerCase().includes(search.toLowerCase())
	);

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

				<ContactsGrid contacts={filteredContacts} />
			</Box>
		</Container>
	);
}

export default App;
