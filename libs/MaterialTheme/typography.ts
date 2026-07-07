import type { ThemeOptions } from '@mui/material/styles';

const typography: ThemeOptions['typography'] = {
	fontFamily: '"Inter", "Noto Sans KR", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
	h1: {
		fontSize: 72,
		lineHeight: 0.95,
		fontWeight: 800,
		letterSpacing: 0,
	},
	h2: {
		fontSize: 48,
		lineHeight: 1.05,
		fontWeight: 800,
		letterSpacing: 0,
	},
	h3: {
		fontSize: 34,
		lineHeight: 1.15,
		fontWeight: 750,
		letterSpacing: 0,
	},
	h4: {
		fontSize: 26,
		lineHeight: 1.2,
		fontWeight: 700,
		letterSpacing: 0,
	},
	h5: {
		fontSize: 20,
		lineHeight: 1.28,
		fontWeight: 700,
		letterSpacing: 0,
	},
	h6: {
		fontSize: 16,
		lineHeight: 1.35,
		fontWeight: 700,
		letterSpacing: 0,
	},
	subtitle1: {
		fontSize: 16,
		lineHeight: 1.6,
		fontWeight: 500,
		letterSpacing: 0,
	},
	subtitle2: {
		fontSize: 13,
		lineHeight: 1.4,
		fontWeight: 700,
		letterSpacing: '0.12em',
		textTransform: 'uppercase',
	},
	body1: {
		fontSize: 16,
		lineHeight: 1.8,
		fontWeight: 400,
		letterSpacing: 0,
	},
	body2: {
		fontSize: 14,
		lineHeight: 1.7,
		fontWeight: 400,
		letterSpacing: 0,
	},
	button: {
		fontSize: 14,
		fontWeight: 700,
		letterSpacing: 0,
		textTransform: 'none',
	},
	caption: {
		fontSize: 12,
		lineHeight: 1.45,
		fontWeight: 600,
		letterSpacing: 0,
	},
	overline: {
		fontSize: 11,
		lineHeight: 1.3,
		fontWeight: 800,
		letterSpacing: '0.14em',
		textTransform: 'uppercase',
	},
};

export default typography;
