import { IconButton } from "@mui/material"
import { Code } from "@mui/icons-material"
import { LightMode, DarkMode } from "../styled/StyledIcons"
import { LinkIcon, LinkNavText } from "../styled/StyledLinks"
import { NavContainer, ContentSection } from "../styled/StyledContainers"

interface NavBarProps {
	onToggleTheme: () => void
	isDarkMode: boolean
}

const NavBar = ({ onToggleTheme, isDarkMode }: NavBarProps) => {
	return (
		<NavContainer>
			<LinkIcon hasPadding to="/" aria-label="Home">
				<Code />
			</LinkIcon>
			<ContentSection>
				<LinkNavText hasPadding to="work">
					work
				</LinkNavText>
				<LinkNavText hasPadding to="projects">
					projects
				</LinkNavText>
				<LinkNavText hasPadding to="contact">
					contact
				</LinkNavText>
				<IconButton
					onClick={onToggleTheme}
					aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
				>
					{isDarkMode ? <DarkMode /> : <LightMode />}
				</IconButton>
			</ContentSection>
		</NavContainer>
	)
}

export default NavBar
