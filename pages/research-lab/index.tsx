import type { NextPage } from 'next';
import LayoutMain from '../../libs/components/common/layout/LayoutMain';
import SeoHead from '../../libs/components/common/seo/SeoHead';
import MobileResearchLabPage from '../../libs/components/mobile/research-lab/MobileResearchLabPage';
import PcResearchLabPage from '../../libs/components/pc/research-lab/PcResearchLabPage';
import { createPageTitle } from '../../libs/config';
import useDeviceDetect from '../../libs/hooks/useDeviceDetect';

const ResearchLab: NextPage = () => {
	const device = useDeviceDetect();

	return (
		<>
			<SeoHead
				title={createPageTitle('Research Lab')}
				path="/research-lab"
				description="Study Factory Research Lab은 실제 공부 공간 운영에서 발견한 문제를 웹, PWA, 내부 시스템으로 해결하는 제품 개발 스튜디오입니다."
			/>
			{device === 'mobile' ? <MobileResearchLabPage /> : <PcResearchLabPage />}
		</>
	);
};

export default LayoutMain(ResearchLab);
