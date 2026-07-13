import Stack from '@mui/material/Stack';
import { HOME_JAGONG_ONLINE_FILM, HOME_STUDY_FACTORY_FILM } from '../../../config';
import PcHomeAudience from './PcHomeAudience';
import PcHomeFilm from './PcHomeFilm';
import PcHomeFocus from './PcHomeFocus';
import PcHomeHero from './PcHomeHero';
import PcHomeProducts from './PcHomeProducts';

const PcHomePage = () => {
	return (
		<Stack component="main" className="home-page pc-home-page">
			<PcHomeHero />
			<PcHomeFocus />
			<PcHomeFilm film={HOME_STUDY_FACTORY_FILM} />
			<PcHomeAudience />
			{HOME_JAGONG_ONLINE_FILM.video && <PcHomeFilm film={HOME_JAGONG_ONLINE_FILM} />}
			<PcHomeProducts />
		</Stack>
	);
};

export default PcHomePage;
