import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const focusItems = [
	'공부만 남기는 공간',
	'흔들리지 않는 루틴',
	'성인 시험에 맞춘 분위기',
];

const MobileHomeFocus = () => {
	return (
		<Box component="section" className="mobile-home-focus">
			<Typography component="span" className="section-kicker">
				Study Factory
			</Typography>
			<Typography component="h2">다시 집중하게 되는 순간을 설계합니다.</Typography>
			<Stack className="mobile-home-focus__list">
				{focusItems.map((item) => (
					<Stack key={item} direction="row" alignItems="center">
						<CheckCircleOutlineIcon />
						<Typography component="strong">{item}</Typography>
					</Stack>
				))}
			</Stack>
		</Box>
	);
};

export default MobileHomeFocus;
