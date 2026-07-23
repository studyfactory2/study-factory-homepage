import type { NextPage } from 'next';
import LayoutMain from '../../../libs/components/common/layout/LayoutMain';
import SeoHead from '../../../libs/components/common/seo/SeoHead';
import MobileJagongOnlineAboutPage from '../../../libs/components/mobile/products/MobileJagongOnlineAboutPage';
import PcJagongOnlineAboutPage from '../../../libs/components/pc/products/PcJagongOnlineAboutPage';
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
				<MobileJagongOnlineAboutPage product={jagongOnline} />
			) : (
				<PcJagongOnlineAboutPage product={jagongOnline} />
			)}
		</>
	);
};

export default LayoutMain(JagongOnlineAbout);
