import type { NextPage } from 'next';
import LayoutMain from '../../libs/components/common/layout/LayoutMain';
import SeoHead from '../../libs/components/common/seo/SeoHead';
import MobileContactPage from '../../libs/components/mobile/contact/MobileContactPage';
import PcContactPage from '../../libs/components/pc/contact/PcContactPage';
import { createPageTitle } from '../../libs/config';
import useDeviceDetect from '../../libs/hooks/useDeviceDetect';

const Contact: NextPage = () => {
	const device = useDeviceDetect();

	return (
		<>
			<SeoHead
				title={createPageTitle('Contact')}
				path="/contact"
				description="자격증공장 학습 공간 상담, Study Factory App, Research Lab 제작 문의를 시작하세요."
			/>
			{device === 'mobile' ? <MobileContactPage /> : <PcContactPage />}
		</>
	);
};

export default LayoutMain(Contact);
