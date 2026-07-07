import { BRAND } from './brand';

export const NAVIGATION_ITEMS = [
	{
		label: 'Study Factory',
		href: '/',
	},
	{
		label: 'Products',
		href: '/products',
	},
	{
		label: 'About',
		href: '/about',
	},
	{
		label: 'Research Lab',
		href: '/products/research-lab',
	},
	{
		label: 'Contact',
		href: '/contact',
	},
];

export const FOOTER_LINK_GROUPS = [
	{
		title: BRAND.englishName,
		links: [
			{ label: 'About', href: '/about' },
			{ label: 'Products', href: '/products' },
			{ label: 'Contact', href: '/contact' },
		],
	},
	{
		title: BRAND.labName,
		links: [
			{ label: 'Jagong Online', href: '/products/jagong-online' },
			{ label: 'Study Factory App', href: '/products/study-factory-app' },
			{ label: 'Research Lab', href: '/products/research-lab' },
		],
	},
];
