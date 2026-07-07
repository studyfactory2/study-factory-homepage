import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { BRAND, NAVIGATION_ITEMS } from '../../../config';

const MobileTop = () => {
	const [open, setOpen] = useState(false);
	const router = useRouter();
	const nextLocale = router.locale === 'ko' ? 'en' : 'ko';

	return (
		<Stack component="header" className="mobile-top">
			<Stack direction="row" alignItems="center" justifyContent="space-between" className="mobile-top__bar">
				<Link href="/" className="mobile-top__brand">
					<Typography component="span">{BRAND.englishName}</Typography>
					<Typography component="strong">{BRAND.koreanName}</Typography>
				</Link>

				<IconButton aria-label="Open navigation" onClick={() => setOpen(true)} className="mobile-top__menu">
					<MenuIcon />
				</IconButton>
			</Stack>

			<Drawer anchor="right" open={open} onClose={() => setOpen(false)} className="mobile-nav-drawer">
				<Stack className="mobile-nav-drawer__content">
					<Stack direction="row" alignItems="center" justifyContent="space-between" className="mobile-nav-drawer__head">
						<Typography component="strong">{BRAND.koreanName}</Typography>
						<IconButton aria-label="Close navigation" onClick={() => setOpen(false)}>
							<CloseIcon />
						</IconButton>
					</Stack>

					<Stack component="nav" className="mobile-nav-drawer__links">
						{NAVIGATION_ITEMS.map((item) => (
							<Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
								{item.label}
							</Link>
						))}
					</Stack>

					<Stack className="mobile-nav-drawer__actions">
						<Button component={Link} href={router.asPath} locale={nextLocale} variant="outlined">
							{nextLocale.toUpperCase()}
						</Button>
						<Button component={Link} href="/contact" variant="contained" onClick={() => setOpen(false)}>
							상담 예약
						</Button>
					</Stack>
				</Stack>
			</Drawer>
		</Stack>
	);
};

export default MobileTop;
