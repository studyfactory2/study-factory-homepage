import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArrowButton from '../../common/buttons/ArrowButton';
import { BRAND, EXAM_TYPES } from '../../../config';

const PcHomeHero = () => {
	return (
		<Box component="section" className="pc-home-hero">
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

				<Box className="pc-home-hero__film" aria-label="Study Factory editorial film area">
					<Stack className="pc-home-hero__film-meta">
						<span>01 Busan Evening</span>
						<span>02 Bookshelf Ritual</span>
						<span>03 Quiet Proof</span>
					</Stack>
					<Box className="pc-home-hero__film-frame">
						<AutoStoriesIcon />
					</Box>
					<Stack direction="row" className="pc-home-hero__proof">
						<span>Adult exams</span>
						<span>Private focus</span>
						<span>Research lab</span>
					</Stack>
				</Box>
			</Stack>

			<Stack direction="row" className="pc-home-hero__exams">
				{EXAM_TYPES.map((exam) => (
					<span key={exam}>{exam}</span>
				))}
			</Stack>
		</Box>
	);
};

export default PcHomeHero;
