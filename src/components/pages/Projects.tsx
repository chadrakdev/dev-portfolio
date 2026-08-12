import { Heading } from "../styled/StyledText"
import { projects } from "../../data/projects.data"
import { PageSection } from "../styled/StyledContainers"
import ContentList from "../content/ContentList"
import ContentListItem from "../content/ContentListItem"
import { DisplayCountProps } from "../../types/common"

const Projects = ({ displayCount }: DisplayCountProps) => {
	const visibleProjects = displayCount == null ? projects : projects.slice(0, displayCount)

	return (
		<PageSection>
			<Heading hasPadding>Projects</Heading>
			<ContentList>
				{visibleProjects.map((data) => (
					<ContentListItem
						key={data.id}
						title={data.title}
						description={data.description}
						url={data.url}
					/>
				))}
			</ContentList>
		</PageSection>
	)
}

export default Projects
