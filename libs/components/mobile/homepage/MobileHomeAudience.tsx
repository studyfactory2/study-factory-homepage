import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ExamMarquee from '../../common/homepage/ExamMarquee';

const MobileHomeAudience = () => {
	return (
		<Box component="section" className="mobile-home-audience">
			<Typography component="span" className="section-kicker">
				For Adult Exams
			</Typography>
			<Typography component="h2">긴 시험을 준비하는 성인 수험생을 위해</Typography>
			<Typography component="p" className="mobile-home-audience__intro">
				강의보다 생활 구조가 더 중요해지는 순간이 있습니다. 조용한 밀도와 운영 기준으로 장기 수험 생활을 돕습니다.
			</Typography>

			<ExamMarquee />
		</Box>
	);
};

export default MobileHomeAudience;
