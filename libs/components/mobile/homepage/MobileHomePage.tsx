import Stack from '@mui/material/Stack';
import MobileHomeFocus from './MobileHomeFocus';
import MobileHomeHero from './MobileHomeHero';
import MobileHomeProducts from './MobileHomeProducts';

const MobileHomePage = () => {
	return (
		<Stack component="main" className="home-page mobile-home-page">
			<MobileHomeHero />
			<MobileHomeFocus />
			<MobileHomeProducts />
		</Stack>
	);
};

export default MobileHomePage;
