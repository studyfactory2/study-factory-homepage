import Link from 'next/link';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { HOME_EXPERIENCES } from '../../../config';

const PcHomeGateway = () => {
	return (
		<Box component="section" className="pc-home-gateway" aria-label="Study Factory experiences">
			<Stack direction="row" className="pc-home-gateway__grid">
				{HOME_EXPERIENCES.map((experience) => (
					<Box
						component={Link}
						href={experience.href}
						key={experience.id}
						className={`pc-home-gateway__panel pc-home-gateway__panel--${experience.id}`}
					>
						{experience.imageSrc && (
							<Box
								component="img"
								src={experience.imageSrc}
								alt={experience.imageAlt ?? ''}
								className="pc-home-gateway__image"
							/>
						)}
						<Box className="pc-home-gateway__veil" aria-hidden="true" />
						<Stack className="pc-home-gateway__panel-action">
							<Typography component="span" className="pc-home-gateway__panel-name">
								{experience.koreanName}
							</Typography>
							<Typography component="span" className="pc-home-gateway__link">
								자세히 보기
							</Typography>
						</Stack>
					</Box>
				))}
			</Stack>
			<Stack className="pc-home-gateway__brand-mark">
				<Typography component="h1">자격증공장</Typography>
			</Stack>
		</Box>
	);
};

export default PcHomeGateway;
