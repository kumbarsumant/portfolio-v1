import Typography from '../../components/Typography';
import Card from '../../components/Card';
import Grid from '../../components/Grid';

const projects = [
	{
		title: 'Simple Interpreter',
		body: `I created a basic interpreter in Python and developed an IDE to write code and view the results. This was a significant component of my college major project. I owe thanks to Ruslan Spivak, whose blog "Let's build A Simple Interpreter" has helped me comprehend and create this project.`,
		actions: [
			{
				url: 'https://www.google.com',
				label: 'LIVE',
			},
			{
				url: 'https://react.dev',
				label: 'GITHUB',
			},
		],
	},

	{
		title: 'Sorting Visualizer',
		body: `This project provides a visual representation of different sorting algorithms such as Merge Sort, Selection Sort, and Bubble Sort. This project helped me to improve my skills in JavaScript and learn advanced concepts while also gaining a deeper understanding of sorting algorithms.`,
		actions: [
			{
				url: 'https://www.google.com',
				label: 'LIVE',
			},
			{
				url: 'https://react.dev',
				label: 'GITHUB',
			},
		],
	},

	{
		title: 'Portfolio',
		body: `I have crafted my own portfolio website that has not only served as a testament to my progress but also as a platform for mastering the fundamentals of UI/UX designs. This endeavor has allowed me to delve profoundly into the realms of CSS and JavaScript, unraveling their intricacies.`,
		actions: [
			{
				url: 'https://www.google.com',
				label: 'LIVE',
			},
			{
				url: 'https://react.dev',
				label: 'GITHUB',
			},
		],
	},
];

const Projects = () => {
	return (
		<section id="projects" className="section">
			<Typography variant="h2" className="marginBottomXL">
				Projects
			</Typography>

			<Typography component="p" variant="body1" className="marginBottomXL">
				Here, you&apos;ll find a showcase of the various endeavors I&apos;ve
				passionately undertaken, allowing me to translate the knowledge acquired
				through my learning journey into practical applications. My portfolio
				comprises a collection of significant projects that not only demonstrate
				my skillset but also exemplify my problem-solving skills. Each project
				represents an opportunity where I&apos;ve effectively harnessed my
				understanding to address distinct challenges. Explore the following
				section to delve into the details of these remarkable undertakings.
			</Typography>

			{/* <Card
				title="Card Title"
				body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sint, repellendus minima cumque eius veritatis tempore ipsa id, aliquam praesentium, eum itaque sequi odio quaerat illo molestiae dolor accusantium ab neque. Eos facilis dolore, doloremque temporibus obcaecati voluptas eveniet quam."
				actions={[
					{
						url: 'https://www.google.com',
						label: 'Google',
					},
					{
						url: 'https://react.dev',
						label: 'React',
					},
				]}
			/> */}

			<Grid container rowSpacing={5} columnSpacing={4}>
				{projects.map(({ title, body, actions }) => {
					return (
						<Grid key={title} item xs={12} md={12} lg={4}>
							<Card title={title} body={body} actions={actions} />
						</Grid>
					);
				})}
			</Grid>
		</section>
	);
};

export default Projects;
