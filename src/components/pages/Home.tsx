import { work } from "../../data/work.data"
import { projects } from "../../data/projects.data"
import { PageSection, ContentSection } from "../styled/StyledContainers"
import { Heading, Subhead, Text } from "../styled/StyledText"
import { AnimatedContainer } from "../styled/StyledContainers"

const Home = () => {
	return (
		<AnimatedContainer>
			<main>
				<PageSection key="bio">
					<Heading>Chadrak H</Heading>
					<Heading hasPadding>Software Engineer</Heading>
					<Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, voluptate!</Text>
					<Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, aliquid. Reprehenderit quae obcaecati accusantium quod dolor temporibus, eligendi fugiat ullam, illo nemo consequatur soluta laborum sed ipsa ea ab porro?</Text>
					<Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis error quae ab aperiam corrupti porro, explicabo aut atque quas sunt.</Text>
				</PageSection>

				<PageSection key="work">
					<Heading hasPadding>Work</Heading>
					{work
						.filter(data => data.isCurrent)
						.map(data =>
							<ContentSection key={data.id}>
								<Heading>{data.company}</Heading>
								<Subhead>{data.position}</Subhead>
								<Subhead sx={{ paddingBottom: '0.5rem' }}>{data.start} - {data.isCurrent ? "Current" : data.end}</Subhead>
								<Text>{data.description}</Text>
							</ContentSection>
						)}
				</PageSection>

				<PageSection key="projects">
					<Heading hasPadding>Projects</Heading>
					{projects[0] && (
						<ContentSection>
							<Heading>{projects[0].title}</Heading>
							<Subhead>
  								Technologies: {" "}
								{projects[0].tags
									.map((tag, index, array) => (
										<span key={index}>
											{tag}
											{index < array.length - 1 && ", "}
										</span>
									))}
							</Subhead>

							<Text>{projects[0].description}</Text>
						</ContentSection>
					)}
				</PageSection>
			</main>
		</AnimatedContainer>
	)
}

export default Home
