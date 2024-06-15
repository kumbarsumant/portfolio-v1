import PropTypes from 'prop-types';
import styles from './MenuItem.module.scss';

const MenuItem = ({ href, children, className, active, ...props }) => {
	const classes = active ? styles.active : styles.normal;
	return (
		<li className={`${styles.li} ${classes} ${className || ''}`}>
			<a href={href} {...props}>
				{children}
			</a>
		</li>
	);
};

// props validation
MenuItem.propTypes = {
	href: PropTypes.string,
	children: PropTypes.node,
	active: PropTypes.bool,
	className: PropTypes.string,
};

export default MenuItem;
