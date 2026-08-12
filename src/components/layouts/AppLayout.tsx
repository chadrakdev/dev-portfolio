import { AppContainer } from "../styled/StyledContainers"
import { WithChildren } from "../../types/common"

const AppLayout = ({ children }: WithChildren) => {
	return (
		<AppContainer maxWidth="sm" disableGutters>
			{children}
		</AppContainer>
	)
}

export default AppLayout
