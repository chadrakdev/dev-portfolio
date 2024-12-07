import { work } from "../../data/work.data"
import { Heading, Subhead, Text } from "../styled/StyledText"
import { PageSection, ContentSection } from "../styled/StyledContainers"

const Work = () => {
	return (
		<PageSection key="work">
			<Heading hasPadding>Work</Heading>
			{work.map(data => 
				<ContentSection key={data.id}>
					<Heading>{data.company}</Heading>
					<Subhead>{data.position}</Subhead>
					<Subhead sx={{ paddingBottom: '0.5rem' }}>{data.start} - {data.isCurrent ? "Current" : data.end}</Subhead>
					<Text>{data.description}</Text>
				</ContentSection>
			)}
		</PageSection>
	)
}

export default Work
