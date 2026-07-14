import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { HOME_SYSTEM_STEPS, type HomeSystemStep } from '../../../config';
import useInViewOnce from '../../../hooks/useInViewOnce';

const MobileSystemStep = ({ step }: { step: HomeSystemStep }) => {
	const { ref, isInView } = useInViewOnce<HTMLDivElement>('0px 0px -6% 0px');

	return (
		<Stack ref={ref} direction="row" className={`mobile-home-focus__step${isInView ? ' is-visible' : ''}`}>
			<Typography component="span">{step.number}</Typography>
			<Stack>
				<Typography component="strong">{step.title}</Typography>
				<Typography component="p">{step.body}</Typography>
			</Stack>
		</Stack>
	);
};

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
					<MobileSystemStep key={step.number} step={step} />
				))}
			</Stack>

		</Box>
	);
};

export default MobileHomeFocus;
