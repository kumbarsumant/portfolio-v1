import Typography from '../../components/Typography';
import Grid from '../../components/Grid';
import Button from '../../components/Button';
import Box from '../../components/Box';
import styles from './Hero.module.scss';
import profileImage from '../../assets/images/profile.jpg';

const Hero = () => {
	return (
		<section className={`section ${styles.sectionHero}`}>
			<Grid container className="heroContainer">
				<Grid item xs={12} lg={7} className={styles.mainTextContainer}>
					<Typography variant="h1">Hi, I&apos;m</Typography>
					<Typography variant="h1" className="marginBottomMedium">
						Sumant Kumbar.
					</Typography>
					<Typography variant="h6" className="marginBottomLarge">
						Continuously growing designer, developer, and enthusiastic coder,
						dedicated to the art of programming and driven to craft efficient
						and inventive software solutions.
					</Typography>
					<Box className={styles.btnContainer}>
						<Button size="large" className={styles.btn}>
							Contact Me
						</Button>
						<Button variant="outlined" className={styles.btn} size="large">
							Explore More
						</Button>
					</Box>
				</Grid>
				<Grid item xs={12} lg={5} className={styles.mainImgContainer}>
					<div className={styles.imgContainer}>
						<img src={profileImage} className={styles.img} alt="profile" />
					</div>
				</Grid>
			</Grid>
		</section>
	);
};

export default Hero;
