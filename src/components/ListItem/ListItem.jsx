import PropTypes from 'prop-types';

const ListItem = ({ children }) => {
	return <li className="customLi">{children}</li>;
};

ListItem.propTypes = {
	children: PropTypes.node,
};

// props validation
export default ListItem;
