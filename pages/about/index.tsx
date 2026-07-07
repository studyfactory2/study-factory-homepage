import type { NextPage } from 'next';
import LayoutMain from '../../libs/components/common/layout/LayoutMain';
import SeoHead from '../../libs/components/common/seo/SeoHead';
import MobileAboutPage from '../../libs/components/mobile/about/MobileAboutPage';
import PcAboutPage from '../../libs/components/pc/about/PcAboutPage';
import { createPageTitle } from '../../libs/config';
import useDeviceDetect from '../../libs/hooks/useDeviceDetect';

const About: NextPage = () => {
	const device = useDeviceDetect();

	return (
		<>
			<SeoHead
				title={createPageTitle('About')}
				path="/about"
				description="자격증공장이 성인 수험생의 집중 루틴을 설계하는 방식과 Study Factory Research Lab의 방향을 소개합니다."
			/>
			{device === 'mobile' ? <MobileAboutPage /> : <PcAboutPage />}
		</>
	);
};

export default LayoutMain(About);
