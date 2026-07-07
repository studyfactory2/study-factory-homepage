import Link from 'next/link';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { ProductConfig } from '../../../config';

interface PcProductDetailPageProps {
	product: ProductConfig;
}

const PcProductDetailPage = ({ product }: PcProductDetailPageProps) => {
	return (
		<Box component="main" className="product-detail-page pc-product-detail-page">
			<Stack direction="row" justifyContent="space-between" className="pc-product-detail-page__hero">
				<Stack>
					<Typography component="span" className="section-kicker">
						{product.category}
					</Typography>
					<Typography component="h1">{product.name}</Typography>
					<Typography component="p">{product.description}</Typography>
				</Stack>

				<Stack className="pc-product-detail-page__panel">
					<Typography component="span">Status</Typography>
					<Typography component="strong">{product.status}</Typography>
					{product.href && (
						<Button component={Link} href={product.href} target="_blank" rel="noreferrer" endIcon={<ArrowOutwardIcon />}>
							Visit product
						</Button>
					)}
				</Stack>
			</Stack>
		</Box>
	);
};

export default PcProductDetailPage;
