import { useRef, useState } from 'react';
import Link from 'next/link';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import useInViewVideo from '../../../hooks/useInViewVideo';
import { MEDIA_ASSETS, type HomeFeatureFilm } from '../../../config';

interface MobileHomeFilmProps {
	film: HomeFeatureFilm;
}

const MobileHomeFilm = ({ film }: MobileHomeFilmProps) => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const isStudyFactoryFilm = film.slug === 'study-factory';
	const videoSource = isStudyFactoryFilm ? MEDIA_ASSETS.studyFactoryFilmMobile : film.video;
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
		<Box component="section" className={`mobile-home-film mobile-home-film--${film.slug}`}>
			<Box className="mobile-home-film__media" aria-hidden={isStudyFactoryFilm ? undefined : true}>
				<video
					ref={videoRef}
					autoPlay={isStudyFactoryFilm}
					muted={!soundEnabled}
					loop
					playsInline
					preload="metadata"
					onVolumeChange={(event) => setSoundEnabled(!event.currentTarget.muted)}
				>
					<source src={videoSource} type="video/mp4" />
				</video>
			</Box>

			<Box component={Link} href={film.href} className="mobile-home-film__video-cta">
				{film.cta}
				<ArrowOutwardIcon fontSize="small" />
			</Box>

			{isStudyFactoryFilm && (
				<IconButton
					className="mobile-home-film__sound"
					onClick={toggleSound}
					aria-label={soundEnabled ? '음악 끄기' : '음악 켜기'}
				>
					{soundEnabled ? <VolumeUpIcon /> : <VolumeOffIcon />}
				</IconButton>
			)}
		</Box>
	);
};

export default MobileHomeFilm;
