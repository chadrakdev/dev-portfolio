import { PageContainer } from "../styled/StyledContainers"
import { WithChildren } from "../../types/common"

const PageLayout = ({ children }: WithChildren) => {
	return <PageContainer disableGutters>{children}</PageContainer>
}

export default PageLayout
