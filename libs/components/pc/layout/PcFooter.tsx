import Link from 'next/link';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { BRAND, FOOTER_LINK_GROUPS } from '../../../config';

const PcFooter = () => {
	return (
		<Box component="footer" className="pc-footer">
			<Stack direction="row" justifyContent="space-between" className="pc-footer__container">
				<Stack className="pc-footer__brand">
					<Typography component="span">{BRAND.englishName}</Typography>
					<Typography component="strong">{BRAND.koreanName}</Typography>
					<Typography component="p">{BRAND.sloganEn}</Typography>
				</Stack>

				<Stack direction="row" className="pc-footer__links">
					{FOOTER_LINK_GROUPS.map((group) => (
						<Stack key={group.title} className="pc-footer__group">
							<Typography component="strong">{group.title}</Typography>
							{group.links.map((link) => (
								<Link key={link.href} href={link.href}>
									{link.label}
								</Link>
							))}
						</Stack>
					))}
				</Stack>

				<Stack className="pc-footer__contact">
					<Typography component="span">Start a conversation</Typography>
					<Link href="/contact">
						{BRAND.email}
						<ArrowOutwardIcon fontSize="small" />
					</Link>
				</Stack>
			</Stack>
		</Box>
	);
};

export default PcFooter;
