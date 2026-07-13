import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import type { ProductSlug } from '../../../config/products';

interface ProductDevicePreviewProps {
	slug: ProductSlug;
}

const ProductDevicePreview = ({ slug }: ProductDevicePreviewProps) => {
	if (slug === 'study-factory-app') {
		return (
			<Box className="home-product-device home-product-device--app" aria-hidden="true">
				<Box className="home-product-device__phone">
					<span className="home-product-device__phone-speaker" />
					<Stack className="home-product-device__phone-screen">
						<span className="home-product-device__eyebrow" />
						<span className="home-product-device__headline" />
						<Stack className="home-product-device__rows">
							<span />
							<span />
							<span />
						</Stack>
						<Stack direction="row" className="home-product-device__chips">
							<span />
							<span />
						</Stack>
					</Stack>
				</Box>
			</Box>
		);
	}

	return (
		<Box className="home-product-device home-product-device--jagong" aria-hidden="true">
			<Box className="home-product-device__tablet">
				<Stack className="home-product-device__tablet-screen">
					<Stack direction="row" className="home-product-device__dashboard-head">
						<span />
						<span />
					</Stack>
					<Stack direction="row" className="home-product-device__dashboard-main">
						<Stack className="home-product-device__dashboard-list">
							<span />
							<span />
							<span />
							<span />
						</Stack>
						<Stack className="home-product-device__dashboard-chart">
							<span />
							<span />
						</Stack>
					</Stack>
				</Stack>
			</Box>
		</Box>
	);
};

export default ProductDevicePreview;
