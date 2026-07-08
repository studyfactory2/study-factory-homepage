import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const MobileFaqPage = () => {
	return (
		<Box component="main" className="faq-page mobile-faq-page">
			<Stack className="mobile-page-hero">
				<Typography component="span" className="section-kicker">
					FAQ
				</Typography>
				<Typography component="h1">상담 전 자주 묻는 질문.</Typography>
				<Typography component="p">FAQ 내용은 Contact 슬라이스에서 상담 흐름과 함께 정리합니다.</Typography>
			</Stack>
		</Box>
	);
};

export default MobileFaqPage;
