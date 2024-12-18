import { Heading, Subhead, Text } from "../styled/StyledText"
import { projects } from "../../data/projects.data"
import { PageSection, ContentSection } from "../styled/StyledContainers"
import { AnimatedContainer } from "../styled/StyledContainers"

const Projects = () => {
	return (
		<AnimatedContainer>
			<PageSection key="projects">
				<Heading hasPadding>Projects</Heading>
				{projects.map(data =>
					<ContentSection key={data.id}>
						<Heading>{data.title}</Heading>
						<Subhead>
  								Technologies: {" "}
							{data.tags
								.map((tag, index, array) => (
									<span key={index}>
										{tag}
										{index < array.length - 1 && ", "}
									</span>
								))}
						</Subhead>
						<Text>{data.description}</Text>
					</ContentSection>
				)}
			</PageSection>
		</AnimatedContainer>
	)
}

export default Projects
