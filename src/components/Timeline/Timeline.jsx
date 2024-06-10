import PropTypes from 'prop-types';
import { Grid, Stack } from '@mui/material';
import styles from './Timeline.module.scss';

const Timeline = ({ children }) => {
	return (
		<Grid
			container
			columnSpacing={3}
			sx={{
				'&.MuiGrid-item': {
					display: 'flex',
					justifyContent: 'stretch',
					alignItems: 'stretch',
				},
			}}
		>
			<Grid item>
				<div className={styles.squarePoint} />
			</Grid>
			<Grid item xs>
				<Stack>{children}</Stack>
			</Grid>
		</Grid>
	);
};

Timeline.propTypes = {
	children: PropTypes.node,
};

export default Timeline;
