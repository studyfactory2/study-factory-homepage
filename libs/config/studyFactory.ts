export interface StudyFactoryFlowStep {
	number: string;
	label: string;
	title: string;
	body: string;
}

export interface StudyFactoryAudience {
	title: string;
	body: string;
}

export interface StudyFactoryFacility {
	title: string;
	body: string;
	image: string;
	alt: string;
}

export interface StudyFactoryFeature {
	kicker: string;
	title: string;
	body: string;
	image: string;
	alt: string;
	points: string[];
}

export const STUDY_FACTORY_AUDIENCES: StudyFactoryAudience[] = [
	{
		title: '긴 시험을 준비하는 성인 수험생',
		body: '전문직, 공무원, 공기업, 자격증처럼 하루의 밀도와 반복이 오래 필요한 수험생에게 맞춥니다.',
	},
	{
		title: '생활 리듬을 다시 잡고 싶은 분',
		body: '무엇을 공부할지는 알지만, 매일 같은 상태로 앉는 구조가 필요한 분들을 위해 운영합니다.',
	},
	{
		title: '혼자 버티기보다 관리가 필요한 분',
		body: '출석, 공지, 상담, 루틴이 한 흐름으로 이어지도록 공부 외의 결정을 줄입니다.',
	},
];

export const STUDY_FACTORY_FLOW: StudyFactoryFlowStep[] = [
	{
		number: '01',
		label: 'Arrival',
		title: '도착',
		body: '공간에 들어오면 오늘의 공부 상태로 빠르게 전환할 수 있도록 환경을 정돈합니다.',
	},
	{
		number: '02',
		label: 'Seat',
		title: '좌석',
		body: '고민 없이 앉을 수 있는 자리와 조용한 학습 밀도를 먼저 준비합니다.',
	},
	{
		number: '03',
		label: 'Attendance',
		title: '출석',
		body: '반복되는 출석 흐름으로 하루의 시작점을 흔들리지 않게 만듭니다.',
	},
	{
		number: '04',
		label: 'Routine',
		title: '루틴',
		body: '작은 반복이 이어지도록 공부 시간과 생활 리듬을 단단하게 잡습니다.',
	},
	{
		number: '05',
		label: 'Notice',
		title: '공지',
		body: '운영 안내와 변화는 빠르게 전달해 불필요한 혼란을 줄입니다.',
	},
	{
		number: '06',
		label: 'Consultation',
		title: '상담',
		body: '필요한 순간에 상태를 확인하고 다음 행동을 정리할 수 있게 돕습니다.',
	},
];

export const STUDY_FACTORY_FACILITIES: StudyFactoryFacility[] = [
	{
		title: '집중 좌석',
		body: '오래 앉는 수험생을 기준으로 조용하고 안정적인 공부 밀도를 만듭니다.',
		image: '/images/study-factory/space-desk.jpg',
		alt: '조용한 데스크 중심의 Study Factory 공간 무드',
	},
	{
		title: '루틴 라운지',
		body: '긴 하루 사이에도 리듬을 잃지 않도록 머무는 밀도와 여백을 함께 설계합니다.',
		image: '/images/study-factory/space-rhythm.jpg',
		alt: '라운지와 공부 공간이 함께 보이는 Study Factory 공간 무드',
	},
	{
		title: '집중 디테일',
		body: '조명, 책상, 안내 문구처럼 작은 요소가 오늘의 공부 상태를 다시 잡아줍니다.',
		image: '/images/study-factory/space-focus-detail.jpg',
		alt: '집중 루틴을 보여주는 책상 디테일',
	},
];

export const STUDY_FACTORY_FEATURES: StudyFactoryFeature[] = [
	{
		kicker: 'Space Mood',
		title: '밝고 넓은 공간감은 하루의 긴장을 낮춥니다.',
		body: '성인 수험생에게 필요한 공간은 화려함보다 오래 머물 수 있는 안정감입니다. 빛, 좌석, 동선, 소음이 공부의 흐름을 방해하지 않도록 차분한 밀도를 지향합니다.',
		image: '/images/study-factory/space-lounge.jpg',
		alt: '넓은 라운지와 공부 공간이 연결된 Study Factory 공간 무드',
		points: ['Light', 'Seat', 'Flow', 'Quiet'],
	},
	{
		kicker: 'Deep Work',
		title: '공부하는 사람의 시선에 맞춘 데스크 리듬.',
		body: '책상 앞에서 오래 버티는 사람에게는 자리의 반복성이 중요합니다. 같은 시간에 앉고, 같은 상태로 시작하고, 불필요한 결정을 줄이는 흐름을 만듭니다.',
		image: '/images/study-factory/space-studio.jpg',
		alt: '높은 천장과 반복된 데스크가 보이는 Study Factory 공간 무드',
		points: ['Desk', 'Routine', 'Focus', 'Repeat'],
	},
];

export const STUDY_FACTORY_HERO_IMAGE = {
	src: '/images/study-factory/space-hero.jpg',
	alt: '따뜻한 채광과 데스크가 보이는 Study Factory 공간 무드',
} as const;
