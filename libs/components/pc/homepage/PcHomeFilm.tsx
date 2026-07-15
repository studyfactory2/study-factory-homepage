import { useRef, useState } from 'react';
import Link from 'next/link';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import useInViewVideo from '../../../hooks/useInViewVideo';
import type { HomeFeatureFilm } from '../../../config';

interface PcHomeFilmProps {
	film: HomeFeatureFilm;
}

const PcHomeFilm = ({ film }: PcHomeFilmProps) => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const isStudyFactoryFilm = film.slug === 'study-factory';
	const [soundEnabled, setSoundEnabled] = useState(false);

	useInViewVideo(videoRef);

	const toggleSound = () => {
		const video = videoRef.current;

		if (!video) return;

		if (soundEnabled) {
			video.muted = true;
			setSoundEnabled(false);
			return;
		}

		video.muted = false;
		video.volume = 1;
		setSoundEnabled(true);
		void video.play().catch(() => {
			video.muted = true;
			setSoundEnabled(false);
		});
	};

	return (
		<Box component="section" className={`pc-home-film pc-home-film--${film.slug}`}>
			<Box className="pc-home-film__media" aria-hidden={isStudyFactoryFilm ? undefined : true}>
				<video
					ref={videoRef}
					autoPlay={isStudyFactoryFilm}
					muted={!soundEnabled}
					loop
					playsInline
					preload="metadata"
					onVolumeChange={(event) => setSoundEnabled(!event.currentTarget.muted)}
				>
					<source src={film.video} type="video/mp4" />
				</video>
			</Box>

			{isStudyFactoryFilm && (
				<>
					<Box component={Link} href={film.href} className="pc-home-film__video-cta">
						{film.cta}
						<ArrowOutwardIcon fontSize="small" />
					</Box>
					<IconButton
						className="pc-home-film__sound"
						onClick={toggleSound}
						aria-label={soundEnabled ? '음악 끄기' : '음악 켜기'}
					>
						{soundEnabled ? <VolumeUpIcon /> : <VolumeOffIcon />}
					</IconButton>
				</>
			)}

			{!isStudyFactoryFilm && (
				<Stack className="pc-home-film__container">
					<Stack className="pc-home-film__detail">
						<Typography component="p">{film.body}</Typography>
						<Box component={Link} href={film.href} className="pc-home-film__link">
							{film.cta}
							<ArrowOutwardIcon fontSize="small" />
						</Box>
					</Stack>
				</Stack>
			)}
		</Box>
	);
};

export default PcHomeFilm;
