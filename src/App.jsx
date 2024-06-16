import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/js/theme';
import Header from './layouts/Header';
import Hero from './features/Hero';
import About from './features/About';
import Projects from './features/Projects';
import Footer from './layouts/Footer';
import './styles/sass/main.scss';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Header />
			<main>
				<Hero />
				<About />
				<Projects />
			</main>
			<Footer />
		</ThemeProvider>
	);
};

export default App;
