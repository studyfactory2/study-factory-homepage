import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArrowButton from '../../common/buttons/ArrowButton';
import { BRAND, EXAM_TYPES } from '../../../config';

const MobileHomeHero = () => {
	return (
		<Box component="section" className="mobile-home-hero">
			<Stack className="mobile-home-hero__copy">
				<Typography component="span" className="section-kicker">
					{BRAND.englishName}
				</Typography>
				<Typography component="h1">{BRAND.sloganEn}</Typography>
				<Typography component="strong">{BRAND.koreanName}</Typography>
				<Typography component="p">공간, 장비, 분위기, 시스템을 정렬해 공부만 남기는 성인 수험생의 집중 루틴.</Typography>
			</Stack>

			<Box className="mobile-home-hero__film">
				<AutoStoriesIcon />
			</Box>

			<Stack direction="row" className="mobile-home-hero__actions">
				<ArrowButton href="/contact" label="상담 예약" />
				<ArrowButton href="/products" label="Products" variant="outlined" />
			</Stack>

			<Stack direction="row" className="mobile-home-hero__exams">
				{EXAM_TYPES.map((exam) => (
					<span key={exam}>{exam}</span>
				))}
			</Stack>
		</Box>
	);
};

export default MobileHomeHero;
