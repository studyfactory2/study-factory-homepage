import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ContactForm from '../../common/forms/ContactForm';
import { BRAND } from '../../../config';

const MobileContactPage = () => {
	return (
		<Box component="main" className="contact-page mobile-contact-page">
			<Stack className="mobile-page-hero">
				<Typography component="span" className="section-kicker">
					Contact
				</Typography>
				<Typography component="h1">상담과 제품 문의를 시작합니다.</Typography>
				<Typography component="p">공간 상담, 앱, 웹 제작 문의를 보내주세요.</Typography>
				<Typography component="strong">{BRAND.email}</Typography>
			</Stack>
			<ContactForm />
		</Box>
	);
};

export default MobileContactPage;
