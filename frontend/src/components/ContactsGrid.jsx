import { Grid } from "@mui/material";
import ContactCard from "./ContactCard";

const ContactsGrid = ({ contacts }) => {
	return (
		<>
			<Grid container spacing={2}>
				{contacts.map((contact, index) => (
					<Grid item xs={12} sm={6} md={4} key={index}>
						<ContactCard {...contact} />
					</Grid>
				))}
			</Grid>
		</>
	);
};

export default ContactsGrid;
