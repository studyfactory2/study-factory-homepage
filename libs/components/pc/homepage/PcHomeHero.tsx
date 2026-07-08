import Link from 'next/link';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { BRAND, MEDIA_ASSETS } from '../../../config';

const PcHomeHero = () => {
	return (
		<Box component="section" className="pc-home-hero">
			<Box className="pc-home-hero__media" aria-hidden="true">
				<video autoPlay muted loop playsInline preload="metadata">
					<source src={MEDIA_ASSETS.heroVideo} type="video/mp4" />
				</video>
			</Box>

			<Stack className="pc-home-hero__container">
				<Stack className="pc-home-hero__copy">
					<Typography component="strong">
						{BRAND.sloganEn} · {BRAND.koreanName}
					</Typography>

					<Stack direction="row" className="pc-home-hero__actions">
						<Box component={Link} href="/contact" className="pc-home-hero__link">
							상담 예약
						</Box>
						<Box component={Link} href="/about" className="pc-home-hero__link">
							공간 둘러보기
						</Box>
					</Stack>
				</Stack>
			</Stack>
		</Box>
	);
};

export default PcHomeHero;
