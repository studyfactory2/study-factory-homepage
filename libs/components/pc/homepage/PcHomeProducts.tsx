import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ProductCard from '../../common/cards/ProductCard';
import { PRODUCTS } from '../../../config';

const PcHomeProducts = () => {
	return (
		<Box component="section" className="pc-home-products">
			<Stack direction="row" justifyContent="space-between" className="pc-section-head pc-section-head--row">
				<Stack>
					<Typography component="span" className="section-kicker">
						Study Factory Research Lab
					</Typography>
					<Typography component="h2">공간의 운영 경험을 제품으로 확장합니다.</Typography>
				</Stack>
				<Typography component="p">
					홈페이지, PWA, 내부 시스템을 직접 만들고 검증합니다. 우리 공간에서 필요한 도구를 먼저 만들고,
					좋은 방식은 제품으로 확장합니다.
				</Typography>
			</Stack>

			<Stack direction="row" className="pc-home-products__grid">
				{PRODUCTS.map((product) => (
					<ProductCard key={product.slug} product={product} />
				))}
			</Stack>
		</Box>
	);
};

export default PcHomeProducts;
