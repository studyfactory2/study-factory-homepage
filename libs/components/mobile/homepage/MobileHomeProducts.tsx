import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ProductCard from '../../common/cards/ProductCard';
import { PRODUCTS } from '../../../config';

const MobileHomeProducts = () => {
	return (
		<Box component="section" className="mobile-home-products">
			<Typography component="span" className="section-kicker">
				Research Lab
			</Typography>
			<Typography component="h2">운영 경험을 웹 제품으로 확장합니다.</Typography>
			<Stack className="mobile-home-products__list">
				{PRODUCTS.map((product) => (
					<ProductCard key={product.slug} product={product} />
				))}
			</Stack>
		</Box>
	);
};

export default MobileHomeProducts;
