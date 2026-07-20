import { useEffect, useState } from 'react';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import type { StudyFactoryJourneyGalleryItem } from '../../../config';

interface StudyFactoryCarouselProps {
	className: string;
	title: string;
	items: StudyFactoryJourneyGalleryItem[];
}

const StudyFactoryCarousel = ({ className, title, items }: StudyFactoryCarouselProps) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const activeItem = items[activeIndex];

	useEffect(() => {
		if (items.length < 2) return undefined;

		const interval = window.setInterval(() => {
			setActiveIndex((index) => (index + 1) % items.length);
		}, 6000);

		return () => window.clearInterval(interval);
	}, [items.length]);

	if (!activeItem) return null;

	const showPrevious = () => setActiveIndex((index) => (index - 1 + items.length) % items.length);
	const showNext = () => setActiveIndex((index) => (index + 1) % items.length);

	return (
		<Box component="section" className={className} aria-label={title}>
			<Box component="img" src={activeItem.src} alt={activeItem.alt} />
			<Box className={`${className}__veil`} aria-hidden="true" />
			<Typography component="h2">{title}</Typography>
			<IconButton className={`${className}__arrow ${className}__arrow--previous`} onClick={showPrevious} aria-label="이전 사진">
				<ArrowBackRoundedIcon />
			</IconButton>
			<IconButton className={`${className}__arrow ${className}__arrow--next`} onClick={showNext} aria-label="다음 사진">
				<ArrowForwardRoundedIcon />
			</IconButton>
			<Box className={`${className}__dots`} aria-label="사진 선택">
				{items.map((item, index) => (
					<button
						key={item.id}
						type="button"
						className={index === activeIndex ? 'is-active' : undefined}
						onClick={() => setActiveIndex(index)}
						aria-label={`${index + 1}번 사진 보기`}
						aria-current={index === activeIndex ? 'true' : undefined}
					/>
				))}
			</Box>
		</Box>
	);
};

export default StudyFactoryCarousel;
