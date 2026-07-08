import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const PcResearchLabPage = () => {
	return (
		<Box component="main" className="research-lab-page pc-research-lab-page">
			<Stack className="pc-page-hero">
				<Typography component="span" className="section-kicker">
					Study Factory Research Lab
				</Typography>
				<Typography component="h1">운영을 아는 제품 개발 스튜디오.</Typography>
				<Typography component="p">
					실제 공부 공간을 운영하며 발견한 문제를 웹, PWA, 내부 시스템으로 해결합니다. 자세한 Research Lab
					페이지는 별도 슬라이스에서 완성합니다.
				</Typography>
			</Stack>
		</Box>
	);
};

export default PcResearchLabPage;
