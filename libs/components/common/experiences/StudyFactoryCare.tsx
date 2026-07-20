import Link from 'next/link';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

interface StudyFactoryCareProps {
	className: string;
}

const CARE_ITEMS = [
	{
		id: 'management',
		label: '관리',
		src: '/images/study-factory/care-management.png',
		alt: '수험생의 일정과 학습 환경을 관리하는 자격증공장 공간',
	},
	{
		id: 'fruit',
		label: '과일',
		src: '/images/study-factory/care-fruit.png',
		alt: '수험생을 위한 과일과 건강한 간식',
	},
];

const StudyFactoryCare = ({ className }: StudyFactoryCareProps) => {
	return (
		<Stack component="section" className={className} aria-label="자격증공장 케어">
			{CARE_ITEMS.map((item) => (
				<Stack component={Link} href="/study-factory/about" key={item.id}>
					<Box component="img" src={item.src} alt={item.alt} />
					<Typography component="span">{item.label}</Typography>
				</Stack>
			))}
		</Stack>
	);
};

export default StudyFactoryCare;
