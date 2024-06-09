import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Button } from '@mui/material';
import theme from './styles/theme';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<div>
				<Button variant="contained" color="primary">
					Sumant
				</Button>
			</div>
		</ThemeProvider>
	);
};

export default App;
