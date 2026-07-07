import type { NextPage } from 'next';
import LayoutMain from '../../libs/components/common/layout/LayoutMain';
import SeoHead from '../../libs/components/common/seo/SeoHead';
import MobileProductsPage from '../../libs/components/mobile/products/MobileProductsPage';
import PcProductsPage from '../../libs/components/pc/products/PcProductsPage';
import { createPageTitle } from '../../libs/config';
import useDeviceDetect from '../../libs/hooks/useDeviceDetect';

const Products: NextPage = () => {
	const device = useDeviceDetect();

	return (
		<>
			<SeoHead
				title={createPageTitle('Products')}
				path="/products"
				description="Jagong Online, Study Factory App, Research Lab 등 자격증공장의 공간 운영 경험에서 출발한 웹 제품을 소개합니다."
			/>
			{device === 'mobile' ? <MobileProductsPage /> : <PcProductsPage />}
		</>
	);
};

export default LayoutMain(Products);
