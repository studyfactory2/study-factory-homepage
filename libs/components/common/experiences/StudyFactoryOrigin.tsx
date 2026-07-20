import Link from 'next/link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

interface StudyFactoryOriginProps {
	className: string;
}

const StudyFactoryOrigin = ({ className }: StudyFactoryOriginProps) => {
	return (
		<Stack component="section" className={className}>
			<Typography component="span">SINCE 2022</Typography>
			<Typography component="h2">공부가 이어질 수 있는 환경을 만들기 위해</Typography>
			<Typography component="p">
				2022년, 자격증공장은 부산에서 시작했습니다. 성인 수험생이 공부 외의 소모를 줄이고,
				오늘의 리듬을 내일까지 이어갈 수 있는 공간을 만들고자 했습니다.
			</Typography>
			<Link href="/study-factory/about">자격증공장 이야기</Link>
		</Stack>
	);
};

export default StudyFactoryOrigin;
