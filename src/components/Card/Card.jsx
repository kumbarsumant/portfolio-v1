import {
	Card as MUICard,
	CardActions as MUICardActions,
	CardContent as MUICardContent,
} from '@mui/material';
import PropTypes from 'prop-types';
import Button from '../Button';
import Typography from '../Typography';
import styles from './Card.module.scss';

const Card = ({ title, body, actions, ...props }) => {
	let actionButtons;
	if (actions) {
		actionButtons = actions.map(({ url, label }) => {
			return (
				<Button
					href={url}
					variant="text"
					target="_blank"
					color="primary"
					key={url}
					className={styles.actionButtons}
				>
					{label}
				</Button>
			);
		});
	}
	return (
		<MUICard className={styles.card} variant="outlined" {...props}>
			<MUICardContent>
				<Typography variant="h4" className="marginBottomMedium">
					{title}
				</Typography>
				<Typography variant="body1">{body}</Typography>
			</MUICardContent>
			{actions && (
				<MUICardActions className={styles.cardActions}>
					{actionButtons}
				</MUICardActions>
			)}
		</MUICard>
	);
};

// props validation
Card.propTypes = {
	title: PropTypes.string,
	body: PropTypes.string,
	actions: PropTypes.arrayOf(Object),
};

export default Card;
