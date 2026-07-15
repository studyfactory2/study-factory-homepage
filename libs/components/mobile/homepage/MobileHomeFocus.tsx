import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { HOME_SYSTEM_STEPS } from '../../../config';
import useInViewOnce from '../../../hooks/useInViewOnce';

const MobileHomeFocus = () => {
	const { ref: flowRef, isInView: flowIsVisible } = useInViewOnce<HTMLDivElement>('0px 0px -8% 0px');

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

			<Stack ref={flowRef} className={`mobile-home-focus__flow${flowIsVisible ? ' is-visible' : ''}`}>
				<Typography component="span" className="mobile-home-focus__flow-label">
					Operating flow
				</Typography>

				<Box className="mobile-home-focus__flow-canvas">
					<svg className="mobile-home-focus__flow-path" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
						<path className="mobile-home-focus__flow-path-base" pathLength="1" d="M 8 12 H 92 V 88 H 8" />
						<path className="mobile-home-focus__flow-path-pulse" pathLength="1" d="M 8 12 H 92 V 88 H 8" />
					</svg>

					{HOME_SYSTEM_STEPS.map((step) => (
						<Stack key={step.number} data-step={step.number} className="mobile-home-focus__flow-node">
							<Typography component="span" className="mobile-home-focus__flow-number">
								{step.number}
							</Typography>
							<Typography component="strong">{step.title}</Typography>
						</Stack>
					))}
				</Box>
			</Stack>

		</Box>
	);
};

export default MobileHomeFocus;
