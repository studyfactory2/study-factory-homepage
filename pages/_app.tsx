import '../scss/app.scss';
import type { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { appWithTranslation } from 'next-i18next';
import theme from '../libs/MaterialTheme';

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Component {...pageProps} />
		</ThemeProvider>
	);
};

export default appWithTranslation(App);
