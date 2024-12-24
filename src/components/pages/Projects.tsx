import { Heading } from "../styled/StyledText"
import { projects } from "../../data/projects.data"
import { PageSection } from "../styled/StyledContainers"
import { AnimatedContainer } from "../styled/StyledContainers"
import ContentList from "../content/ContentList"
import ContentListItem from "../content/ContentListItem"

const Projects = () => {
	return (
		<AnimatedContainer>
			<PageSection>
				<Heading hasPadding>Projects</Heading>
				<ContentList>
					{projects.map((data) => (
						<ContentListItem
							key={data.id}
							title={data.title}
							description={data.description}
							url={data.url}
						/>
					))}
				</ContentList>
			</PageSection>
		</AnimatedContainer>
	)
}

export default Projects
