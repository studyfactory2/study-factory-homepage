import type { NextPage } from 'next';
import LayoutMain from '../../../libs/components/common/layout/LayoutMain';
import SeoHead from '../../../libs/components/common/seo/SeoHead';
import MobileProductDetailPage from '../../../libs/components/mobile/products/MobileProductDetailPage';
import PcProductDetailPage from '../../../libs/components/pc/products/PcProductDetailPage';
import { createPageTitle, getProductBySlug } from '../../../libs/config';
import useDeviceDetect from '../../../libs/hooks/useDeviceDetect';

const jagongOnline = getProductBySlug('jagong-online');

const JagongOnlineAbout: NextPage = () => {
	const device = useDeviceDetect();

	if (!jagongOnline) return null;

	return (
		<>
			<SeoHead
				title={createPageTitle('재택근무반 소개')}
				path="/jagong-online/about"
				description={jagongOnline.description}
			/>
			{device === 'mobile' ? (
				<MobileProductDetailPage product={jagongOnline} />
			) : (
				<PcProductDetailPage product={jagongOnline} />
			)}
		</>
	);
};

export default LayoutMain(JagongOnlineAbout);
