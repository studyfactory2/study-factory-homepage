import { useEffect, useState } from 'react';

export type DeviceType = 'mobile' | 'desktop';

const MOBILE_QUERY = '(max-width: 767px)';

const getDevice = () => {
	if (typeof window === 'undefined') {
		return 'desktop';
	}

	return window.matchMedia(MOBILE_QUERY).matches ? 'mobile' : 'desktop';
};

const useDeviceDetect = (): DeviceType => {
	const [device, setDevice] = useState<DeviceType>(getDevice);

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
