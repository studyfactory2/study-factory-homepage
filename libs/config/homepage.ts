export interface HomeExperience {
	id: 'study-factory' | 'jagong-online';
	koreanName: string;
	href: string;
	imageSrc: string;
	imageAlt: string;
}

export const HOME_EXPERIENCES: HomeExperience[] = [
	{
		id: 'study-factory',
		koreanName: '출퇴근사원 ',
		href: '/study-factory',
		imageSrc: '/images/home/gateway-offline.jpeg',
		imageAlt: '비 오는 저녁, 횡단보도를 걷는 사람의 모습',
	},
	{
		id: 'jagong-online',
		koreanName: '재택근무반',
		href: '/jagong-online',
		imageSrc: '/images/home/gateway-online1.jpeg',
		imageAlt: '노트북과 꽃이 놓인 온라인 학습 책상',
	},
];
