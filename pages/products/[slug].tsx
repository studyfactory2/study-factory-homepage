import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import LayoutMain from '../../libs/components/common/layout/LayoutMain';
import SeoHead from '../../libs/components/common/seo/SeoHead';
import MobileProductDetailPage from '../../libs/components/mobile/products/MobileProductDetailPage';
import PcProductDetailPage from '../../libs/components/pc/products/PcProductDetailPage';
import { getProductBySlug, PRODUCTS, type ProductConfig, createPageTitle } from '../../libs/config';
import useDeviceDetect from '../../libs/hooks/useDeviceDetect';

interface ProductDetailProps {
	product: ProductConfig;
}

export const getStaticPaths: GetStaticPaths = async () => ({
	paths: PRODUCTS.map((product) => ({
		params: {
			slug: product.slug,
		},
	})),
	fallback: false,
});

export const getStaticProps: GetStaticProps<ProductDetailProps> = async ({ params }) => {
	const product = getProductBySlug(String(params?.slug));

	if (!product) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			product,
		},
	};
};

const ProductDetail: NextPage<ProductDetailProps> = ({ product }) => {
	const device = useDeviceDetect();

	return (
		<>
			<SeoHead
				title={createPageTitle(product.name)}
				path={`/products/${product.slug}`}
				description={product.summary}
			/>
			{device === 'mobile' ? <MobileProductDetailPage product={product} /> : <PcProductDetailPage product={product} />}
		</>
	);
};

export default LayoutMain(ProductDetail);
