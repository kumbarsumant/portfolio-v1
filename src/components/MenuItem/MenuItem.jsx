import PropTypes from 'prop-types';
import Link from '../Link';
import styles from './MenuItem.module.scss';

const MenuItem = ({ href, children, active }) => {
	const classes = active ? styles.active : styles.normal;
	return (
		<li className={classes}>
			<Link href={href} variant={active ? 'primary' : 'info'}>
				{children}
			</Link>
		</li>
	);
};

// props validation
MenuItem.propTypes = {
	href: PropTypes.string,
	children: PropTypes.node,
	active: PropTypes.bool,
};

export default MenuItem;
