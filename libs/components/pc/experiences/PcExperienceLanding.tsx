import Link from 'next/link';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { ExperienceLanding, ExperienceMedia } from '../../../config';

interface PcExperienceLandingProps {
	experience: ExperienceLanding;
}

const ExperienceMediaVisual = ({ item, priority = false }: { item: ExperienceMedia; priority?: boolean }) => {
	if (item.type === 'video') {
		return (
			<video autoPlay muted loop playsInline preload={priority ? 'auto' : 'metadata'} aria-label={item.alt}>
				<source src={item.src} type="video/mp4" />
			</video>
		);
	}

	return <Box component="img" src={item.src} alt={item.alt} />;
};

const PcExperienceLanding = ({ experience }: PcExperienceLandingProps) => {
	return (
		<Box component="main" className={`experience-page pc-experience-page pc-experience-page--${experience.slug}`}>
			<Box component="section" className="pc-experience-page__hero">
				<ExperienceMediaVisual item={experience.hero} priority />
				<Box className="pc-experience-page__hero-veil" aria-hidden="true" />
				<Stack className="pc-experience-page__hero-copy">
					<Typography component="span">{experience.eyebrow}</Typography>
					<Typography component="h1">{experience.name}</Typography>
					<Typography component="p">{experience.description}</Typography>
					<Link href={experience.aboutHref}>자세히 보기</Link>
				</Stack>
			</Box>

			<Stack component="section" className="pc-experience-page__media-grid">
				{experience.media.map((item, index) => (
					<Box
						component={Link}
						href={item.href}
						key={item.id}
						className={`pc-experience-page__media-card pc-experience-page__media-card--${item.type}`}
					>
						<ExperienceMediaVisual item={item} />
						<Box className="pc-experience-page__media-veil" aria-hidden="true" />
						<Stack className="pc-experience-page__media-copy">
							<Typography component="span">0{index + 1}</Typography>
							<Typography component="strong">{item.label}</Typography>
							<Typography component="em">자세히 보기</Typography>
						</Stack>
					</Box>
				))}
			</Stack>
		</Box>
	);
};

export default PcExperienceLanding;
