import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { HOME_SYSTEM_STEPS } from '../../../config';
import useInViewOnce from '../../../hooks/useInViewOnce';

const pcStepBodies: Record<string, string> = {
	'01': '고민 없이 바로 시작',
	'02': '하루의 시작점을 고정',
	'03': '작은 반복을 이어가기',
	'04': '변화를 빠르게 전달',
	'05': '다음 행동을 정리',
	'06': '오늘의 집중을 내일로',
};

const PcHomeFocus = () => {
	const { ref: stepsRef, isInView: stepsAreVisible } = useInViewOnce<HTMLDivElement>();

	return (
		<Box component="section" className="pc-home-focus">
			<Stack direction="row" className="pc-home-focus__intro">
				<Stack className="pc-home-focus__story">
					<Typography component="span" className="section-kicker">
						Study Operating System
					</Typography>
					<Typography component="h2">의지가 아니라, 반복 가능한 루틴을 만듭니다.</Typography>
					<Typography component="p">
						좌석, 출석, 공지, 상담을 하나의 흐름으로 연결해 매일 같은 상태로 공부를 시작하게 합니다.
					</Typography>
				</Stack>

				<Stack className="pc-home-focus__statement">
					<Typography component="span">System over mood</Typography>
					<Typography component="strong">공부 외의 결정을 줄입니다.</Typography>
				</Stack>
			</Stack>

			<Stack className="pc-home-focus__system">
				<Stack direction="row" className="pc-home-focus__system-head">
					<Typography component="span">Operating Flow</Typography>
					<Typography component="p">여섯 단계가 하나의 공부 루틴으로 이어집니다.</Typography>
				</Stack>

				<Stack ref={stepsRef} direction="row" className={`pc-home-focus__steps${stepsAreVisible ? ' is-visible' : ''}`}>
					{HOME_SYSTEM_STEPS.map((step) => (
						<Stack key={step.number} className="pc-home-focus__step">
							<Stack direction="row" alignItems="center" className="pc-home-focus__step-meta">
								<Typography component="span">{step.number}</Typography>
								<Typography component="em">{step.label}</Typography>
							</Stack>
							<Typography component="strong">{step.title}</Typography>
							<Typography component="p">{pcStepBodies[step.number]}</Typography>
						</Stack>
					))}
				</Stack>
			</Stack>
		</Box>
	);
};

export default PcHomeFocus;
