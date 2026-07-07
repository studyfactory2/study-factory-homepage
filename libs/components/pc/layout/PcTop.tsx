import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { BRAND, NAVIGATION_ITEMS } from '../../../config';

const PcTop = () => {
	const router = useRouter();
	const nextLocale = router.locale === 'ko' ? 'en' : 'ko';

	return (
		<Stack component="header" className="pc-top">
			<Stack direction="row" alignItems="center" justifyContent="space-between" className="pc-top__container">
				<Link href="/" className="pc-top__brand">
					<Typography component="span">{BRAND.englishName}</Typography>
					<Typography component="strong">{BRAND.koreanName}</Typography>
				</Link>

				<Stack component="nav" direction="row" alignItems="center" className="pc-top__nav">
					{NAVIGATION_ITEMS.map((item) => (
						<Link key={item.href} href={item.href} className="pc-top__nav-link">
							{item.label}
						</Link>
					))}
				</Stack>

				<Stack direction="row" alignItems="center" className="pc-top__actions">
					<Button component={Link} href={router.asPath} locale={nextLocale} variant="outlined" className="pc-top__locale">
						{nextLocale.toUpperCase()}
					</Button>
					<Button component={Link} href="/contact" variant="contained">
						상담 예약
					</Button>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default PcTop;
