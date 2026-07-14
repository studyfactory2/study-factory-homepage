import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { HOME_EXAM_GROUPS } from '../../../config';

const lanes = [
	{
		label: 'Professional Exams',
		exams: HOME_EXAM_GROUPS[0].exams,
		direction: 'forward',
	},
	{
		label: 'Public & Career',
		exams: [...HOME_EXAM_GROUPS[1].exams, ...HOME_EXAM_GROUPS[2].exams],
		direction: 'reverse',
	},
] as const;

const ExamMarquee = () => (
	<Stack className="exam-marquee">
		{lanes.map((lane) => (
			<Stack key={lane.label} className="exam-marquee__lane">
				<Typography component="strong" className="exam-marquee__label">
					{lane.label}
				</Typography>

				<Box className="exam-marquee__viewport">
					<Stack direction="row" className={`exam-marquee__track exam-marquee__track--${lane.direction}`}>
						{[false, true].map((duplicate) => (
							<Stack
								key={duplicate ? 'duplicate' : 'original'}
								direction="row"
								className="exam-marquee__group"
								aria-hidden={duplicate || undefined}
							>
								{lane.exams.map((exam) => (
									<Typography key={exam} component="span" className="exam-marquee__item">
										{exam}
									</Typography>
								))}
							</Stack>
						))}
					</Stack>
				</Box>
			</Stack>
		))}
	</Stack>
);

export default ExamMarquee;
