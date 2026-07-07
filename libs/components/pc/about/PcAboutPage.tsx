import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { BRAND } from '../../../config';

const PcAboutPage = () => {
	return (
		<Box component="main" className="about-page pc-about-page">
			<Stack className="pc-page-hero">
				<Typography component="span" className="section-kicker">
					About
				</Typography>
				<Typography component="h1">{BRAND.koreanName}은 공부를 방해하는 것을 줄이는 회사입니다.</Typography>
				<Typography component="p">
					우리는 화려한 설명보다 매일 책상 앞에 앉는 힘을 중요하게 봅니다. 공간은 조용하고, 장비는 준비되어
					있고, 루틴은 단단하게 반복됩니다.
				</Typography>
			</Stack>
		</Box>
	);
};

export default PcAboutPage;
