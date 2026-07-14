import { useEffect, useRef, useState } from 'react';

const useInViewOnce = <T extends HTMLElement>(rootMargin = '0px 0px -10% 0px') => {
	const ref = useRef<T>(null);
	const [isInView, setIsInView] = useState(false);

	useEffect(() => {
		const element = ref.current;

		if (!element || isInView) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsInView(true);
					observer.disconnect();
				}
			},
			{ rootMargin, threshold: 0.12 },
		);

		observer.observe(element);
		return () => observer.disconnect();
	}, [isInView, rootMargin]);

	return { ref, isInView };
};

export default useInViewOnce;
