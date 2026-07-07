import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ProductCard from '../../common/cards/ProductCard';
import { PRODUCTS } from '../../../config';

const MobileProductsPage = () => {
	return (
		<Box component="main" className="products-page mobile-products-page">
			<Stack className="mobile-page-hero">
				<Typography component="span" className="section-kicker">
					Products
				</Typography>
				<Typography component="h1">루틴을 제품으로 만듭니다.</Typography>
				<Typography component="p">실제 공간 운영에서 발견한 문제를 웹과 PWA로 정리합니다.</Typography>
			</Stack>

			<Stack className="mobile-products-page__list">
				{PRODUCTS.map((product) => (
					<ProductCard key={product.slug} product={product} />
				))}
			</Stack>
		</Box>
	);
};

export default MobileProductsPage;
