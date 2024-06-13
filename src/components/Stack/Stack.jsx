import { Stack as MUIStack } from '@mui/material';
import PropsTypes from 'prop-types';

const Stack = ({ children, ...props }) => {
	return <MUIStack {...props}>{children}</MUIStack>;
};

// props validation
Stack.propTypes = {
	children: PropsTypes.node,
};

export default Stack;
