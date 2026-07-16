import type { NextPage } from 'next';
import LayoutMain from '../../libs/components/common/layout/LayoutMain';
import SeoHead from '../../libs/components/common/seo/SeoHead';
import MobileStudyFactoryPage from '../../libs/components/mobile/study-factory/MobileStudyFactoryPage';
import PcStudyFactoryPage from '../../libs/components/pc/study-factory/PcStudyFactoryPage';
import { createPageTitle } from '../../libs/config';
import useDeviceDetect from '../../libs/hooks/useDeviceDetect';

const StudyFactory: NextPage = () => {
	const device = useDeviceDetect();

	return (
		<>
			<SeoHead
				title={createPageTitle('Study Factory Space')}
				path="/study-factory"
				description="부산 성인 수험생을 위한 자격증공장의 실제 학습 공간을 소개합니다. 좌석, 출석, 루틴, 공지, 상담이 하나의 운영 흐름으로 이어집니다."
			/>
			{device === 'mobile' ? <MobileStudyFactoryPage /> : <PcStudyFactoryPage />}
		</>
	);
};

export default LayoutMain(StudyFactory);
