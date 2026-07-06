import { createTheme } from "@mui/material/styles";
import palette from "./palette";
import shadows from "./shadows";
import typography from "./typography";

const theme = createTheme({
	palette,
	shadows,
	shape: {
		borderRadius: 6,
	},
	typography,
	components: {
		MuiButton: {
			defaultProps: {
				disableElevation: true,
			},
			styleOverrides: {
				root: {
					borderRadius: 4,
				},
			},
		},
	},
});

export default theme;
