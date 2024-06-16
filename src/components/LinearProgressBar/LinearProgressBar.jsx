import PropTypes from 'prop-types';
import { LinearProgress } from '@mui/material';
import Stack from '../Stack';
import Typography from '../Typography';
import styles from './LinearProgressBar.module.scss';
import { styleVariables } from '../../styles';

const { colors } = styleVariables;

const LinearProgressBar = ({ label, progress }) => {
	return (
		<Stack rowGap={1}>
			{/* Label */}
			<Stack
				display="flex"
				direction="row"
				justifyContent="space-between"
				alignItems="center"
			>
				<Typography component="span" className={styles.label}>
					{label}
				</Typography>

				<Typography component="span" className={styles.label}>
					{`${progress}%`}
				</Typography>
			</Stack>

			{/* Progress bar */}
			<LinearProgress
				sx={{
					'&.MuiLinearProgress-root': {
						height: 8,
						backgroundColor: colors.lightGreyColor,
					},
				}}
				variant="determinate"
				value={progress}
			/>
		</Stack>
	);
};

// props validation
LinearProgressBar.propTypes = {
	label: PropTypes.string,
	progress: PropTypes.number,
};

export default LinearProgressBar;
