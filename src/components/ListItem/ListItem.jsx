import PropTypes from 'prop-types';

const ListItem = ({ children }) => {
	return <li className="customLi">{children}</li>;
};

ListItem.propTypes = {
	children: PropTypes.node,
};

export default ListItem;
