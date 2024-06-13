import PropTypes from 'prop-types';
import './UlContainer.scss';

const UlContainer = ({ children, variant = 'primary' }) => {
	const classes =
		variant === 'primary' ? 'customUlPrimary' : 'customUlSecondary';
	return <ul className={classes}>{children}</ul>;
};

// props validation
UlContainer.propTypes = {
	children: PropTypes.node,
	variant: PropTypes.string,
};

export default UlContainer;
