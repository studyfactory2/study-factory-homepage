import Stack from '@mui/material/Stack';
import { HOME_JAGONG_ONLINE_FILM, HOME_STUDY_FACTORY_FILM } from '../../../config';
import MobileHomeAudience from './MobileHomeAudience';
import MobileHomeFilm from './MobileHomeFilm';
import MobileHomeFocus from './MobileHomeFocus';
import MobileHomeHero from './MobileHomeHero';
import MobileHomeProducts from './MobileHomeProducts';

const MobileHomePage = () => {
	return (
		<Stack component="main" className="home-page mobile-home-page">
			<MobileHomeHero />
			<MobileHomeFocus />
			<MobileHomeFilm film={HOME_STUDY_FACTORY_FILM} />
			<MobileHomeAudience />
			{HOME_JAGONG_ONLINE_FILM.video && <MobileHomeFilm film={HOME_JAGONG_ONLINE_FILM} />}
			<MobileHomeProducts />
		</Stack>
	);
};

export default MobileHomePage;
