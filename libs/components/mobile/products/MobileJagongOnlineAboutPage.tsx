import Image from 'next/image';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { JAGONG_ONLINE_FLOW, JAGONG_ONLINE_PILLARS, MEDIA_ASSETS, type ProductConfig } from '../../../config';

interface MobileJagongOnlineAboutPageProps {
	product: ProductConfig;
}

const JAGONG_ONLINE_FACTS = [
	{ label: '대상', value: '온라인 학습 루틴이 필요한 성인 수험생' },
	{ label: '방식', value: '온라인 출석 · 집중 · 기록' },
	{ label: '관리', value: '루틴 · 상담 · 피드백' },
	{ label: '목표', value: '장소 밖에서도 이어지는 공부 흐름' },
];

const MobileJagongOnlineAboutPage = ({ product }: MobileJagongOnlineAboutPageProps) => {
	return (
		<Box component="main" className="jagong-online-about-page mobile-jagong-online-about-page">
			<Box component="section" className="mobile-jagong-online-about-hero">
				<video
					autoPlay
					muted
					loop
					playsInline
					preload="metadata"
					poster="/images/home/gateway-online.jpeg"
					className="mobile-jagong-online-about-hero__video"
				>
					<source src={MEDIA_ASSETS.jagongOnlineMain} type="video/mp4" />
				</video>
				<Box className="mobile-jagong-online-about-hero__shade" />
				<Stack className="mobile-jagong-online-about-hero__copy">
					<Typography component="span" className="mobile-jagong-online-about-kicker">
						Jagong Online · Remote Study
					</Typography>
					<Typography component="h1">
						집에서도,
						<br />
						공부의 흐름은
						<br />
						이어집니다.
					</Typography>
					<Typography component="p">
						혼자 있는 날에도 다시 공부를 시작할 수 있도록 자격증공장의 운영 경험을 온라인으로
						연결합니다.
					</Typography>
					<Box component="a" href="#jagong-online-origin" className="mobile-jagong-online-about-hero__discover">
						이야기 시작하기
						<ArrowDownwardIcon fontSize="small" />
					</Box>
				</Stack>
			</Box>

			<Stack id="jagong-online-origin" component="section" className="mobile-jagong-online-about-origin">
				<Stack direction="row" justifyContent="space-between" alignItems="center">
					<Typography component="span" className="mobile-jagong-online-about-kicker mobile-jagong-online-about-kicker--dark">
						Why Online
					</Typography>
					<Typography component="span" className="mobile-jagong-online-about-origin__chapter">
						01
					</Typography>
				</Stack>
				<Typography component="strong" className="mobile-jagong-online-about-origin__mark">
					ON
				</Typography>
				<Typography component="h2">공간에 오지 못하는 날에도 공부는 계속되어야 합니다.</Typography>
				<Typography component="p">
					혼자 공부할 때 가장 어려운 것은 무엇을 공부할지가 아니라 매일 같은 시간에 다시 시작하는
					일입니다. 재택근무반은 그 시작점과 반복의 흐름을 온라인에서 이어갑니다.
				</Typography>
			</Stack>

			<Stack component="section" className="mobile-jagong-online-about-definition">
				<Box className="mobile-jagong-online-about-definition__visual">
					<Image
						src="/images/home/gateway-online1.jpeg"
						alt="집에서 온라인으로 공부를 이어가는 재택근무반 학습 환경"
						fill
						sizes="100vw"
					/>
					<Typography component="span">Remote Study Routine</Typography>
				</Box>
				<Stack className="mobile-jagong-online-about-definition__copy">
					<Typography component="span" className="mobile-jagong-online-about-kicker mobile-jagong-online-about-kicker--dark">
						What We Are
					</Typography>
					<Typography component="h2">재택근무반이란?</Typography>
					<Typography component="p" className="mobile-jagong-online-about-definition__lead">
						각자의 장소에서도 출석, 집중, 기록과 피드백이 하나의 흐름으로 이어지는 온라인 학습
						루틴입니다.
					</Typography>
					<Stack className="mobile-jagong-online-about-definition__facts">
						{JAGONG_ONLINE_FACTS.map((fact) => (
							<Stack key={fact.label}>
								<Typography component="span">{fact.label}</Typography>
								<Typography component="strong">{fact.value}</Typography>
							</Stack>
						))}
					</Stack>
				</Stack>
			</Stack>

			<Stack component="section" className="mobile-jagong-online-about-manifesto">
				<Stack direction="row" justifyContent="space-between">
					<Typography component="span" className="mobile-jagong-online-about-kicker">
						Structure Over Distance
					</Typography>
					<Typography component="span" className="mobile-jagong-online-about-manifesto__chapter">
						02
					</Typography>
				</Stack>
				<Typography component="h2">
					혼자 있어도,
					<br />
					혼자 버티지 않도록.
				</Typography>
				<Typography component="strong">
					화면을 켜 두는 온라인 스터디가 아니라, 오늘의 공부를 내일까지 연결하는 운영.
				</Typography>
				<Typography component="p">
					출석하고, 집중하고, 기록하고, 필요한 순간에 다시 방향을 잡는 반복 가능한 흐름을 함께
					만듭니다.
				</Typography>
			</Stack>

			<Stack component="section" className="mobile-jagong-online-about-flow">
				<Typography component="span" className="mobile-jagong-online-about-kicker mobile-jagong-online-about-kicker--dark">
					How It Works
				</Typography>
				<Typography component="h2">
					온라인에서도 분명한
					<br />
					하루의 시작과 끝.
				</Typography>
				<Typography component="p" className="mobile-jagong-online-about-flow__lead">
					접속만 하는 서비스가 아니라, 매일 다시 앉을 수 있는 흐름을 설계합니다.
				</Typography>
				<Stack className="mobile-jagong-online-about-flow__list">
					{JAGONG_ONLINE_FLOW.map((step) => (
						<Stack key={step.number} className="mobile-jagong-online-about-flow__step">
							<Stack direction="row" justifyContent="space-between" alignItems="center">
								<Typography component="span">{step.number}</Typography>
								<Typography component="small">{step.label}</Typography>
							</Stack>
							<Typography component="h3">{step.title}</Typography>
							<Typography component="p">{step.body}</Typography>
						</Stack>
					))}
				</Stack>
			</Stack>

			<Stack component="section" className="mobile-jagong-online-about-pillars">
				<Typography component="span" className="mobile-jagong-online-about-kicker mobile-jagong-online-about-kicker--dark">
					What We Manage
				</Typography>
				<Typography component="h2">공부가 이어지도록 관리하는 네 가지 기준.</Typography>
				<Stack className="mobile-jagong-online-about-pillars__list">
					{JAGONG_ONLINE_PILLARS.map((pillar) => (
						<Stack key={pillar.title} className="mobile-jagong-online-about-pillars__item">
							<Typography component="span">{pillar.label}</Typography>
							<Typography component="h3">{pillar.title}</Typography>
							<Typography component="p">{pillar.body}</Typography>
						</Stack>
					))}
				</Stack>
			</Stack>

			<Stack component="section" className="mobile-jagong-online-about-cta">
				<Typography component="span" className="mobile-jagong-online-about-kicker">
					Start Your Routine
				</Typography>
				<Typography component="h2">오늘의 공부를 온라인에서 이어가세요.</Typography>
				<Typography component="p">
					세부 운영 방식과 이용 조건은 재택근무반에서 확인할 수 있습니다.
				</Typography>
				<Box
					component="a"
					href={product.href ?? '/contact'}
					target={product.href ? '_blank' : undefined}
					rel={product.href ? 'noreferrer' : undefined}
					className="mobile-jagong-online-about-cta__link"
				>
					재택근무반 살펴보기
					<ArrowOutwardIcon fontSize="small" />
				</Box>
			</Stack>
		</Box>
	);
};

export default MobileJagongOnlineAboutPage;
