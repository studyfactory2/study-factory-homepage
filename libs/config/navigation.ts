import { BRAND } from './brand';

export const NAVIGATION_ITEMS = [
	{
		label: 'Study Factory',
		href: '/',
	},
	{
		label: 'About',
		href: '/about',
	},
	{
		label: 'Research Lab',
		href: '/research-lab',
	},
	{
		label: 'Products',
		href: '/products',
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
			{ label: 'Study Factory', href: '/' },
			{ label: 'About', href: '/about' },
			{ label: 'FAQ', href: '/faq' },
			{ label: 'Contact', href: '/contact' },
		],
	},
	{
		title: BRAND.labName,
		links: [
			{ label: 'Research Lab', href: '/research-lab' },
			{ label: 'Products', href: '/products' },
			{ label: 'Jagong Online', href: '/products/jagong-online' },
			{ label: 'Study Factory App', href: '/products/study-factory-app' },
		],
	},
];
