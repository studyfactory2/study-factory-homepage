import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const MobileResearchLabPage = () => {
	return (
		<Box component="main" className="research-lab-page mobile-research-lab-page">
			<Stack className="mobile-page-hero">
				<Typography component="span" className="section-kicker">
					Research Lab
				</Typography>
				<Typography component="h1">운영을 아는 제품 개발 스튜디오.</Typography>
				<Typography component="p">
					공부 공간에서 발견한 문제를 웹, PWA, 내부 시스템으로 해결합니다. 전체 페이지는 다음 슬라이스에서
					완성합니다.
				</Typography>
			</Stack>
		</Box>
	);
};

export default MobileResearchLabPage;
