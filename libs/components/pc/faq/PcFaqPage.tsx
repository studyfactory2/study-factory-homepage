import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const PcFaqPage = () => {
	return (
		<Box component="main" className="faq-page pc-faq-page">
			<Stack className="pc-page-hero">
				<Typography component="span" className="section-kicker">
					FAQ
				</Typography>
				<Typography component="h1">상담 전 자주 묻는 질문을 정리합니다.</Typography>
				<Typography component="p">
					성인 이용 가능 여부, 좌석 정책, 체험, 앱 사용, 가격과 상담 흐름은 Contact 슬라이스에서 함께
					정리합니다.
				</Typography>
			</Stack>
		</Box>
	);
};

export default PcFaqPage;
