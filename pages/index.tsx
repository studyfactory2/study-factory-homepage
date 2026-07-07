import type { NextPage } from 'next';
import LayoutMain from '../libs/components/common/layout/LayoutMain';
import SeoHead from '../libs/components/common/seo/SeoHead';
import MobileHomePage from '../libs/components/mobile/homepage/MobileHomePage';
import PcHomePage from '../libs/components/pc/homepage/PcHomePage';
import useDeviceDetect from '../libs/hooks/useDeviceDetect';

const Home: NextPage = () => {
	const device = useDeviceDetect();

	return (
		<>
			<SeoHead path="/" />
			{device === 'mobile' ? <MobileHomePage /> : <PcHomePage />}
		</>
	);
};

export default LayoutMain(Home);
