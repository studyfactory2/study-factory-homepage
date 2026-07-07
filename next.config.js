/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	sassOptions: {
		includePaths: ['./scss'],
		silenceDeprecations: ['import'],
	},
	i18n: {
		defaultLocale: 'ko',
		locales: ['ko', 'en'],
	},
};

module.exports = nextConfig;
