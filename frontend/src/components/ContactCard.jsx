import { Card, CardContent, Grid, Typography, Avatar } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const ContactCard = ({ icon, name, phone }) => {
	const theme = useTheme();

	return (
		<Card
			variant="outlined"
			sx={{
				margin: 1,
				transition: "transform 0.3s ease-in-out",
				"&:hover": {
					transform: "scale(1.05)",
				},
			}}
		>
			<CardContent>
				<Grid container alignItems="center" spacing={2}>
					<Grid item>
						<Avatar
							sx={{
								bgcolor:
									theme.palette.mode === "dark"
										? "#E0E0E0"
										: "#333333",
								color:
									theme.palette.mode === "dark"
										? "#000000"
										: "#FFFFFF",
							}}
						>
							{icon}
						</Avatar>
					</Grid>
					<Grid item xs>
						<Typography variant="h6">{name}</Typography>
						<Typography color="textSecondary">{phone}</Typography>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};

export default ContactCard;
