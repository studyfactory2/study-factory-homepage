import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArrowButton from '../../common/buttons/ArrowButton';
import { BRAND, MEDIA_ASSETS } from '../../../config';

const MobileHomeHero = () => {
	return (
		<Box component="section" className="mobile-home-hero">
			<Box className="mobile-home-hero__media" aria-hidden="true">
				<video autoPlay muted loop playsInline preload="metadata">
					<source src={MEDIA_ASSETS.heroVideo} type="video/mp4" />
				</video>
			</Box>

			<Stack className="mobile-home-hero__copy">
				<Typography component="span" className="section-kicker">
					{BRAND.englishName}
				</Typography>
				<Typography component="h1">공부만 남기는 공간</Typography>
				<Typography component="p">성인 수험생의 하루를 좌석, 출석, 루틴, 상담으로 정렬합니다.</Typography>
				<Typography component="strong">
					{BRAND.sloganEn} · {BRAND.koreanName}
				</Typography>
				<Stack direction="row" className="mobile-home-hero__actions">
					<ArrowButton href="/contact" label="상담 예약" />
					<ArrowButton href="/about" label="둘러보기" variant="outlined" />
				</Stack>
			</Stack>
		</Box>
	);
};

export default MobileHomeHero;
