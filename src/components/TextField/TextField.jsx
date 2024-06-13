import PropTypes from 'prop-types';
import { TextField as MUITextField } from '@mui/material';
import { styleVariables } from '../../styles';

const { fonts } = styleVariables;

const TextField = ({ label = '', variant = 'standard', ...props }) => {
	return (
		<MUITextField
			variant={variant}
			label={label}
			sx={{
				'& .MuiInput-input': {
					fontSize: '1.6rem',
				},
				'& .MuiInputLabel-root': {
					fontSize: '1.6rem',
					fontFamily: fonts.tertiaryFont,
				},
				'& .MuiFormHelperText-root': {
					fontSize: '1.2rem',
					fontFamily: fonts.tertiaryFont,
				},
			}}
			{...props}
		/>
	);
};

// props validation
TextField.propTypes = {
	label: PropTypes.string,
	variant: PropTypes.oneOf(['standard', 'outlined', 'filled']),
};

export default TextField;
