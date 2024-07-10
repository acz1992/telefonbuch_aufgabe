import React, { createContext, useMemo, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";

// Create context for dark mode
export const DarkModeContext = createContext({ toggleDarkMode: () => {} });

// Custom hook to use DarkModeContext
/* export const useDarkMode = () => {
	return useContext(DarkContext);
};
 */
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
	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode,
				},
			}),
		[mode]
	);

	return (
		<DarkModeContext.Provider value={darkMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</DarkModeContext.Provider>
	);
};
