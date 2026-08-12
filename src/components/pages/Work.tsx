import { work } from "../../data/work.data"
import { Heading, Subhead, Text } from "../styled/StyledText"
import { PageSection, ContentSection, TagList, TagListItem } from "../styled/StyledContainers"
import { List, ListItem } from "@mui/material"
import { DisplayCountProps } from "../../types/common"

const Work = ({ displayCount }: DisplayCountProps) => {
	const isPreview = displayCount != null
	const workEntries = [...work].reverse()
	const visibleWork = isPreview ? workEntries.slice(0, displayCount) : workEntries

	return (
		<PageSection key="work">
			<Heading hasPadding>Work</Heading>
			{visibleWork.map((data) => (
				<ContentSection hasPaddingBottom key={data.id}>
					<Heading>{data.position}</Heading>
					<Subhead>{data.company}</Subhead>
					<Subhead hasPaddingBottom>
						{data.start} - {data.isCurrent ? "Present" : data.end}
					</Subhead>
					<Text>{data.description}</Text>
					{!isPreview && (
						<TagList disablePadding>
							{data.technologies.map((tech) => (
								<TagListItem key={tech}>{tech}</TagListItem>
							))}
						</TagList>
					)}
					{!isPreview && (
						<List>
							{data.responsibilities.map((responsibility) => (
								<ListItem disableGutters key={responsibility}>
									• {responsibility}
								</ListItem>
							))}
						</List>
					)}
				</ContentSection>
			))}
		</PageSection>
	)
}

export default Work
