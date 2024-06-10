import { createTheme } from '@mui/material/styles';
import colors from '../sass/abstract/variables/_colors.module.scss';
import fonts from '../sass/abstract/variables/_fonts.module.scss';

const theme = createTheme({
	palette: {
		primary: {
			main: colors.primaryColor,
			contrastText: colors.whiteColor,
		},
		secondary: {
			main: colors.lightGreyColor,
			contrastText: colors.darkColor,
		},
	},
	typography: {
		h1: {
			fontFamily: fonts.primaryFont,
			color: colors.darkColor,
		},
		h2: {
			fontFamily: fonts.primaryFont,
			color: colors.darkColor,
		},
		h3: {
			fontFamily: fonts.tertiaryFont,
			color: colors.primaryColor,
		},
		h4: {
			fontFamily: fonts.tertiaryFont,
			color: colors.primaryColor,
		},
		h5: {
			fontFamily: fonts.tertiaryFont,
			color: colors.primaryColor,
		},
		body1: {
			fontFamily: fonts.secondaryFont,
			color: colors.greyColor,
		},
		body2: {
			fontFamily: fonts.secondaryFont,
			color: colors.greyColor,
		},
	},
});

export default theme;
