import { MEDIA_ASSETS } from './media';

export interface JagongOnlineJourneyCareItem {
	id: string;
	label: string;
	src: string;
	alt: string;
	href: string;
}

export interface JagongOnlineJourneyGalleryItem {
	id: string;
	src: string;
	alt: string;
}

export type JagongOnlineJourneyBlock =
	| {
			id: string;
			type: 'film';
			src: string;
			alt: string;
			copy?: {
				title: string;
				body: string;
			};
			hasSoundControl?: boolean;
			isClosing?: boolean;
	  }
	| {
			id: string;
			type: 'care';
			items: JagongOnlineJourneyCareItem[];
	  }
	| {
			id: string;
			type: 'gallery';
			title: string;
			items: JagongOnlineJourneyGalleryItem[];
	  };

// Temporary Jagong-only media keeps the complete page structure ready for the
// final online service images and films without borrowing Study Factory assets.
export const JAGONG_ONLINE_JOURNEY: JagongOnlineJourneyBlock[] = [
	{
		id: 'online-routine-film',
		type: 'film',
		src: MEDIA_ASSETS.jagongOnlineAd,
		alt: '재택근무반 온라인 학습 루틴 영상',
		hasSoundControl: false,
	},
	{
		id: 'routine-care',
		type: 'care',
		items: [
			{
				id: 'attendance',
				label: '출석 관리',
				src: '/images/home/gateway-online.jpeg',
				alt: '온라인으로 공부하는 수험생들의 출석 관리 화면',
				href: '/jagong-online/about',
			},
			{
				id: 'study-record',
				label: '학습 기록',
				src: '/images/home/gateway-online1.jpeg',
				alt: '집에서 이어가는 온라인 학습 환경과 기록',
				href: '/jagong-online/about',
			},
		],
	},
	{
		id: 'management-film',
		type: 'film',
		src: MEDIA_ASSETS.jagongOnlineFilm,
		alt: '재택근무반 실시간 학습 관리 영상',
	},
	{
		id: 'management-care',
		type: 'care',
		items: [
			{
				id: 'live-management',
				label: '실시간 관리',
				src: '/images/home/gateway-online1.jpeg',
				alt: '온라인 학습 흐름을 실시간으로 확인하는 환경',
				href: '/jagong-online/about',
			},
			{
				id: 'consultation',
				label: '상담 · 피드백',
				src: '/images/home/gateway-online.jpeg',
				alt: '온라인 수험생에게 이어지는 상담과 학습 피드백',
				href: '/jagong-online/about',
			},
		],
	},
	{
		id: 'online-gallery',
		type: 'gallery',
		title: '온라인 학습 둘러보기',
		items: [
			{
				id: 'online-study-room',
				src: '/images/home/gateway-online.jpeg',
				alt: '재택근무반에서 함께 공부하는 온라인 수험생들',
			},
			{
				id: 'home-study-routine',
				src: '/images/home/gateway-online1.jpeg',
				alt: '집에서도 집중을 이어가는 재택근무반 학습 환경',
			},
		],
	},
	{
		id: 'closing-film',
		type: 'film',
		src: MEDIA_ASSETS.jagongOnlineAdClosing,
		alt: '재택근무반 온라인 학습 안내 영상',
		copy: {
			title: '오늘의 공부를 연결하세요.',
			body: '재택근무반과 함께 시작하기',
		},
		isClosing: true,
	},
];
