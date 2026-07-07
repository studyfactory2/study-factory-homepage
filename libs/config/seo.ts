import { BRAND } from './brand';

export const DEFAULT_SEO = {
	title: `${BRAND.koreanName} | ${BRAND.sloganEn}`,
	description:
		'부산에서 시작하는 성인 수험생의 집중 루틴. 자격증공장은 공간, 장비, 분위기, 시스템을 한 방향으로 정렬해 공부만 남기는 프리미엄 학습 환경을 만듭니다.',
	url: 'https://studyfactory.kr',
	image: '/og/study-factory.jpg',
	siteName: BRAND.legalName,
} as const;

export const createPageTitle = (title: string) => `${title} | ${BRAND.koreanName}`;
