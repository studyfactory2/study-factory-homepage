import Stack from '@mui/material/Stack';
import PcHomeFocus from './PcHomeFocus';
import PcHomeHero from './PcHomeHero';
import PcHomeProducts from './PcHomeProducts';

const PcHomePage = () => {
	return (
		<Stack component="main" className="home-page pc-home-page">
			<PcHomeHero />
			<PcHomeFocus />
			<PcHomeProducts />
		</Stack>
	);
};

export default PcHomePage;
