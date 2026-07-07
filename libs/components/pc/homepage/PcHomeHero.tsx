import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArrowButton from '../../common/buttons/ArrowButton';
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
					<Typography component="span" className="section-kicker">
						{BRAND.englishName}
					</Typography>
					<Typography component="h1">{BRAND.sloganEn}</Typography>
					<Typography component="strong">{BRAND.koreanName}</Typography>
					<Typography component="p">
						부산에서 시작하는 성인 수험생의 집중 루틴. 공간, 장비, 분위기, 시스템을 한 방향으로 정렬해
						공부만 남깁니다.
					</Typography>

					<Stack direction="row" className="pc-home-hero__actions">
						<ArrowButton href="/contact" label="상담 예약" />
						<ArrowButton href="/products" label="Products" variant="outlined" />
					</Stack>
				</Stack>
			</Stack>
		</Box>
	);
};

export default PcHomeHero;
