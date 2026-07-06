import { useEffect, useState } from "react";

export type DeviceType = "mobile" | "pc";

const MOBILE_WIDTH = 767;

const useDeviceDetect = (): DeviceType => {
	const [device, setDevice] = useState<DeviceType>("pc");

	useEffect(() => {
		const checkDevice = () => {
			setDevice(window.innerWidth <= MOBILE_WIDTH ? "mobile" : "pc");
		};

		checkDevice();
		window.addEventListener("resize", checkDevice);

		return () => window.removeEventListener("resize", checkDevice);
	}, []);

	return device;
};

export default useDeviceDetect;
