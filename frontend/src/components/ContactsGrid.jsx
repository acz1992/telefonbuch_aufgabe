import { Grid, Typography } from "@mui/material";
import ContactCard from "./ContactCard";

const ContactsGrid = ({ contacts }) => {
	return (
		<>
			<Typography my={2} textAlign="center" variant="h4">
				Contact List
			</Typography>

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
