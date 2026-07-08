import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { HOME_EXAM_GROUPS, HOME_SYSTEM_STEPS } from '../../../config';

const MobileHomeFocus = () => {
	return (
		<Box component="section" className="mobile-home-focus">
			<Stack className="mobile-home-focus__story">
				<Typography component="span" className="section-kicker">
					Study Operating System
				</Typography>
				<Typography component="h2">무너지는 것은 의지가 아니라 루틴입니다.</Typography>
				<Typography component="p">
					자격증공장은 성인 수험생이 매일 같은 상태로 책상 앞에 앉을 수 있도록 공간과 운영 흐름을 정리합니다.
				</Typography>
			</Stack>

			<Stack className="mobile-home-focus__statement">
				<Typography component="span">System over mood</Typography>
				<Typography component="strong">공부 외의 결정을 줄입니다.</Typography>
				<Typography component="p">좌석, 출석, 루틴, 공지, 상담이 하나의 흐름으로 이어집니다.</Typography>
			</Stack>

			<Stack className="mobile-home-focus__steps">
				{HOME_SYSTEM_STEPS.map((step) => (
					<Stack key={step.number} direction="row" className="mobile-home-focus__step">
						<Typography component="span">{step.number}</Typography>
						<Stack>
							<Typography component="strong">{step.title}</Typography>
							<Typography component="p">{step.body}</Typography>
						</Stack>
					</Stack>
				))}
			</Stack>

			<Stack className="mobile-home-focus__audience">
				<Typography component="span" className="section-kicker">
					For Adult Exams
				</Typography>
				<Typography component="h3">긴 시험을 준비하는 성인 수험생을 위해</Typography>

				{HOME_EXAM_GROUPS.map((group) => (
					<Stack key={group.title} className="mobile-home-focus__exam-card">
						<Typography component="strong">{group.title}</Typography>
						<Typography component="p">{group.body}</Typography>
						<Stack direction="row" className="mobile-home-focus__exam-tags">
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

export default MobileHomeFocus;
