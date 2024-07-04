import { TextField, InputAdornment } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

const SearchBar = ({ value, onChange }) => {
	return (
		<TextField
			type="search"
			label="Search"
			placeholder="Enter Name Here"
			variant="outlined"
			max="auto"
			width="100%"
			InputProps={{
				startAdornment: (
					<InputAdornment position="start">
						<AccountCircle />
					</InputAdornment>
				),
			}}
			value={value}
			onChange={onChange}
		/>
	);
};

export default SearchBar;
