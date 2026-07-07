import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ContactForm from '../../common/forms/ContactForm';
import { BRAND } from '../../../config';

const PcContactPage = () => {
	return (
		<Box component="main" className="contact-page pc-contact-page">
			<Stack direction="row" justifyContent="space-between" className="pc-contact-page__grid">
				<Stack className="pc-page-hero">
					<Typography component="span" className="section-kicker">
						Contact
					</Typography>
					<Typography component="h1">상담과 제품 문의를 한 곳에서 시작합니다.</Typography>
					<Typography component="p">
						학습 공간 상담, Study Factory App, Research Lab 제작 문의를 보내주세요. 답변 흐름은 이후
						백엔드 또는 외부 폼 서비스와 연결합니다.
					</Typography>
					<Typography component="strong">{BRAND.email}</Typography>
				</Stack>
				<ContactForm />
			</Stack>
		</Box>
	);
};

export default PcContactPage;
