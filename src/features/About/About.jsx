import styles from './About.module.scss';
import Typography from '../../components/Typography';
import LinearProgressBar from '../../components/LinearProgressBar';
import Grid from '../../components/Grid';

const skills = [
	{ label: 'ReactJS', progress: 80 },
	{ label: 'JavaScript', progress: 90 },
	{ label: 'Python', progress: 90 },
	{ label: 'HTML/CSS', progress: 90 },
	{ label: 'Data Structures and Algorithms', progress: 70 },
	{ label: 'NodeJS', progress: 60 },
];

const About = () => {
	return (
		<section id="about" className={`section ${styles.sectionAbout}`}>
			<Typography variant="h2" className="marginBottomXL">
				About
			</Typography>

			<Typography
				component="p"
				variant="body1"
				className="marginBottomSemiLarge"
			>
				I&apos;m Sumant. I&apos;m a passionate software developer with a solid
				two years of experience under my belt. My jam? Crafting awesome user
				interfaces that not only look slick but also work like a charm.
				You&apos;ll often find me diving deep into ReactJS, HTML, CSS (including
				SCSS) and JavaScript making sure every pixel is in its perfect place.
			</Typography>
			<Typography className="marginBottomSemiLarge">
				But it&apos;s not just about the visuals. I&apos;ve got a knack for
				diving into the nitty-gritty of Data Structures and Algorithms, ensuring
				that the solutions I whip up are not just fancy but also efficient. My
				goal? To create web experiences that flow seamlessly, blending
				innovative design with technical wizardry. Let&apos;s make the web a
				better place, one awesome interface at a time!
			</Typography>
			<Typography className="marginBottomXXL">
				With a rich tapestry of languages under my belt, each acquired through
				diligent online exploration, I&apos;ve engaged in projects of diverse
				sizes, from modest to monumental. Below, you&apos;ll find an array of
				skill bars that visually represent my proficiency in these programming
				languages. As my journey continues, I eagerly embrace the opportunity to
				further enhance my capabilities and embrace new horizons of expertise.
			</Typography>

			<Grid container spacing={4}>
				{skills.map((skill) => {
					return (
						<Grid key={skill.label} item xs={12} md={12} lg={6}>
							<LinearProgressBar
								label={skill.label}
								progress={skill.progress}
							/>
						</Grid>
					);
				})}
			</Grid>
		</section>
	);
};

export default About;
