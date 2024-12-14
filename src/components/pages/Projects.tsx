import { Heading, Text } from "../styled/StyledText"
import { projects } from "../../data/projects.data"
import { PageSection, ContentSection, TagList, TagListItem } from "../styled/StyledContainers"
import { AnimatedContainer } from "../styled/StyledContainers"

const Projects = () => {
	return (
		<AnimatedContainer>
			<PageSection key="projects">
				<Heading hasPadding>Projects</Heading>
				{projects.map(data =>
					<ContentSection key={data.id}>
						<Heading>{data.title}</Heading>
						{data.tags.length > 0 && (
							<TagList disablePadding>
								{data.tags.map(tag => (
									<TagListItem key={tag} disableGutters>{tag}</TagListItem>
								))}
							</TagList>
						)}
						<Text>{data.description}</Text>
					</ContentSection>
				)}
			</PageSection>
		</AnimatedContainer>
	)
}

export default Projects
