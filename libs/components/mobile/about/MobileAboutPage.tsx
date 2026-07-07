import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { BRAND } from '../../../config';

const MobileAboutPage = () => {
	return (
		<Box component="main" className="about-page mobile-about-page">
			<Stack className="mobile-page-hero">
				<Typography component="span" className="section-kicker">
					About
				</Typography>
				<Typography component="h1">{BRAND.koreanName}은 공부를 방해하는 것을 줄입니다.</Typography>
				<Typography component="p">공간, 장비, 분위기, 루틴을 정리해 공부만 남기는 환경을 만듭니다.</Typography>
			</Stack>
		</Box>
	);
};

export default MobileAboutPage;
