import { Card, CardContent, Grid, Typography, Avatar } from "@mui/material";

const ContactCard = ({ icon, name, phone }) => {
	return (
		<Card variant="outlined" sx={{ margin: 1 }}>
			<CardContent>
				<Grid container alignItems="center" spacing={2}>
					<Grid item>
						<Avatar>{icon}</Avatar>{" "}
					</Grid>
					<Grid item>
						<Typography variant="h6">{name}</Typography>
						<Typography color="textSecondary">{phone}</Typography>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default ContactCard;
