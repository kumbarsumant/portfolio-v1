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
			dark: colors.lightGreyColor2,
			contrastText: colors.darkColor,
		},
		// info: {
		// 	main: colors.lightGreyColor2,
		// 	contrastText: colors.whiteColor,
		// },
	},
	typography: {
		h1: {
			fontFamily: fonts.primaryFont,
			color: colors.darkColor,
			fontSize: '8rem',
		},
		h2: {
			fontFamily: fonts.primaryFont,
			color: colors.darkColor,
			fontSize: '6rem',
		},
		h3: {
			fontFamily: fonts.tertiaryFont,
			color: colors.primaryColor,
			fontSize: '4rem',
		},
		h4: {
			fontFamily: fonts.tertiaryFont,
			color: colors.primaryColor,
			fontSize: '2rem',
		},
		h5: {
			fontFamily: fonts.tertiaryFont,
			color: colors.primaryColor,
			fontSize: '1.6rem',
		},
		body1: {
			fontFamily: fonts.secondaryFont,
			color: colors.greyColor,
			fontSize: '1.6rem',
		},
		body2: {
			fontFamily: fonts.secondaryFont,
			color: colors.greyColor,
			fontSize: '1.4rem',
		},
	},
});

export default theme;
