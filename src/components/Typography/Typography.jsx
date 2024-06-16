import PropTypes from 'prop-types';
import { Typography as MUITypography } from '@mui/material';
import styles from './Typography.module.scss';

const Typography = ({ children, variant = 'body1', className, ...props }) => {
	return (
		<MUITypography
			variant={variant}
			className={`${styles.typography} ${className}`}
			{...props}
		>
			{children}
		</MUITypography>
	);
};

// prop validations
Typography.propTypes = {
	children: PropTypes.node,
	variant: PropTypes.string,
	className: PropTypes.string,
};

export default Typography;
