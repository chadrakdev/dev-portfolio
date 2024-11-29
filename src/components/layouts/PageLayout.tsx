import { styled, Container } from "@mui/material"
import { ReactNode } from "react"

const StyledContainer = styled(Container)(() => ({
	padding: '3rem 0.1rem',
	margin: '0',
}))

interface LayoutProps {
    children: ReactNode;
}

const PageLayout : React.FC<LayoutProps> = ({ children }) => {
	return (
		<StyledContainer disableGutters>
			{children}
		</StyledContainer>
	)
}

export default PageLayout
