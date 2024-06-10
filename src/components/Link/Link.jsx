import PropTypes from 'prop-types';
import { Link as MUILink } from '@mui/material';
import { styleVariables } from '../../styles';

const { fonts } = styleVariables;

const Link = ({ href, children, variant = 'secondary' }) => {
	const color =
		variant === 'primary'
			? styleVariables.colors.primaryColor
			: styleVariables.colors.lightGreyColor2;
	return (
		<MUILink
			href={href}
			sx={{
				fontFamily: fonts.tertiaryFont,
				fontSize: '1.6rem',
				textDecoration: 'none',
				color,
			}}
		>
			{children}
		</MUILink>
	);
};

Link.propTypes = {
	href: PropTypes.string.isRequired,
	children: PropTypes.node,
	variant: PropTypes.string,
};

export default Link;
