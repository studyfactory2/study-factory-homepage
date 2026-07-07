import Head from 'next/head';
import { DEFAULT_SEO } from '../../../config';

interface SeoHeadProps {
	title?: string;
	description?: string;
	path?: string;
	image?: string;
}

const SeoHead = (props: SeoHeadProps) => {
	const title = props.title ?? DEFAULT_SEO.title;
	const description = props.description ?? DEFAULT_SEO.description;
	const url = `${DEFAULT_SEO.url}${props.path ?? ''}`;
	const image = props.image ?? DEFAULT_SEO.image;

	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<link rel="canonical" href={url} />

			<meta property="og:type" content="website" />
			<meta property="og:site_name" content={DEFAULT_SEO.siteName} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:url" content={url} />
			<meta property="og:image" content={image} />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image} />
		</Head>
	);
};

export default SeoHead;
