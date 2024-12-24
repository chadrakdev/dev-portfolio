import { ContentSection } from "../styled/StyledContainers";
import { Heading, Text } from "../styled/StyledText";
import { LinkWrapper } from "../styled/StyledLinks";

interface ContentListItemProps {
    title: string;
    description: string;
    url: string;
}

const ContentListItem: React.FC<ContentListItemProps> = ({ title, description, url }) => {
	return (
		<ContentSection
			hasBorder
			hasMargin
			hasPadding
			enableHover
		>
			<LinkWrapper
				target="_blank"
				rel="noopener noreferrer"
				to={url}>
				<Heading>{title}</Heading>
				<Text>{description}</Text>
			</LinkWrapper>
		</ContentSection>
	)
}

export default ContentListItem
