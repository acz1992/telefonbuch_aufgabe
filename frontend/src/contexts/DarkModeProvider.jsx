import React, { createContext, useMemo, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";

// Create context for dark mode
export const DarkModeContext = createContext({ toggleDarkMode: () => {} });

export const DarkModeProvider = ({ children }) => {
	// Check users system settings for preference
	const prefersDarkMode = useMediaQuery("(prefers-dark-scheme: dark)");

	// Initialise state for current theme
	const [mode, setMode] = useState(prefersDarkMode ? "dark" : "light");

	// Cache toggleDarkMode to prevent re-renders
	const darkMode = useMemo(
		() => ({
			toggleDarkMode: () => {
				// Toggles theme mode
				setMode((prevMode) =>
					prevMode === "light" ? "dark" : "light"
				);
			},
		}),
		[]
	);

	// Mui theme based on current mode
	/* 	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode,
				},
			}),
		[mode]
	); */

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode,
					...(mode === "dark"
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
			}),
		[mode]
	);

	return (
		<DarkModeContext.Provider value={darkMode}>
			<ThemeProvider theme={theme}>
				{/* Enables dark mode for app's background */}
				<CssBaseline />
				{children}
			</ThemeProvider>
		</DarkModeContext.Provider>
	);
};
