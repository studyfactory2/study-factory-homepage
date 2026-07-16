/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	devIndicators: false,
	sassOptions: {
		includePaths: ['./scss'],
		silenceDeprecations: ['import'],
	},
	i18n: {
		defaultLocale: 'ko',
		locales: ['ko', 'en'],
		localeDetection: false,
	},
};

module.exports = nextConfig;
