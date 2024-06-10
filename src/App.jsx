import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Button from './components/Button';
import theme from './styles/js/theme';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<div>
				<Button variant="contained" size="large">
					Contact Me
				</Button>
				<Button variant="outlined" size="large">
					Explore More
				</Button>
			</div>
		</ThemeProvider>
	);
};

export default App;
