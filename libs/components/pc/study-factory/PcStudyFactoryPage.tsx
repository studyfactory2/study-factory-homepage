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

const PcStudyFactoryPage = () => {
	return (
		<Box component="main" className="study-factory-page pc-study-factory-page">
			<Stack component="section" direction="row" className="pc-study-factory-hero">
				<Stack className="pc-study-factory-hero__copy">
					<Stack direction="row" alignItems="center" className="pc-study-factory-hero__brand">
						<Image
							src="/images/brands/study-factory-logo-transparent-cropped.png"
							alt=""
							width={26}
							height={27}
							className="pc-study-factory-hero__mark"
						/>
						<Typography component="span" className="section-kicker">
							Study Factory Space
						</Typography>
					</Stack>
					<Typography component="h1">공부만 남도록 하루의 구조를 운영합니다.</Typography>
					<Typography component="p">
						자격증공장은 부산에서 성인 수험생의 좌석, 출석, 루틴, 공지, 상담을 하나의 흐름으로 정리하는 프리미엄 학습
						공간입니다.
					</Typography>
					<Stack direction="row" className="pc-study-factory-hero__actions">
						<ArrowButton href="/contact" label="상담 예약" />
						<ArrowButton href="#space-flow" label="운영 흐름 보기" variant="outlined" />
					</Stack>
				</Stack>

				<Box className="pc-study-factory-hero__visual">
					<Image
						src={STUDY_FACTORY_HERO_IMAGE.src}
						alt={STUDY_FACTORY_HERO_IMAGE.alt}
						fill
						priority
						sizes="(min-width: 1024px) 50vw, 100vw"
						className="pc-study-factory-hero__image"
					/>
				</Box>
			</Stack>

			<Stack component="section" direction="row" className="pc-study-factory-intro">
				<Typography component="span" className="section-kicker">
					Not A Study Cafe
				</Typography>
				<Typography component="h2">
					중요한 것은 더 큰 자극이 아니라, 매일 같은 상태로 앉을 수 있는 구조입니다.
				</Typography>
				<Typography component="p">
					공간은 조용해야 하고, 안내는 분명해야 하며, 하루의 시작점은 흔들리지 않아야 합니다. Study Factory는 공부 외의
					결정을 줄이기 위해 운영되는 실제 학습 시스템입니다.
				</Typography>
			</Stack>

			<Stack component="section" className="pc-study-factory-audience">
				<Stack direction="row" justifyContent="space-between" className="pc-study-factory-section-head">
					<Stack>
						<Typography component="span" className="section-kicker">
							For Adult Exams
						</Typography>
						<Typography component="h2">긴 시험을 준비하는 사람에게 맞춘 공간입니다.</Typography>
					</Stack>
					<Typography component="p">
						공부 시간이 길어질수록 필요한 것은 분위기보다 운영 기준입니다. 자격증공장은 그 기준을 공간 안에 반복되게
						만듭니다.
					</Typography>
				</Stack>

				<Stack direction="row" className="pc-study-factory-audience__grid">
					{STUDY_FACTORY_AUDIENCES.map((item) => (
						<Stack key={item.title} className="pc-study-factory-audience__card">
							<Typography component="strong">{item.title}</Typography>
							<Typography component="p">{item.body}</Typography>
						</Stack>
					))}
				</Stack>
			</Stack>

			<Stack id="space-flow" component="section" className="pc-study-factory-flow">
				<Stack direction="row" justifyContent="space-between" className="pc-study-factory-section-head">
					<Stack>
						<Typography component="span" className="section-kicker">
							Operating Flow
						</Typography>
						<Typography component="h2">도착부터 상담까지, 공부 외의 결정을 줄입니다.</Typography>
					</Stack>
					<Typography component="p">
						공간 운영은 감이 아니라 반복되는 시스템으로 관리합니다. 하루가 흔들리지 않도록 작은 흐름을 먼저 정리합니다.
					</Typography>
				</Stack>

				<Stack direction="row" className="pc-study-factory-flow__grid">
					{STUDY_FACTORY_FLOW.map((step) => (
						<Stack key={step.number} className="pc-study-factory-flow__step">
							<Stack direction="row" alignItems="center" className="pc-study-factory-flow__meta">
								<Typography component="span">{step.number}</Typography>
								<Typography component="em">{step.label}</Typography>
							</Stack>
							<Typography component="strong">{step.title}</Typography>
							<Typography component="p">{step.body}</Typography>
						</Stack>
					))}
				</Stack>
			</Stack>

			<Stack component="section" className="pc-study-factory-features">
				{STUDY_FACTORY_FEATURES.map((feature, index) => (
					<Stack
						key={feature.kicker}
						direction="row"
						className={`pc-study-factory-features__row${
							index % 2 === 1 ? ' pc-study-factory-features__row--reverse' : ''
						}`}
					>
						<Box className="pc-study-factory-features__image">
							<Image src={feature.image} alt={feature.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" />
						</Box>
						<Stack className="pc-study-factory-features__copy">
							<Typography component="span" className="section-kicker">
								{feature.kicker}
							</Typography>
							<Typography component="h2">{feature.title}</Typography>
							<Typography component="p">{feature.body}</Typography>
							<Stack direction="row" className="pc-study-factory-features__points">
								{feature.points.map((point) => (
									<Typography key={point} component="em">
										{point}
									</Typography>
								))}
							</Stack>
						</Stack>
					</Stack>
				))}
			</Stack>

			<Stack component="section" direction="row" className="pc-study-factory-gallery">
				<Stack className="pc-study-factory-gallery__copy">
					<Typography component="span" className="section-kicker">
						Space Details
					</Typography>
					<Typography component="h2">공간의 밀도를 보여주는 순간들입니다.</Typography>
					<Typography component="p">
						좌석, 라운지, 집중 디테일처럼 하루를 지탱하는 Study Factory의 실제 분위기입니다.
					</Typography>
				</Stack>
				<Stack direction="row" className="pc-study-factory-gallery__items">
					{STUDY_FACTORY_FACILITIES.map((facility) => (
						<Stack key={facility.title} className="pc-study-factory-gallery__item">
							<Box className="pc-study-factory-gallery__image">
								<Image src={facility.image} alt={facility.alt} fill sizes="(min-width: 1024px) 33vw, 100vw" />
							</Box>
							<Typography component="strong">{facility.title}</Typography>
							<Typography component="p">{facility.body}</Typography>
						</Stack>
					))}
				</Stack>
			</Stack>

			<Stack component="section" direction="row" alignItems="center" className="pc-study-factory-app">
				<Stack className="pc-study-factory-app__copy">
					<Typography component="span" className="section-kicker">
						Member PWA
					</Typography>
					<Typography component="h2">공간 운영은 앱에서도 이어집니다.</Typography>
					<Typography component="p">
						Study Factory App은 실제 공간 회원을 위한 운영 앱입니다. 예약, 출석, 멤버십, 공지, 상담 흐름을 모바일에서
						확인할 수 있게 만듭니다.
					</Typography>
					<Link href="/products/study-factory-app">
						앱 페이지 보기
						<ArrowOutwardIcon fontSize="small" />
					</Link>
				</Stack>
				<Stack className="pc-study-factory-app__panel">
					<Typography component="span">Reservation</Typography>
					<Typography component="span">Attendance</Typography>
					<Typography component="span">Notice</Typography>
					<Typography component="span">Consultation</Typography>
				</Stack>
			</Stack>

			<Stack component="section" direction="row" justifyContent="space-between" className="pc-study-factory-cta">
				<Stack>
					<Typography component="span" className="section-kicker">
						Visit In Busan
					</Typography>
					<Typography component="h2">{BRAND.koreanName}에서 오늘의 공부 흐름을 시작하세요.</Typography>
				</Stack>
				<Stack className="pc-study-factory-cta__actions">
					<ArrowButton href="/contact" label="상담 예약" />
					<a href={`tel:${BRAND.studyFactoryPhone}`}>{BRAND.studyFactoryPhone}</a>
				</Stack>
			</Stack>
		</Box>
	);
};

export default PcStudyFactoryPage;
