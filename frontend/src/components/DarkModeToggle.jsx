import React from "react";
import IconButton from "@mui/material/IconButton";
import { Typography, Box } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "@mui/material/styles";
import { useDarkMode } from "../hooks/useDarkMode.js";

const DarkModeToggle = () => {
	const theme = useTheme();
	const darkMode = useDarkMode();

	return (
		<IconButton onClick={darkMode.toggleDarkMode} color="inherit">
			{theme.palette.mode === "dark" ? (
				<Box display="flex" alignItems="center">
					<Typography style={{ marginRight: 8 }} variant="body2">
						Light Mode
					</Typography>{" "}
					<Brightness7Icon />{" "}
				</Box>
			) : (
				<Box display="flex" alignItems="center">
					<Typography style={{ marginRight: 8 }} variant="body2">
						Dark Mode
					</Typography>{" "}
					<Brightness4Icon />{" "}
				</Box>
			)}
		</IconButton>
	);
};

export default DarkModeToggle;
