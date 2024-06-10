import PropTypes from 'prop-types';
import { Stack, LinearProgress } from '@mui/material';
import Typography from '../Typography';
import { styleVariables } from '../../styles';

const { colors } = styleVariables;

const LinearProgressBar = ({ label, progress }) => {
	const styleForLabel = {
		fontSize: '1.4rem',
		color: colors.darkColor,
	};

	return (
		<Stack rowGap={1}>
			{/* Label */}
			<Stack
				display="flex"
				direction="row"
				justifyContent="space-between"
				alignItems="center"
			>
				<Typography component="span" sx={styleForLabel}>
					{label}
				</Typography>

				<Typography component="span" sx={styleForLabel}>
					{`${progress}%`}
				</Typography>
			</Stack>

			{/* Progress bar */}
			<LinearProgress
				sx={{
					'&.MuiLinearProgress-root': {
						height: 6,
						backgroundColor: colors.lightGreyColor,
					},
				}}
				variant="determinate"
				value={progress}
			/>
		</Stack>
	);
};

LinearProgressBar.propTypes = {
	label: PropTypes.string,
	progress: PropTypes.number,
};

export default LinearProgressBar;
