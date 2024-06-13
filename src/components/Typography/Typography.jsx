import PropTypes from 'prop-types';
import { Typography as MUITypography } from '@mui/material';

const Typography = ({ children, variant = 'body1', ...props }) => {
	return (
		<MUITypography variant={variant} {...props}>
			{children}
		</MUITypography>
	);
};

// prop validations
Typography.propTypes = {
	children: PropTypes.node,
	variant: PropTypes.string,
};

export default Typography;
