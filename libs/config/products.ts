export type ProductSlug = 'jagong-online' | 'study-factory-app' | 'research-lab';

export interface ProductConfig {
	slug: ProductSlug;
	category: string;
	name: string;
	summary: string;
	description: string;
	status: 'live' | 'building' | 'studio';
	href?: string;
}

export const PRODUCTS: ProductConfig[] = [
	{
		slug: 'jagong-online',
		category: 'Study Product',
		name: 'Jagong Online',
		summary: '온라인에서도 집중 루틴을 이어갈 수 있도록 설계하는 자격증공장의 디지털 학습 제품입니다.',
		description:
			'공간에서 쌓은 학습 루틴을 온라인으로 확장합니다. 수험생이 오늘의 공부를 놓치지 않도록 기록, 동기, 흐름을 정리하는 제품으로 발전시킵니다.',
		status: 'building',
		href: 'https://jagongonline.com',
	},
	{
		slug: 'study-factory-app',
		category: 'PWA Platform',
		name: 'Study Factory App',
		summary: '예약, 출석, 멤버십, 공지, 상담 흐름을 모바일에서 빠르게 사용할 수 있는 운영 앱입니다.',
		description:
			'자격증공장의 실제 운영 경험을 바탕으로 만든 PWA입니다. 수험생과 운영자가 반복적으로 쓰는 기능을 가볍고 정확하게 연결합니다.',
		status: 'building',
		href: 'https://studyfactoryapp.vercel.app',
	},
	{
		slug: 'research-lab',
		category: 'Web Build Studio',
		name: 'Research Lab',
		summary: '공간 운영에서 검증한 방식으로 웹사이트와 내부 시스템을 직접 만들고 확장합니다.',
		description:
			'Study Factory Research Lab은 공부 공간을 운영하며 발견한 문제를 웹 제품으로 해결하는 작은 기술 팀입니다. 홈페이지, PWA, 내부 운영 시스템을 만듭니다.',
		status: 'studio',
	},
];

export const getProductBySlug = (slug: string) => PRODUCTS.find((product) => product.slug === slug);
