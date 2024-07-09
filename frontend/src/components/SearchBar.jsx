import { TextField, InputAdornment, Box } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

const SearchBar = ({ value, onChange }) => {
	return (
		<Box mx="auto" width="100%" maxWidth={{ sm: "50%" }} my={2}>
			<TextField
				type="search"
				label="Search"
				placeholder="Enter Name Here"
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
			/>
		</Box>
	);
};

export default SearchBar;
