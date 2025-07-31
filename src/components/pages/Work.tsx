import { work } from "../../data/work.data"
import { Heading, Subhead, Text } from "../styled/StyledText"
import { PageSection, ContentSection } from "../styled/StyledContainers"
import { AnimatedContainer } from "../styled/StyledContainers"
import { List, ListItem } from "@mui/material"

interface WorkProps {
	displayCount?: number
}

const Work: React.FC<WorkProps> = ({ displayCount }) => {
	return (
		<AnimatedContainer>
			<PageSection key="work">
				<Heading hasPadding>Work</Heading>
				{work.slice(0, displayCount).map(data => 
					<ContentSection hasPaddingBottom key={data.id}>
						<Heading>{data.position}</Heading>
						<Subhead>{data.company}</Subhead>
						<Subhead sx={{ paddingBottom: '0.5rem' }}>{data.start} - {data.isCurrent ? "Present" : data.end}</Subhead>
						<Text>{data.description}</Text>
						{displayCount == null && (
							<List>
								{data.responsibilities.map(responsibility => (
									<ListItem disableGutters key={responsibility}>
                    					• {responsibility}
									</ListItem>
								))}
							</List>
						)}
					</ContentSection>
				)}
			</PageSection>
		</AnimatedContainer>
	)
}

export default Work
