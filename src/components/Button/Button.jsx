import { Button as MUIButton } from '@mui/material';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({
	children,
	variant = 'contained',
	color = 'primary',
	className,
	...props
}) => {
	return (
		<MUIButton
			variant={variant}
			color={color}
			className={`${className} ${styles.btn}`}
			{...props}
		>
			{children}
		</MUIButton>
	);
};

// props validation
Button.propTypes = {
	children: PropTypes.node,
	variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
	color: PropTypes.oneOf(['primary', 'secondary']),
	className: PropTypes.string,
};

export default Button;
