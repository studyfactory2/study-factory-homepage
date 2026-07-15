import Image from 'next/image';
import Box from '@mui/material/Box';
import type { ProductSlug } from '../../../config/products';

interface ProductBrandVisualProps {
	slug: ProductSlug;
}

const ProductBrandVisual = ({ slug }: ProductBrandVisualProps) => {
	if (slug === 'study-factory-app') {
		return (
			<Box className="home-product-brand home-product-brand--study-factory">
				<Image
					src="/images/brands/study-factory-logo-transparent-cropped.png"
					alt=""
					width={720}
					height={732}
					className="home-product-brand__logo"
				/>
			</Box>
		);
	}

	if (slug === 'jagong-online') {
		return (
			<Box className="home-product-brand home-product-brand--jagong-online">
				<Image
					src="/images/brands/jagong-online-logo.webp"
					alt=""
					width={598}
					height={418}
					className="home-product-brand__logo"
				/>
			</Box>
		);
	}

	return null;
};

export default ProductBrandVisual;
