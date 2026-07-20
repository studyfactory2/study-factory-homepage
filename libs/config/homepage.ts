import { MEDIA_ASSETS } from './media';
import type { ProductSlug } from './products';

export interface HomeSystemStep {
	number: string;
	label: string;
	title: string;
	body: string;
}

export interface HomeExamGroup {
	title: string;
	body: string;
	exams: string[];
}

export interface HomeProductPromo {
	slug: ProductSlug;
	kicker: string;
	name: string;
	title: string;
	body: string;
	href: string;
	cta: string;
	video: string;
	points: string[];
}

export interface HomeFeatureFilm {
	slug: 'study-factory' | 'jagong-online';
	body: string;
	href: string;
	cta: string;
	video: string;
}

export interface HomeExperience {
	id: 'study-factory' | 'jagong-online';
	name: string;
	koreanName: string;
	eyebrow: string;
	description: string;
	href: string;
	imageSrc?: string;
	imageAlt?: string;
	logoSrc?: string;
}

export const HOME_EXPERIENCES: HomeExperience[] = [
	{
		id: 'study-factory',
		name: '자격증공장',
		koreanName: '자격증공장',
		eyebrow: '자격증공장',
		description: '자세히 보기',
		href: '/study-factory',
		imageSrc: '/images/study-factory/space-hero.jpg',
		imageAlt: '따뜻한 채광이 들어오는 Study Factory 공간 무드',
	},
	{
		id: 'jagong-online',
		name: '재택근무반',
		koreanName: '재택근무반',
		eyebrow: '재택근무반',
		description: '자세히 보기',
		href: '/jagong-online',
		logoSrc: '/images/brands/jagong-online-logo.webp',
	},
];

export const HOME_SYSTEM_STEPS: HomeSystemStep[] = [
	{
		number: '01',
		label: 'Seat',
		title: '좌석',
		body: '도착하면 고민 없이 앉을 수 있는 자리와 공부 환경을 먼저 정리합니다.',
	},
	{
		number: '02',
		label: 'Attendance',
		title: '출석',
		body: '반복되는 출석 흐름으로 하루의 시작점을 흔들리지 않게 만듭니다.',
	},
	{
		number: '03',
		label: 'Routine',
		title: '루틴',
		body: '작은 반복이 이어지도록 공부 시간과 생활 리듬을 단단하게 잡습니다.',
	},
	{
		number: '04',
		label: 'Notice',
		title: '공지',
		body: '운영 안내와 변화는 빠르게 전달해 불필요한 혼란을 줄입니다.',
	},
	{
		number: '05',
		label: 'Consultation',
		title: '상담',
		body: '필요한 순간에 상태를 확인하고 다음 행동을 정리할 수 있게 돕습니다.',
	},
	{
		number: '06',
		label: 'Continuity',
		title: '지속',
		body: '오늘의 집중이 내일로 이어지도록 공간과 시스템을 함께 운영합니다.',
	},
];

export const HOME_EXAM_GROUPS: HomeExamGroup[] = [
	{
		title: '전문직 시험',
		body: '긴 호흡과 조용한 밀도가 필요한 시험을 준비하는 분들',
		exams: ['변호사', '변리사', '회계사', '감정평가사', '세무사', '노무사'],
	},
	{
		title: '임용 · 공무원 · 공기업',
		body: '출석과 생활 루틴이 무너지면 다시 잡기 어려운 장기 수험생',
		exams: ['임용고시', '공무원', '공기업'],
	},
	{
		title: '자격증 · 이직 · 재도전',
		body: '무엇을 공부할지는 알지만, 계속할 공간과 구조가 필요한 성인 수험생',
		exams: ['자격증', '이직 준비', '장기 루틴'],
	},
];

export const HOME_STUDY_FACTORY_FILM: HomeFeatureFilm = {
	slug: 'study-factory',
	body: '조용한 자리와 반복되는 출석, 필요한 순간의 상담까지. 장기 수험 생활이 흔들리지 않도록 하루의 구조를 운영합니다.',
	href: '/study-factory',
	cta: '공간 둘러보기',
	video: MEDIA_ASSETS.studyFactoryFilm,
};

export const HOME_JAGONG_ONLINE_FILM: HomeFeatureFilm = {
	slug: 'jagong-online',
	body: '오늘의 출석과 집중을 온라인에서도 이어갈 수 있도록, 공부의 흐름을 놓치지 않는 제품을 만듭니다.',
	href: '/products/jagong-online',
	cta: 'Jagong Online 보기',
	video: MEDIA_ASSETS.jagongOnlineFilm,
};

export const HOME_PRODUCT_PROMOS: HomeProductPromo[] = [
	{
		slug: 'study-factory-app',
		kicker: 'Member PWA',
		name: 'Study Factory App',
		title: '공간 운영을 손안에서 이어갑니다.',
		body: '예약, 출석, 멤버십, 공지, 상담 흐름을 모바일에서 빠르게 확인하는 자격증공장의 운영 앱입니다.',
		href: '/products/study-factory-app',
		cta: '앱 페이지 보기',
		video: MEDIA_ASSETS.productPromoVideos.studyFactoryApp,
		points: ['Reservation', 'Attendance', 'Notice', 'Consultation'],
	},
	{
		slug: 'jagong-online',
		kicker: 'Online Routine',
		name: 'Jagong Online',
		title: '온라인에서도 루틴을 놓치지 않게.',
		body: '공간 밖에서도 오늘의 공부 흐름을 이어갈 수 있도록 설계하는 온라인 자기관리 제품입니다.',
		href: '/products/jagong-online',
		cta: '온라인 제품 보기',
		video: MEDIA_ASSETS.productPromoVideos.jagongOnline,
		points: ['Check-in', 'Rhythm', 'Accountability', 'Remote Focus'],
	},
];
