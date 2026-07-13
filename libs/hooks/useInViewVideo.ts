import { useEffect } from 'react';
import type { RefObject } from 'react';

const useInViewVideo = (videoRef: RefObject<HTMLVideoElement | null>) => {
	useEffect(() => {
		const video = videoRef.current;

		if (!video || typeof IntersectionObserver === 'undefined') return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					void video.play().catch(() => undefined);
					return;
				}

				video.pause();
			},
			{ threshold: 0.35 },
		);

		observer.observe(video);

		return () => observer.disconnect();
	}, [videoRef]);
};

export default useInViewVideo;
