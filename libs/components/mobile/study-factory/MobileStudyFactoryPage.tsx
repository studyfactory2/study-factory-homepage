import Image from 'next/image';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { MEDIA_ASSETS } from '../../../config';

const ABOUT_FACTS = [
	{ label: '대상', value: '성인 수험생 전용' },
	{ label: '시험', value: '전문직 · 공무원 · 공기업 · 자격증' },
	{ label: '공간', value: '부산 수영구 · 망미역 인근' },
	{ label: '운영', value: '미성년자 입실 불가' },
];

const MobileStudyFactoryPage = () => {
	return (
		<Box component="main" className="study-factory-page mobile-study-factory-page">
			<Box component="section" className="mobile-study-factory-about-hero">
				<video
					autoPlay
					muted
					loop
					playsInline
					preload="metadata"
					poster="/images/study-factory/space-lounge.jpg"
					className="mobile-study-factory-about-hero__video"
				>
					<source src={MEDIA_ASSETS.studyFactoryAboutMain} type="video/mp4" />
				</video>
				<Box className="mobile-study-factory-about-hero__shade" />
				<Stack className="mobile-study-factory-about-hero__copy">
					<Typography component="span" className="mobile-study-factory-about-kicker">
						Study Factory · Busan
					</Typography>
					<Typography component="h1">
						공부만 하세요.
						<br />
						나머지는
						<br />
						자격증공장이
						<br />
						관리합니다.
					</Typography>
					<Typography component="p">
						성인 수험생이 흔들리지 않고 오래 공부할 수 있도록, 공부 밖의 생활까지 정리합니다.
					</Typography>
					<Box component="a" href="#study-factory-origin" className="mobile-study-factory-about-hero__discover">
						이야기 시작하기
						<ArrowDownwardIcon fontSize="small" />
					</Box>
				</Stack>
			</Box>

			<Stack id="study-factory-origin" component="section" className="mobile-study-factory-about-origin">
				<Stack direction="row" justifyContent="space-between" alignItems="center">
					<Typography component="span" className="mobile-study-factory-about-kicker mobile-study-factory-about-kicker--dark">
						Our Beginning
					</Typography>
					<Typography component="span" className="mobile-study-factory-about-origin__chapter">
						01
					</Typography>
				</Stack>
				<Typography component="strong" className="mobile-study-factory-about-origin__year">
					2022
				</Typography>
				<Typography component="h2">
					성인 수험생이 공부만 할 수 있는 환경을 만들기 시작했습니다.
				</Typography>
				<Typography component="p">
					긴 시험을 준비하는 하루에는 공부보다 먼저 소모되는 것들이 있습니다. 몸의 컨디션, 식사,
					정리되지 않은 생활과 반복되는 작은 결정들. 자격증공장은 그 소모를 줄이는 일에서 시작했습니다.
				</Typography>
			</Stack>

			<Stack component="section" className="mobile-study-factory-about-definition">
				<Box className="mobile-study-factory-about-definition__visual">
					<Image
						src="/images/study-factory/space-hero.jpg"
						alt="따뜻한 빛이 들어오는 자격증공장 학습 공간"
						fill
						sizes="100vw"
					/>
					<Typography component="span">Adult Study Space</Typography>
				</Box>
				<Stack className="mobile-study-factory-about-definition__copy">
					<Typography component="span" className="mobile-study-factory-about-kicker mobile-study-factory-about-kicker--dark">
						What We Are
					</Typography>
					<Typography component="h2">자격증공장이란?</Typography>
					<Typography component="p" className="mobile-study-factory-about-definition__lead">
						부산에서 전문 자격시험을 준비하는 성인 수험생만을 위한 관리형 학습 공간입니다.
					</Typography>
					<Stack className="mobile-study-factory-about-definition__facts">
						{ABOUT_FACTS.map((fact) => (
							<Stack key={fact.label}>
								<Typography component="span">{fact.label}</Typography>
								<Typography component="strong">{fact.value}</Typography>
							</Stack>
						))}
					</Stack>
				</Stack>
			</Stack>

			<Stack component="section" className="mobile-study-factory-about-manifesto">
				<Stack direction="row" justifyContent="space-between">
					<Typography component="span" className="mobile-study-factory-about-kicker">
						Environment Over Willpower
					</Typography>
					<Typography component="span" className="mobile-study-factory-about-manifesto__chapter">
						02
					</Typography>
				</Stack>
				<Typography component="h2">
					의지가 아니라,
					<br />
					환경입니다.
				</Typography>
				<Typography component="strong">
					같이 앉혀 놓는 관리가 아니라, 흔들리지 않고 오래 공부할 수 있게 만드는 관리.
				</Typography>
				<Typography component="p">
					자격증공장은 규칙으로 사람을 통제하는 공간이 아닙니다. 한 사람의 하루를 관찰하고, 공부 외의
					결정을 줄여 집중이 오래 이어지는 상태를 만듭니다.
				</Typography>
			</Stack>
		</Box>
	);
};

export default MobileStudyFactoryPage;
