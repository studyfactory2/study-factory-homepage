import { useEffect, useState } from 'react';

export type DeviceType = 'mobile' | 'desktop';

const MOBILE_QUERY = '(max-width: 767px)';

const useDeviceDetect = (): DeviceType => {
	const [device, setDevice] = useState<DeviceType>('desktop');

	useEffect(() => {
		const mediaQuery = window.matchMedia(MOBILE_QUERY);
		const updateDevice = () => setDevice(mediaQuery.matches ? 'mobile' : 'desktop');

		updateDevice();
		mediaQuery.addEventListener('change', updateDevice);

		return () => {
			mediaQuery.removeEventListener('change', updateDevice);
		};
	}, []);

	return device;
};

export default useDeviceDetect;
