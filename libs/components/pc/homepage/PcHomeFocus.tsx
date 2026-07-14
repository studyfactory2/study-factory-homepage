import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { HOME_SYSTEM_STEPS } from '../../../config';
import useInViewOnce from '../../../hooks/useInViewOnce';

const PcHomeFocus = () => {
	const { ref: stepsRef, isInView: stepsAreVisible } = useInViewOnce<HTMLDivElement>();

	return (
		<Box component="section" className="pc-home-focus">
			<Stack direction="row" className="pc-home-focus__intro">
				<Stack className="pc-home-focus__story">
					<Typography component="span" className="section-kicker">
						Study Operating System
					</Typography>
					<Typography component="h2">혼자 공부할 때 무너지는 것은 의지가 아니라 루틴입니다.</Typography>
					<Typography component="p">
						성인 수험생에게 필요한 것은 더 큰 자극이 아니라, 매일 같은 상태로 책상 앞에 앉을 수 있는 구조입니다.
						자격증공장은 공간, 좌석, 출석, 공지, 상담을 하나의 흐름으로 정리합니다.
					</Typography>
				</Stack>

				<Stack className="pc-home-focus__statement">
					<Typography component="span">System over mood</Typography>
					<Typography component="strong">공부 외의 결정을 줄입니다.</Typography>
					<Typography component="p">
						도착해서 어디에 앉을지, 오늘 무엇부터 정리할지, 운영 안내를 어디서 확인할지 고민하지 않도록
						반복 가능한 하루의 구조를 만듭니다.
					</Typography>
				</Stack>
			</Stack>

			<Stack className="pc-home-focus__system">
				<Stack direction="row" className="pc-home-focus__system-head">
					<Typography component="span">Operating Flow</Typography>
					<Typography component="p">공간 운영은 감이 아니라 반복되는 시스템으로 관리합니다.</Typography>
				</Stack>

				<Stack
					ref={stepsRef}
					direction="row"
					className={`pc-home-focus__steps${stepsAreVisible ? ' is-visible' : ''}`}
				>
					{HOME_SYSTEM_STEPS.map((step) => (
						<Stack key={step.number} className="pc-home-focus__step">
							<Typography component="span">{step.number}</Typography>
							<Typography component="em">{step.label}</Typography>
							<Typography component="strong">{step.title}</Typography>
							<Typography component="p">{step.body}</Typography>
						</Stack>
					))}
				</Stack>
			</Stack>

		</Box>
	);
};

export default PcHomeFocus;
