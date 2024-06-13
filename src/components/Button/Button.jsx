import { Button as MUIButton } from '@mui/material';
import PropTypes from 'prop-types';
import { styleVariables } from '../../styles';

const { fonts } = styleVariables;

const Button = ({
	children,
	variant = 'contained',
	color = 'primary',
	...props
}) => {
	const customStyles = {
		borderRadius: 0,
		boxShadow: 'none',
		textTransform: 'capitalize',
		fontFamily: fonts.tertiaryFont,
		fontWeight: 400,
		fontSize: '1.6rem',
	};

	return (
		<MUIButton variant={variant} color={color} sx={customStyles} {...props}>
			{children}
		</MUIButton>
	);
};

// props validation
Button.propTypes = {
	children: PropTypes.node,
	variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
	color: PropTypes.oneOf(['primary', 'secondary']),
};

export default Button;
