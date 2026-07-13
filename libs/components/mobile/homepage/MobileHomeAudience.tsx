import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { HOME_EXAM_GROUPS } from '../../../config';

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

			<Stack className="mobile-home-audience__exam-grid">
				{HOME_EXAM_GROUPS.map((group) => (
					<Stack key={group.title} className="mobile-home-audience__exam-card">
						<Typography component="strong">{group.title}</Typography>
						<Typography component="p">{group.body}</Typography>
						<Stack direction="row" className="mobile-home-audience__exam-tags">
							{group.exams.map((exam) => (
								<Typography key={exam} component="span">
									{exam}
								</Typography>
							))}
						</Stack>
					</Stack>
				))}
			</Stack>
		</Box>
	);
};

export default MobileHomeAudience;
