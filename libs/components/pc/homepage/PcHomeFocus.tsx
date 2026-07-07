import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const focusItems = [
	{
		kicker: 'Private Focus',
		title: '공부만 남기는 공간',
		body: '좌석, 조명, 콘센트, 온도, 소음까지 수험생이 신경 쓰지 않아도 되는 상태로 정리합니다.',
	},
	{
		kicker: 'Daily Rhythm',
		title: '흔들리지 않는 루틴',
		body: '같은 시간에 도착하고, 같은 자리에서 시작하고, 작은 성취가 쌓이도록 흐름을 설계합니다.',
	},
	{
		kicker: 'Adult Exams',
		title: '성인 시험에 맞춘 분위기',
		body: '자격증, 공무원, 전문직 시험을 준비하는 성인 수험생에게 맞는 차분한 밀도를 만듭니다.',
	},
];

const PcHomeFocus = () => {
	return (
		<Box component="section" className="pc-home-focus">
			<Stack className="pc-section-head">
				<Typography component="span" className="section-kicker">
					Study Factory
				</Typography>
				<Typography component="h2">수험생이 다시 집중하게 되는 순간을 설계합니다.</Typography>
			</Stack>

			<Stack direction="row" className="pc-home-focus__grid">
				{focusItems.map((item) => (
					<Stack key={item.kicker} className="pc-home-focus__card">
						<CheckCircleOutlineIcon />
						<Typography component="span">{item.kicker}</Typography>
						<Typography component="strong">{item.title}</Typography>
						<Typography component="p">{item.body}</Typography>
					</Stack>
				))}
			</Stack>
		</Box>
	);
};

export default PcHomeFocus;
