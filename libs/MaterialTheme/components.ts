import type { Components } from '@mui/material/styles';

const components: Components = {
	MuiButton: {
		defaultProps: {
			disableElevation: true,
		},
		styleOverrides: {
			root: {
				minHeight: 44,
				borderRadius: 4,
				textTransform: 'none',
				fontWeight: 750,
				padding: '0 18px',
			},
		},
	},
	MuiIconButton: {
		styleOverrides: {
			root: {
				borderRadius: 4,
			},
		},
	},
	MuiTextField: {
		defaultProps: {
			variant: 'filled',
		},
	},
	MuiFilledInput: {
		styleOverrides: {
			root: {
				borderRadius: 4,
				backgroundColor: '#ffffff',
				border: '1px solid rgba(17, 19, 18, 0.12)',
				'&:before, &:after': {
					display: 'none',
				},
				'&:hover': {
					backgroundColor: '#ffffff',
				},
				'&.Mui-focused': {
					backgroundColor: '#ffffff',
					borderColor: '#101412',
				},
			},
		},
	},
	MuiCssBaseline: {
		styleOverrides: {
			body: {
				scrollBehavior: 'auto',
			},
		},
	},
};

export default components;
