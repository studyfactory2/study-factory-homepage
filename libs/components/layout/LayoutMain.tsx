import type { ComponentType } from "react";
import Footer from "./Footer";
import Top from "./Top";
import useDeviceDetect from "../../hooks/useDeviceDetect";

const LayoutMain = <P extends object>(Component: ComponentType<P>) => {
	const WithLayoutMain = (props: P) => {
		const device = useDeviceDetect();

		return (
			<div id={device === "mobile" ? "mobile-wrap" : "pc-wrap"}>
				<Top />
				<main className="layout-main">
					<Component {...props} />
				</main>
				<Footer />
			</div>
		);
	};

	return WithLayoutMain;
};

export default LayoutMain;
