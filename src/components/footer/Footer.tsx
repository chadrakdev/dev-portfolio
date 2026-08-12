import { styled, Container } from "@mui/material"
import { Text } from "../styled/StyledText"

const StyledFooter = styled(Container)(() => ({
	padding: "0",
}))

const Footer = () => {
	return (
		<StyledFooter disableGutters>
			<Text>© 2026 | Chadrak Holondo</Text>
		</StyledFooter>
	)
}

export default Footer
