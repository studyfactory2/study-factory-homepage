import { MEDIA_ASSETS } from './media';

export interface StudyFactoryJourneyCareItem {
	id: string;
	label: string;
	src: string;
	alt: string;
	href: string;
}

export interface StudyFactoryJourneyGalleryItem {
	id: string;
	src: string;
	alt: string;
}

export type StudyFactoryJourneyBlock =
	| {
			id: string;
			type: 'film';
			src: string;
			alt: string;
			copy?: {
				title: string;
				body: string;
			};
			isClosing?: boolean;
	  }
	| {
			id: string;
			type: 'care';
			items: StudyFactoryJourneyCareItem[];
	  }
	| {
			id: string;
			type: 'gallery';
			title: string;
			items: StudyFactoryJourneyGalleryItem[];
	  };

export const STUDY_FACTORY_JOURNEY: StudyFactoryJourneyBlock[] = [
	{
		id: 'daily-film',
		type: 'film',
		src: MEDIA_ASSETS.studyFactoryFilm,
		alt: '자격증공장 운영 장면 영상',
	},
	{
		id: 'daily-care',
		type: 'care',
		items: [
			{
				id: 'management',
				label: '관리',
				src: '/images/study-factory/care-management.png',
				alt: '수험생의 일정과 학습 환경을 관리하는 자격증공장 공간',
				href: '/study-factory/about',
			},
			{
				id: 'fruit',
				label: '과일',
				src: '/images/study-factory/care-fruit.png',
				alt: '수험생을 위한 과일과 건강한 간식',
				href: '/study-factory/about',
			},
		],
	},
	{
		id: 'support-film',
		type: 'film',
		src: MEDIA_ASSETS.studyFactoryAd6,
		alt: '자격증공장 학습 관리 서비스 영상',
	},
	{
		id: 'service-care',
		type: 'care',
		items: [
			{
				id: 'service',
				label: '서비스',
				src: '/images/study-factory/care-service.png',
				alt: '공간 관리와 수험생 서비스를 보여주는 자격증공장 일러스트',
				href: '/study-factory/about',
			},
			{
				id: 'review',
				label: '이용후기',
				src: '/images/study-factory/care-review.png',
				alt: '자격증공장 수험생의 감사 후기와 합격 소식',
				href: '/study-factory/about',
			},
		],
	},
	{
		id: 'space-gallery',
		type: 'gallery',
		title: '공간 둘러보기',
		items: [
			{
				id: 'daily-meals',
				src: '/images/study-factory/gallery/daily-meals.jpeg',
				alt: '자격증공장에서 제공하는 균형 잡힌 식사와 과일',
			},
			{
				id: 'healthy-snacks',
				src: '/images/study-factory/gallery/healthy-snacks.jpeg',
				alt: '바나나와 고구마, 계란으로 준비한 건강한 간식',
			},
			{
				id: 'protein-smoothies',
				src: '/images/study-factory/gallery/protein-smoothies.jpeg',
				alt: '수험생을 위한 단백질 스무디를 준비하는 모습',
			},
			{
				id: 'study-seats-01',
				src: '/images/study-factory/gallery/study-seats-01.jpeg',
				alt: '공부 자료와 개인 좌석이 정돈된 자격증공장 내부',
			},
			{
				id: 'study-seats-02',
				src: '/images/study-factory/gallery/study-seats-02.jpeg',
				alt: '넓은 개별 학습 좌석이 보이는 자격증공장 내부',
			},
			{
				id: 'study-seats-03',
				src: '/images/study-factory/gallery/study-seats-03.jpeg',
				alt: '햇빛이 들어오는 자격증공장 학습 공간',
			},
		],
	},
	{
		id: 'closing-film',
		type: 'film',
		src: MEDIA_ASSETS.studyFactoryAd5,
		alt: '자격증공장 안내 영상',
		copy: {
			title: '오늘의 공부가',
			body: '내일의 합격으로 이어지도록',
		},
		isClosing: true,
	},
];
