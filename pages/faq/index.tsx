import type { NextPage } from 'next';
import LayoutMain from '../../libs/components/common/layout/LayoutMain';
import SeoHead from '../../libs/components/common/seo/SeoHead';
import MobileFaqPage from '../../libs/components/mobile/faq/MobileFaqPage';
import PcFaqPage from '../../libs/components/pc/faq/PcFaqPage';
import { createPageTitle } from '../../libs/config';
import useDeviceDetect from '../../libs/hooks/useDeviceDetect';

const Faq: NextPage = () => {
	const device = useDeviceDetect();

	return (
		<>
			<SeoHead
				title={createPageTitle('FAQ')}
				path="/faq"
				description="자격증공장 이용 상담 전 자주 묻는 질문과 좌석, 체험, 앱 사용, 상담 흐름을 정리합니다."
			/>
			{device === 'mobile' ? <MobileFaqPage /> : <PcFaqPage />}
		</>
	);
};

export default LayoutMain(Faq);
