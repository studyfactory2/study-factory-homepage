import Link from 'next/link';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { HOME_EXPERIENCES } from '../../../config';

const MobileHomeGateway = () => {
	return (
		<Box component="section" className="mobile-home-gateway" aria-label="Study Factory experiences">
			<Stack className="mobile-home-gateway__grid">
				{HOME_EXPERIENCES.map((experience) => (
					<Box
						component={Link}
						href={experience.href}
						key={experience.id}
						className={`mobile-home-gateway__panel mobile-home-gateway__panel--${experience.id}`}
					>
						<Box component="img" src={experience.imageSrc} alt={experience.imageAlt ?? ''} className="mobile-home-gateway__image" />
						<Box className="mobile-home-gateway__veil" aria-hidden="true" />
						<Stack className="mobile-home-gateway__panel-action">
							<Typography component="span" className="mobile-home-gateway__panel-name">
								{experience.koreanName}
							</Typography>
							<Typography component="span" className="mobile-home-gateway__link">
								자세히 보기
							</Typography>
						</Stack>
					</Box>
				))}
			</Stack>
			<Stack className="mobile-home-gateway__brand-mark">
				<Typography component="h1">자격증공장</Typography>
			</Stack>
		</Box>
	);
};

export default MobileHomeGateway;
