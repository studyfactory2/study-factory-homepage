import { useRef, useState } from 'react';
import VolumeOffRoundedIcon from '@mui/icons-material/VolumeOffRounded';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

interface SoundFilmProps {
	src: string;
	alt: string;
	className: string;
}

const SoundFilm = ({ src, alt, className }: SoundFilmProps) => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [muted, setMuted] = useState(true);

	const toggleSound = async () => {
		const video = videoRef.current;
		if (!video) return;

		const nextMuted = !video.muted;
		video.muted = nextMuted;
		setMuted(nextMuted);

		if (!nextMuted) {
			try {
				await video.play();
			} catch {
				video.muted = true;
				setMuted(true);
			}
		}
	};

	return (
		<Box component="section" className={className} aria-label={alt}>
			<video ref={videoRef} autoPlay muted={muted} loop playsInline preload="metadata">
				<source src={src} type="video/mp4" />
			</video>
			<IconButton
				className={`${className}__sound-toggle`}
				onClick={toggleSound}
				aria-label={muted ? '영상 소리 켜기' : '영상 소리 끄기'}
			>
				{muted ? <VolumeOffRoundedIcon /> : <VolumeUpRoundedIcon />}
			</IconButton>
		</Box>
	);
};

export default SoundFilm;
