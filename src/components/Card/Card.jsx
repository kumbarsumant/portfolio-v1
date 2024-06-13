import {
	Card as MUICard,
	CardActions as MUICardActions,
	CardContent as MUICardContent,
} from '@mui/material';
import PropTypes from 'prop-types';
import Button from '../Button';
import Typography from '../Typography';

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
					sx={{
						textTransform: 'uppercase',
						fontSize: '1.4rem',
					}}
				>
					{label}
				</Button>
			);
		});
	}
	return (
		<MUICard variant="outlined" {...props}>
			<MUICardContent>
				<Typography variant="h4" mb={3} gutterBottom>
					{title}
				</Typography>
				<Typography variant="body1">{body}</Typography>
			</MUICardContent>
			{actions && <MUICardActions>{actionButtons}</MUICardActions>}
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
