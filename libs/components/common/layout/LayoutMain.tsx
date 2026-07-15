import { useEffect } from 'react';
import type { NextPage } from 'next';
import Stack from '@mui/material/Stack';
import useDeviceDetect from '../../../hooks/useDeviceDetect';
import MobileFooter from '../../mobile/layout/MobileFooter';
import MobileTop from '../../mobile/layout/MobileTop';
import PcFooter from '../../pc/layout/PcFooter';
import PcTop from '../../pc/layout/PcTop';

const LayoutMain = <P extends object>(Component: NextPage<P>) => {
	const WithLayout = (props: P) => {
		const device = useDeviceDetect();
		const isMobile = device === 'mobile';

		useEffect(() => {
			if ('scrollRestoration' in window.history) {
				window.history.scrollRestoration = 'auto';
			}
		}, []);

		return (
			<Stack id={isMobile ? 'mobile-wrap' : 'pc-wrap'}>
				{isMobile ? <MobileTop /> : <PcTop />}
				<Component {...props} />
				{isMobile ? <MobileFooter /> : <PcFooter />}
			</Stack>
		);
	};

	WithLayout.displayName = `LayoutMain(${Component.displayName || Component.name || 'Page'})`;

	return WithLayout;
};

export default LayoutMain;
