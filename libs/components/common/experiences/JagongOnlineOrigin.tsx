import Link from 'next/link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

interface JagongOnlineOriginProps {
	className: string;
}

const JagongOnlineOrigin = ({ className }: JagongOnlineOriginProps) => {
	return (
		<Stack component="section" className={className}>
			<Typography component="span">ONLINE STUDY ROUTINE</Typography>
			<Typography component="h2">혼자 공부해도, 혼자 관리하지 않습니다.</Typography>
			<Typography component="p">
				재택근무반은 출석, 학습 기록, 실시간 확인과 상담을 하나의 흐름으로 연결해 공간 밖에서도
				오늘의 공부가 이어지도록 돕습니다.
			</Typography>
			<Link href="/jagong-online/about">재택근무반 이야기</Link>
		</Stack>
	);
};

export default JagongOnlineOrigin;
