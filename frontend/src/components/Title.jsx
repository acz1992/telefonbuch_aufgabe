import { Typography } from "@mui/material";

const Title = () => {
	return (
		<Typography
			mt={2}
			textAlign="center"
			variant="h2"
			textAlign={{ xs: "center", md: "left" }}
			width={{ xs: "100%", md: "auto" }}
		>
			Phone Book
		</Typography>
	);
};

export default Title;
