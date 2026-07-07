import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
	return (
		<Html lang="ko">
			<Head>
				<meta name="theme-color" content="#101412" />
				<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default Document;
