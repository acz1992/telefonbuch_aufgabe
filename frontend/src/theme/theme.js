import { createTheme } from "@mui/material/styles";

const getCustomTheme = (mode) =>
	createTheme({
		// Define palette colours
		palette: {
			mode,
			...(mode === "dark" // Dark mode uses following colours
				? {
						background: {
							default: "#121212",
							paper: "#1D1D1D",
						},
						text: {
							primary: "#E0E0E0",
							secondary: "#B0B0B0",
						},
				  }
				: {
						// Light mode uses following colours
						background: {
							default: "#FFFFFF",
							paper: "#FFFFFF",
						},
						text: {
							primary: "#000000",
							secondary: "#333333",
						},
				  }),
		},
		components: {
			MuiIconButton: {
				styleOverrides: {
					root: {
						// Override default hover effect
						"&:hover": {
							backgroundColor: "transparent",
							"& > *": {
								fontWeight: "bold",
							},
						},
						// Override default focus effect
						"&:focus": {
							backgroundColor: "transparent",
						},
					},
				},

				defaultProps: {
					disableRipple: true,
				},
			},
		},
	});

export default getCustomTheme;
