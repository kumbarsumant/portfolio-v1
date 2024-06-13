import PropTypes from 'prop-types';
import Grid from '../Grid';
import Stack from '../Stack';
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

// props validation
Timeline.propTypes = {
	children: PropTypes.node,
};

export default Timeline;
