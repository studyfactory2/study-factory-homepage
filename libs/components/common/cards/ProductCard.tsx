import Link from 'next/link';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { ProductConfig } from '../../../config';

interface ProductCardProps {
	product: ProductConfig;
	className?: string;
}

const ProductCard = ({ product, className }: ProductCardProps) => {
	return (
		<Box component={Link} href={`/products/${product.slug}`} className={className ?? 'product-card'}>
			<Stack className="product-card__body">
				<Typography component="span" className="product-card__category">
					{product.category}
				</Typography>
				<Typography component="strong" className="product-card__name">
					{product.name}
				</Typography>
				<Typography component="p" className="product-card__summary">
					{product.summary}
				</Typography>
			</Stack>
			<Stack direction="row" alignItems="center" className="product-card__link">
				Discuss
				<ArrowOutwardIcon fontSize="small" />
			</Stack>
		</Box>
	);
};

export default ProductCard;
