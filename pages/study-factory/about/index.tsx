import type { NextPage } from 'next';
import LayoutMain from '../../../libs/components/common/layout/LayoutMain';
import SeoHead from '../../../libs/components/common/seo/SeoHead';
import MobileStudyFactoryPage from '../../../libs/components/mobile/study-factory/MobileStudyFactoryPage';
import PcStudyFactoryPage from '../../../libs/components/pc/study-factory/PcStudyFactoryPage';
import { createPageTitle } from '../../../libs/config';
import useDeviceDetect from '../../../libs/hooks/useDeviceDetect';

const StudyFactoryAbout: NextPage = () => {
	const device = useDeviceDetect();

	return (
		<>
			<SeoHead
				title={createPageTitle('자격증공장 소개')}
				path="/study-factory/about"
				description="자격증공장의 공간과 운영 방식, 성인 수험생을 위한 학습 시스템을 소개합니다."
			/>
			{device === 'mobile' ? <MobileStudyFactoryPage /> : <PcStudyFactoryPage />}
		</>
	);
};

export default LayoutMain(StudyFactoryAbout);
