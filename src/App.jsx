import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/js/theme';
import Header from './layouts/Header';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Header />
		</ThemeProvider>
	);
};

export default App;
