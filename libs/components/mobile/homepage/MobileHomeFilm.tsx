import { useRef } from 'react';
import Link from 'next/link';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import useInViewVideo from '../../../hooks/useInViewVideo';
import type { HomeFeatureFilm } from '../../../config';

interface MobileHomeFilmProps {
	film: HomeFeatureFilm;
}

const MobileHomeFilm = ({ film }: MobileHomeFilmProps) => {
	const videoRef = useRef<HTMLVideoElement>(null);

	useInViewVideo(videoRef);

	return (
		<Box component="section" className={`mobile-home-film mobile-home-film--${film.slug}`}>
			<Box className="mobile-home-film__media" aria-hidden="true">
				<video ref={videoRef} muted loop playsInline preload="metadata">
					<source src={film.video} type="video/mp4" />
				</video>
			</Box>

			<Stack className="mobile-home-film__copy">
				<Typography component="p">{film.body}</Typography>
				<Box component={Link} href={film.href} className="mobile-home-film__link">
					{film.cta}
					<ArrowOutwardIcon fontSize="small" />
				</Box>
			</Stack>
		</Box>
	);
};

export default MobileHomeFilm;
