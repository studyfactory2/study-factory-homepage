import { STUDY_FACTORY_JOURNEY } from '../../../config';
import StudyFactoryCarousel from './StudyFactoryCarousel';
import SoundFilm from './SoundFilm';
import StudyFactoryCare from './StudyFactoryCare';

interface StudyFactoryJourneyProps {
	classPrefix: 'pc-experience-page' | 'mobile-experience-page';
}

const StudyFactoryJourney = ({ classPrefix }: StudyFactoryJourneyProps) => {
	return (
		<>
			{STUDY_FACTORY_JOURNEY.map((block) => {
				if (block.type === 'film') {
					return (
						<SoundFilm
							key={block.id}
							src={block.src}
							alt={block.alt}
							className={`${classPrefix}__feature-film`}
							modifierClassName={block.isClosing ? `${classPrefix}__feature-film--closing` : undefined}
							copy={block.copy}
						/>
					);
				}

				if (block.type === 'care') {
					return <StudyFactoryCare key={block.id} className={`${classPrefix}__care`} items={block.items} />;
				}

				return (
					<StudyFactoryCarousel
						key={block.id}
						className={`${classPrefix}__gallery`}
						title={block.title}
						items={block.items}
					/>
				);
			})}
		</>
	);
};

export default StudyFactoryJourney;
