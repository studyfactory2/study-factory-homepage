import Link from 'next/link';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ProductDevicePreview from '../../common/homepage/ProductDevicePreview';
import { HOME_PRODUCT_PROMOS } from '../../../config';

const MobileHomeProducts = () => {
	return (
		<Box component="section" className="mobile-home-products">
			<Typography component="span" className="section-kicker">
				Product Ecosystem
			</Typography>
			<Typography component="h2">운영 경험을 제품으로 확장합니다.</Typography>
			<Typography component="p" className="mobile-home-products__intro">
				예약, 출석, 상담, 루틴 문제를 실제 공간에서 발견하고 모바일 제품으로 다시 만듭니다.
			</Typography>

			<Stack className="mobile-home-products__promos">
				{HOME_PRODUCT_PROMOS.map((promo) => (
					<Box component={Link} href={promo.href} key={promo.slug} className="mobile-home-products__promo">
						<Box className="mobile-home-products__visual" aria-hidden="true">
							<ProductDevicePreview slug={promo.slug} />
						</Box>

						<Stack className="mobile-home-products__promo-copy">
							<Typography component="span">{promo.kicker}</Typography>
							<Typography component="strong">{promo.name}</Typography>
							<Typography component="h3">{promo.title}</Typography>
							<Typography component="p">{promo.body}</Typography>

							<Stack direction="row" alignItems="center" className="mobile-home-products__cta">
								{promo.cta}
								<ArrowOutwardIcon fontSize="small" />
							</Stack>
						</Stack>
					</Box>
				))}
			</Stack>

			<Stack className="mobile-home-products__lab">
				<Typography component="strong">Study Factory Research Lab</Typography>
				<Typography component="p">공간 운영에서 발견한 문제를 웹사이트, PWA, 내부 시스템으로 만듭니다.</Typography>
				<Box component={Link} href="/research-lab">
					Research Lab 보기
				</Box>
			</Stack>
		</Box>
	);
};

export default MobileHomeProducts;
