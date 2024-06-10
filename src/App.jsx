import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/js/theme';

const App = () => {
	return <ThemeProvider theme={theme}>App</ThemeProvider>;
};

export default App;
