import Image from 'next/image';
import Link from 'next/link';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ArrowButton from '../../common/buttons/ArrowButton';
import {
	BRAND,
	STUDY_FACTORY_AUDIENCES,
	STUDY_FACTORY_FACILITIES,
	STUDY_FACTORY_FEATURES,
	STUDY_FACTORY_FLOW,
	STUDY_FACTORY_HERO_IMAGE,
} from '../../../config';

const MobileStudyFactoryPage = () => {
	return (
		<Box component="main" className="study-factory-page mobile-study-factory-page">
			<Stack component="section" className="mobile-study-factory-hero">
				<Stack direction="row" alignItems="center" className="mobile-study-factory-hero__brand">
					<Image
						src="/images/brands/study-factory-logo-transparent-cropped.png"
						alt=""
						width={22}
						height={23}
						className="mobile-study-factory-hero__mark"
					/>
					<Typography component="span" className="section-kicker">
						Study Factory Space
					</Typography>
				</Stack>
				<Typography component="h1">공부만 남도록 하루의 구조를 운영합니다.</Typography>
				<Box className="mobile-study-factory-hero__visual">
					<Image
						src={STUDY_FACTORY_HERO_IMAGE.src}
						alt={STUDY_FACTORY_HERO_IMAGE.alt}
						fill
						priority
						sizes="100vw"
						className="mobile-study-factory-hero__image"
					/>
				</Box>
				<Typography component="p">
					부산에서 성인 수험생의 좌석, 출석, 루틴, 공지, 상담을 하나의 흐름으로 정리하는 프리미엄 학습
					공간입니다.
				</Typography>
				<Stack direction="row" className="mobile-study-factory-hero__actions">
					<ArrowButton href="/contact" label="상담 예약" />
				</Stack>
			</Stack>

			<Stack component="section" className="mobile-study-factory-section mobile-study-factory-intro">
				<Typography component="span" className="section-kicker">
					Not A Study Cafe
				</Typography>
				<Typography component="h2">매일 같은 상태로 앉을 수 있는 구조가 필요합니다.</Typography>
				<Typography component="p">
					공간은 조용해야 하고, 안내는 분명해야 하며, 하루의 시작점은 흔들리지 않아야 합니다.
				</Typography>
			</Stack>

			<Stack component="section" className="mobile-study-factory-section">
				<Typography component="span" className="section-kicker">
					For Adult Exams
				</Typography>
				<Typography component="h2">긴 시험을 준비하는 사람에게 맞춘 공간입니다.</Typography>
				<Stack className="mobile-study-factory-audience">
					{STUDY_FACTORY_AUDIENCES.map((item) => (
						<Stack key={item.title} className="mobile-study-factory-audience__card">
							<Typography component="strong">{item.title}</Typography>
							<Typography component="p">{item.body}</Typography>
						</Stack>
					))}
				</Stack>
			</Stack>

			<Stack component="section" className="mobile-study-factory-section">
				<Typography component="span" className="section-kicker">
					Operating Flow
				</Typography>
				<Typography component="h2">도착부터 상담까지, 공부 외의 결정을 줄입니다.</Typography>
				<Stack className="mobile-study-factory-flow">
					{STUDY_FACTORY_FLOW.map((step) => (
						<Stack key={step.number} className="mobile-study-factory-flow__step">
							<Stack direction="row" alignItems="center" className="mobile-study-factory-flow__meta">
								<Typography component="span">{step.number}</Typography>
								<Typography component="em">{step.label}</Typography>
							</Stack>
							<Typography component="strong">{step.title}</Typography>
							<Typography component="p">{step.body}</Typography>
						</Stack>
					))}
				</Stack>
			</Stack>

			{STUDY_FACTORY_FEATURES.map((feature) => (
				<Stack
					component="section"
					key={feature.kicker}
					className="mobile-study-factory-section mobile-study-factory-feature"
				>
					<Box className="mobile-study-factory-feature__image">
						<Image src={feature.image} alt={feature.alt} fill sizes="100vw" />
					</Box>
					<Typography component="span" className="section-kicker">
						{feature.kicker}
					</Typography>
					<Typography component="h2">{feature.title}</Typography>
					<Typography component="p">{feature.body}</Typography>
					<Stack direction="row" className="mobile-study-factory-feature__points">
						{feature.points.map((point) => (
							<Typography key={point} component="em">
								{point}
							</Typography>
						))}
					</Stack>
				</Stack>
			))}

			<Stack component="section" className="mobile-study-factory-section">
				<Typography component="span" className="section-kicker">
					Space Details
				</Typography>
				<Typography component="h2">공간의 밀도를 보여주는 순간들입니다.</Typography>
				<Stack className="mobile-study-factory-gallery">
					{STUDY_FACTORY_FACILITIES.map((facility) => (
						<Stack key={facility.title} className="mobile-study-factory-gallery__item">
							<Box className="mobile-study-factory-gallery__image">
								<Image
									src={facility.image}
									alt={facility.alt}
									fill
									sizes="100vw"
								/>
							</Box>
							<Typography component="strong">{facility.title}</Typography>
							<Typography component="p">{facility.body}</Typography>
						</Stack>
					))}
				</Stack>
			</Stack>

			<Stack component="section" className="mobile-study-factory-section mobile-study-factory-app">
				<Typography component="span" className="section-kicker">
					Member PWA
				</Typography>
				<Typography component="h2">공간 운영은 앱에서도 이어집니다.</Typography>
				<Typography component="p">
					Study Factory App은 예약, 출석, 멤버십, 공지, 상담 흐름을 모바일에서 확인하는 실제 공간 회원용
					앱입니다.
				</Typography>
				<Link href="/products/study-factory-app">
					앱 페이지 보기
					<ArrowOutwardIcon fontSize="small" />
				</Link>
			</Stack>

			<Stack component="section" className="mobile-study-factory-section mobile-study-factory-cta">
				<Typography component="span" className="section-kicker">
					Visit In Busan
				</Typography>
				<Typography component="h2">{BRAND.koreanName}에서 오늘의 공부 흐름을 시작하세요.</Typography>
				<ArrowButton href="/contact" label="상담 예약" />
			</Stack>
		</Box>
	);
};

export default MobileStudyFactoryPage;
