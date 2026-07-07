import { alpha, styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';

export const RippleBadge = styled(Badge)(({ theme }) => ({
	'& .MuiBadge-badge': {
		backgroundColor: '#58715f',
		color: '#58715f',
		boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
		'&::after': {
			position: 'absolute',
			top: '-1px',
			left: '-1px',
			width: '100%',
			height: '100%',
			borderRadius: '50%',
			animation: 'ripple 1.2s infinite ease-in-out',
			border: '1px solid currentColor',
			content: '""',
		},
	},
	'@keyframes ripple': {
		'0%': {
			transform: 'scale(.8)',
			opacity: 1,
		},
		'100%': {
			transform: 'scale(2.4)',
			opacity: 0,
		},
	},
}));

export const IOSSwitch = styled(Switch)(({ theme }) => ({
	width: 42,
	height: 26,
	padding: 0,
	'& .MuiSwitch-switchBase': {
		padding: 0,
		margin: 2,
		transitionDuration: '200ms',
		'&.Mui-checked': {
			transform: 'translateX(16px)',
			color: '#fff',
			'& + .MuiSwitch-track': {
				backgroundColor: theme.palette.primary.main,
				opacity: 1,
				border: 0,
			},
		},
	},
	'& .MuiSwitch-thumb': {
		boxSizing: 'border-box',
		width: 22,
		height: 22,
	},
	'& .MuiSwitch-track': {
		borderRadius: 13,
		backgroundColor: alpha(theme.palette.primary.main, 0.16),
		opacity: 1,
		transition: theme.transitions.create(['background-color'], {
			duration: 300,
		}),
	},
}));

export const StudyTextField = styled(TextField)(({ theme }) => ({
	'& .MuiFilledInput-root': {
		borderRadius: 4,
		backgroundColor: '#fff',
		transition: theme.transitions.create(['border-color', 'box-shadow']),
		'&.Mui-focused': {
			boxShadow: `${alpha(theme.palette.primary.main, 0.14)} 0 0 0 3px`,
		},
	},
}));

export const StudyButton = styled(Button)(() => ({
	whiteSpace: 'nowrap',
}));
