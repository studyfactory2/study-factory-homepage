import type { PaletteOptions } from '@mui/material/styles';

const palette: PaletteOptions = {
	mode: 'light',
	primary: {
		main: '#101412',
		light: '#27312d',
		dark: '#050706',
		contrastText: '#f8f3ea',
	},
	secondary: {
		main: '#8a2638',
		light: '#a94457',
		dark: '#5f1524',
		contrastText: '#ffffff',
	},
	success: {
		main: '#58715f',
	},
	warning: {
		main: '#b88a4a',
	},
	error: {
		main: '#b64242',
	},
	background: {
		default: '#f8f3ea',
		paper: '#ffffff',
	},
	text: {
		primary: '#111312',
		secondary: '#64645f',
		disabled: '#a7a49b',
	},
	divider: 'rgba(17, 19, 18, 0.12)',
};

export default palette;
