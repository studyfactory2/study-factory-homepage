export interface JagongOnlineFlowStep {
	number: string;
	label: string;
	title: string;
	body: string;
}

export interface JagongOnlinePillar {
	label: string;
	title: string;
	body: string;
}

export const JAGONG_ONLINE_FLOW: JagongOnlineFlowStep[] = [
	{
		number: '01',
		label: 'Check-in',
		title: '온라인 입실',
		body: '정해진 시간에 온라인 학습 공간에 들어오며 오늘 공부의 시작점을 분명하게 만듭니다.',
	},
	{
		number: '02',
		label: 'Focus',
		title: '집중',
		body: '각자의 장소에서도 함께 공부하는 흐름 안에서 계획한 학습을 이어갑니다.',
	},
	{
		number: '03',
		label: 'Record',
		title: '기록',
		body: '출석과 학습 흐름을 남겨 하루의 반복이 끊기지 않도록 정리합니다.',
	},
	{
		number: '04',
		label: 'Feedback',
		title: '피드백',
		body: '필요한 순간에는 현재 상태를 확인하고 다음 행동을 다시 정리합니다.',
	},
];

export const JAGONG_ONLINE_PILLARS: JagongOnlinePillar[] = [
	{
		label: 'Attendance',
		title: '출석',
		body: '혼자 공부하는 날에도 시작 시간을 놓치지 않도록 하루의 첫 기준을 만듭니다.',
	},
	{
		label: 'Routine',
		title: '루틴',
		body: '한 번의 긴 공부보다 매일 다시 시작할 수 있는 반복의 구조를 중요하게 생각합니다.',
	},
	{
		label: 'Feedback',
		title: '상담 · 피드백',
		body: '흐름이 흔들리는 순간을 함께 확인하고 다음 공부 방향을 정리합니다.',
	},
	{
		label: 'Continuity',
		title: '연속성',
		body: '공간이 달라져도 오늘의 집중이 내일로 이어질 수 있도록 학습 흐름을 연결합니다.',
	},
];
