import Link from 'next/link';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { ProductConfig } from '../../../config';

interface MobileProductDetailPageProps {
	product: ProductConfig;
}

const MobileProductDetailPage = ({ product }: MobileProductDetailPageProps) => {
	return (
		<Box component="main" className="product-detail-page mobile-product-detail-page">
			<Stack className="mobile-page-hero">
				<Typography component="span" className="section-kicker">
					{product.category}
				</Typography>
				<Typography component="h1">{product.name}</Typography>
				<Typography component="p">{product.description}</Typography>
				{product.href && (
					<Button component={Link} href={product.href} target="_blank" rel="noreferrer" endIcon={<ArrowOutwardIcon />}>
						Visit product
					</Button>
				)}
			</Stack>
		</Box>
	);
};

export default MobileProductDetailPage;
