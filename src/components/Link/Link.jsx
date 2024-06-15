import PropTypes from 'prop-types';
import styles from './Link.module.scss';

const Link = ({
	href,
	children,
	className,
	variant = 'secondary',
	...props
}) => {
	const classes = styles[variant];
	return (
		<a
			href={href}
			className={`${styles.link} ${classes} ${className || ''}`}
			{...props}
		>
			{children}
		</a>
	);
};

// props validation
Link.propTypes = {
	href: PropTypes.string.isRequired,
	children: PropTypes.node,
	variant: PropTypes.string,
	className: PropTypes.string,
};

export default Link;
