import type { NextPage } from 'next';
import LayoutMain from '../../libs/components/common/layout/LayoutMain';
import SeoHead from '../../libs/components/common/seo/SeoHead';
import MobileExperienceLanding from '../../libs/components/mobile/experiences/MobileExperienceLanding';
import PcExperienceLanding from '../../libs/components/pc/experiences/PcExperienceLanding';
import { createPageTitle, JAGONG_ONLINE_EXPERIENCE } from '../../libs/config';
import useDeviceDetect from '../../libs/hooks/useDeviceDetect';

const JagongOnline: NextPage = () => {
	const device = useDeviceDetect();

	return (
		<>
			<SeoHead
				title={createPageTitle('재택근무반')}
				path="/jagong-online"
				description="공간 밖에서도 공부의 흐름을 이어갈 수 있도록 돕는 재택근무반을 소개합니다."
			/>
			{device === 'mobile' ? (
				<MobileExperienceLanding experience={JAGONG_ONLINE_EXPERIENCE} />
			) : (
				<PcExperienceLanding experience={JAGONG_ONLINE_EXPERIENCE} />
			)}
		</>
	);
};

export default LayoutMain(JagongOnline);
