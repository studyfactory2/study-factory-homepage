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
					<a href={`mailto:${BRAND.email}`} className="pc-footer__email">
						<span className="pc-footer__email-text">{BRAND.email}</span>
						<ArrowOutwardIcon fontSize="small" />
					</a>
					<Stack className="pc-footer__phones">
						<a href={`tel:${BRAND.studyFactoryPhone}`}>
							<span>Study Factory: </span>
							{BRAND.studyFactoryPhone}
						</a>
						<a href={`tel:${BRAND.researchLabPhone}`}>
							<span>Research Lab: </span>
							{BRAND.researchLabPhone}
						</a>
					</Stack>
				</Stack>
			</Stack>
		</Box>
	);
};

export default PcFooter;
