import { createTheme } from '@mui/material/styles';
import components from './components';
import palette from './palette';
import shadows from './shadows';
import typography from './typography';

const theme = createTheme({
	palette,
	typography,
	shadows,
	components,
	shape: {
		borderRadius: 4,
	},
});

export default theme;
