import { Grid as MUIGrid } from '@mui/material';
import PropsTypes from 'prop-types';

const Grid = ({ children, ...props }) => {
	return <MUIGrid {...props}>{children}</MUIGrid>;
};

// props validation
Grid.propTypes = {
	children: PropsTypes.node,
};

export default Grid;
