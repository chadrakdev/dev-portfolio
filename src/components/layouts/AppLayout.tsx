import { styled, Container } from "@mui/material"
import { ReactNode } from "react"

const StyledContainer = styled(Container)(({ theme }) => ({
	maxWidth: "80%",
	margin: "0 auto",
	[theme.breakpoints.down("sm")]: {
		maxWidth: "90%"
	},
}))

interface LayoutProps {
    children: ReactNode;
}

const AppLayout : React.FC<LayoutProps> = ({ children }) => {
	return (
		<StyledContainer maxWidth="sm" disableGutters>
			{children}
		</StyledContainer>
	)
}

export default AppLayout
