import { styled, Container } from "@mui/material"
import { Text } from "../styled/StyledText"

const StyledFooter = styled(Container)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	verticalAlign: 'bottom',
	padding: '0.7rem 0',
	backgroundColor: theme.palette.navBackground,
	backgroundImage: 'none',
	backdropFilter: 'blur(0.1rem)',
	boxShadow: 'none',
	top: '0',
	position: 'sticky'
}))

const Footer = () => {
	return (
		<StyledFooter>
			<Text>
                © 2024 | Chadrak Holondo
			</Text>
		</StyledFooter>
	)
}

export default Footer
