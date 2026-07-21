import Link from 'next/link';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { StudyFactoryJourneyCareItem } from '../../../config';

interface StudyFactoryCareProps {
	className: string;
	items: StudyFactoryJourneyCareItem[];
	ariaLabel?: string;
}

const StudyFactoryCare = ({ className, items, ariaLabel = '자격증공장 케어' }: StudyFactoryCareProps) => {
	return (
		<Stack component="section" className={className} aria-label={ariaLabel}>
			{items.map((item) => (
				<Stack component={Link} href={item.href} key={item.id}>
					<Box component="img" src={item.src} alt={item.alt} />
					<Typography component="span">{item.label}</Typography>
				</Stack>
			))}
		</Stack>
	);
};

export default StudyFactoryCare;
