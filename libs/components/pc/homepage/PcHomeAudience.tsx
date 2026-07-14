import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ExamMarquee from '../../common/homepage/ExamMarquee';

const PcHomeAudience = () => {
	return (
		<Box component="section" className="pc-home-audience">
			<Stack direction="row" className="pc-home-audience__container">
				<Stack className="pc-home-audience__copy">
					<Typography component="span" className="section-kicker">
						For Adult Exams
					</Typography>
					<Typography component="h2">긴 시험을 준비하는 성인 수험생을 위해</Typography>
					<Typography component="p">
						강의보다 생활 구조가 더 중요해지는 순간이 있습니다. 자격증공장은 그 순간을 버틸 수 있는 조용한
						밀도와 운영 기준을 만듭니다.
					</Typography>
				</Stack>

				<ExamMarquee />
			</Stack>
		</Box>
	);
};

export default PcHomeAudience;
