import { Box as MUIBox } from '@mui/material';
import PropsTypes from 'prop-types';

const Box = ({ children, ...props }) => {
	return <MUIBox {...props}>{children}</MUIBox>;
};

// props validation
Box.propTypes = {
	children: PropsTypes.node,
};

export default Box;
