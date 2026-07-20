import Link from 'next/link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { BRAND, FOOTER_LINK_GROUPS } from '../../../config';

const MobileFooter = () => {
	return (
		<Stack component="footer" className="mobile-footer">
			<Stack className="mobile-footer__brand">
				<Typography component="span">{BRAND.englishName}</Typography>
				<Typography component="strong">{BRAND.koreanName}</Typography>
				<Typography component="p">공부를 지속할 수 있는 환경과 루틴을 만듭니다.</Typography>
			</Stack>

			<Stack className="mobile-footer__links">
				{FOOTER_LINK_GROUPS.flatMap((group) => group.links).map((link) => (
					<Link key={link.href} href={link.href}>
						{link.label}
					</Link>
				))}
			</Stack>

			<a href={`mailto:${BRAND.email}`} className="mobile-footer__email">
				{BRAND.email}
			</a>

			<Stack className="mobile-footer__phones">
				<a href={`tel:${BRAND.studyFactoryPhone}`}>
					<span>자격증공장</span>
					{BRAND.studyFactoryPhone}
				</a>
			</Stack>
		</Stack>
	);
};

export default MobileFooter;
