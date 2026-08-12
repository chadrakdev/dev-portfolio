import { ContentSection } from "../styled/StyledContainers"
import { WithChildren } from "../../types/common"

const ContentList = ({ children }: WithChildren) => {
	return <ContentSection>{children}</ContentSection>
}

export default ContentList
