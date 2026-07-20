import Link from 'next/link';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { ExperienceLanding, ExperienceMedia } from '../../../config';
import StudyFactoryOrigin from '../../common/experiences/StudyFactoryOrigin';

interface MobileExperienceLandingProps {
	experience: ExperienceLanding;
}

const MobileExperienceMedia = ({ item }: { item: ExperienceMedia }) => {
	if (item.type === 'video') {
		return (
			<video autoPlay muted loop playsInline preload="metadata" aria-label={item.alt}>
				<source src={item.src} type="video/mp4" />
			</video>
		);
	}

	return <Box component="img" src={item.src} alt={item.alt} />;
};

const MobileExperienceLanding = ({ experience }: MobileExperienceLandingProps) => {
	return (
		<Box component="main" className={`experience-page mobile-experience-page mobile-experience-page--${experience.slug}`}>
			<Box component="section" className="mobile-experience-page__hero">
				<MobileExperienceMedia item={experience.hero} />
				<Box className="mobile-experience-page__hero-veil" aria-hidden="true" />
				<Stack className="mobile-experience-page__hero-copy">
					<Typography component="span">{experience.eyebrow}</Typography>
					<Typography component="h1">{experience.name}</Typography>
					<Link href={experience.aboutHref}>자세히 보기</Link>
				</Stack>
			</Box>

			{experience.slug === 'study-factory' && <StudyFactoryOrigin className="mobile-experience-page__origin" />}

			<Stack component="section" className="mobile-experience-page__media-list">
				{experience.media.map((item) => (
					<Box
						component={Link}
						href={item.href}
						key={item.id}
						className={`mobile-experience-page__media-card mobile-experience-page__media-card--${item.type}`}
					>
						<MobileExperienceMedia item={item} />
						<Box className="mobile-experience-page__media-veil" aria-hidden="true" />
						<Stack className="mobile-experience-page__media-copy">
							<Typography component="strong">{item.label}</Typography>
							<Typography component="span">자세히 보기</Typography>
						</Stack>
					</Box>
				))}
			</Stack>
		</Box>
	);
};

export default MobileExperienceLanding;
