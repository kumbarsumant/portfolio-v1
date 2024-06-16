import { Typography } from '@mui/material';
import Grid from '../../components/Grid';
import styles from './Footer.module.scss';
import Link from '../../components/Link';

const Footer = () => {
	return (
		<footer className="footer">
			<Grid container spacing={8}>
				<Grid item xs={6} lg={2}>
					<Typography
						variant="h4"
						className={`marginBottomSemiLarge ${styles.footerColumnsTitle}`}
					>
						RESOURCES
					</Typography>
					<ul className={styles.footerColumns}>
						<li className="marginBottomMedium">
							<Link href="/" target="_blank" variant="tertiary">
								Resume
							</Link>
						</li>
					</ul>
				</Grid>
				<Grid item xs={6} lg={2}>
					<Typography
						variant="h4"
						className={`marginBottomSemiLarge ${styles.footerColumnsTitle}`}
					>
						FOLLOW ME
					</Typography>
					<ul className={styles.footerColumns}>
						<li className="marginBottomMedium">
							<Link href="/" target="_blank" variant="tertiary">
								Github
							</Link>
						</li>
						<li className="marginBottomMedium">
							<Link href="/" target="_blank" variant="tertiary">
								LinkedIn
							</Link>
						</li>
					</ul>
				</Grid>
				<Grid item xs={12} lg={4} style={{ marginLeft: 'auto' }}>
					<Typography variant="body1" className={styles.copyText}>
						&copy;&nbsp;2024 Sumant Kumbar. All rights reserved.
					</Typography>
				</Grid>
			</Grid>
		</footer>
	);
};

export default Footer;
