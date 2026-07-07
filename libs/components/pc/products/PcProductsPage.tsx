import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ProductCard from '../../common/cards/ProductCard';
import { PRODUCTS } from '../../../config';

const PcProductsPage = () => {
	return (
		<Box component="main" className="products-page pc-products-page">
			<Stack className="pc-page-hero">
				<Typography component="span" className="section-kicker">
					Products
				</Typography>
				<Typography component="h1">자격증공장의 루틴을 제품으로 만듭니다.</Typography>
				<Typography component="p">
					공부 공간, 운영 시스템, 웹 제품은 따로 움직이지 않습니다. 실제 운영에서 발견한 문제를 제품으로
					정리합니다.
				</Typography>
			</Stack>

			<Stack direction="row" className="pc-products-page__grid">
				{PRODUCTS.map((product) => (
					<ProductCard key={product.slug} product={product} />
				))}
			</Stack>
		</Box>
	);
};

export default PcProductsPage;
