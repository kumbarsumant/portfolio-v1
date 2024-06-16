import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/js/theme';
import Header from './layouts/Header';
import Hero from './features/Hero/Hero';
import './styles/sass/main.scss';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Header />
			<main>
				<Hero />
			</main>
		</ThemeProvider>
	);
};

export default App;
