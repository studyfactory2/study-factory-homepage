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
				<Typography component="p">{BRAND.sloganEn}</Typography>
			</Stack>

			<Stack className="mobile-footer__links">
				{FOOTER_LINK_GROUPS.flatMap((group) => group.links).map((link) => (
					<Link key={link.href} href={link.href}>
						{link.label}
					</Link>
				))}
			</Stack>

			<Link href="/contact" className="mobile-footer__email">
				{BRAND.email}
			</Link>
		</Stack>
	);
};

export default MobileFooter;
