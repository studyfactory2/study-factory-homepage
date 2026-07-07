import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';

interface ArrowButtonProps {
	href: string;
	label: string;
	variant?: 'text' | 'outlined' | 'contained';
}

const ArrowButton = ({ href, label, variant = 'contained' }: ArrowButtonProps) => {
	return (
		<Button component={Link} href={href} variant={variant} endIcon={<ArrowForwardIcon fontSize="small" />}>
			{label}
		</Button>
	);
};

export default ArrowButton;
