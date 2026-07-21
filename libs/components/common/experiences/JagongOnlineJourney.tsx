import { JAGONG_ONLINE_JOURNEY } from '../../../config';
import SoundFilm from './SoundFilm';
import StudyFactoryCare from './StudyFactoryCare';
import StudyFactoryCarousel from './StudyFactoryCarousel';

interface JagongOnlineJourneyProps {
	classPrefix: 'pc-experience-page' | 'mobile-experience-page';
}

const JagongOnlineJourney = ({ classPrefix }: JagongOnlineJourneyProps) => {
	return (
		<>
			{JAGONG_ONLINE_JOURNEY.map((block) => {
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
					return (
						<StudyFactoryCare
							key={block.id}
							className={`${classPrefix}__care`}
							ariaLabel="재택근무반 온라인 관리"
							items={block.items}
						/>
					);
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

export default JagongOnlineJourney;
