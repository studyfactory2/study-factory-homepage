import { MEDIA_ASSETS } from './media';

export type ExperienceMedia = {
	id: string;
	type: 'image' | 'video' | 'brand';
	src: string;
	alt: string;
	label: string;
	href: string;
	hasSoundControl?: boolean;
};

export type ExperienceLanding = {
	slug: 'study-factory' | 'jagong-online';
	eyebrow: string;
	name: string;
	description: string;
	aboutHref: string;
	hero: ExperienceMedia;
	media: ExperienceMedia[];
};

export const STUDY_FACTORY_EXPERIENCE: ExperienceLanding = {
	slug: 'study-factory',
	eyebrow: 'Study Factory · Busan',
	name: '자격증공장',
	description: '공부가 이어질 수 있는 실제 공간의 이야기',
	aboutHref: '/study-factory/about',
	hero: {
		id: 'study-factory-main-film',
		type: 'video',
		src: MEDIA_ASSETS.studyFactoryMain,
		alt: '자격증공장 공간과 수험생의 흐름을 담은 메인 영상',
		label: '자격증공장',
		href: '/study-factory/about',
	},
	media: [],
};

export const JAGONG_ONLINE_EXPERIENCE: ExperienceLanding = {
	slug: 'jagong-online',
	eyebrow: 'Jagong Online',
	name: '재택근무반',
	description: '공간 밖에서도 공부의 흐름을 이어가는 방식',
	aboutHref: '/jagong-online/about',
	hero: {
		id: 'jagong-film',
		type: 'video',
		src: MEDIA_ASSETS.jagongOnlineFilm,
		alt: '재택근무반 온라인 학습 영상',
		label: '재택근무반',
		href: '/jagong-online/about',
	},
	media: [
		{
			id: 'jagong-story',
			type: 'brand',
			src: '/images/brands/jagong-online-logo.webp',
			alt: '온라인관리형독서실 재택근무반 로고',
			label: '서비스 소개',
			href: '/jagong-online/about',
		},
		{
			id: 'jagong-routine',
			type: 'video',
			src: MEDIA_ASSETS.jagongOnlineFilm,
			alt: '재택근무반 온라인 루틴 영상',
			label: '온라인 루틴',
			href: '/jagong-online/about',
		},
		{
			id: 'jagong-consultation',
			type: 'brand',
			src: '/images/brands/jagong-online-logo.webp',
			alt: '',
			label: '상담 예약',
			href: '/contact',
		},
	],
};
