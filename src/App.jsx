import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/js/theme';
import Header from './layouts/Header';
import Hero from './features/Hero';
import About from './features/About';
import './styles/sass/main.scss';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Header />
			<main>
				<Hero />
				<About />
			</main>
		</ThemeProvider>
	);
};

export default App;
