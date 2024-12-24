import { ReactNode } from "react"
import { ContentSection } from "../styled/StyledContainers";

interface ContentListProps {
    children: ReactNode;
}

const ContentList: React.FC<ContentListProps> = ({ children }) => {
	return (
		<ContentSection>
			{children}
		</ContentSection>
	)
}

export default ContentList
