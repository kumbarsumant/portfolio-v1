import { createTheme } from '@mui/material/styles';
import colors from './abstract/variables/_colors.module.scss';
import fonts from './abstract/variables/_fonts.module.scss';

const theme = createTheme({
	palette: {
		primary: {
			main: colors.primaryColor,
			light: colors.primaryColorLighten,
			dark: colors.primaryColorDarken,
			contrastText: colors.whiteColor,
		},
		secondar: {
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
