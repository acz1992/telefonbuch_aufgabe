import { TextField, InputAdornment, Box } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useTheme } from "@mui/material/styles";

const SearchBar = ({ value, onChange }) => {
	const theme = useTheme();

	return (
		<Box width="100%" maxWidth={{ sm: "100%", md: "50%" }} my={2}>
			<TextField
				type="search"
				label="Search"
				placeholder="Enter Name Here"
				autoComplete="off"
				variant="outlined"
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<AccountCircle />
						</InputAdornment>
					),
				}}
				value={value}
				onChange={onChange}
				fullWidth
				sx={{
					"& .MuiOutlinedInput-root": {
						"&.Mui-focused .MuiOutlinedInput-notchedOutline": {
							borderColor:
								theme.palette.mode === "dark"
									? "#BB86FC"
									: "#1976D2",
						},
					},
				}}
			/>
		</Box>
	);
};

export default SearchBar;
