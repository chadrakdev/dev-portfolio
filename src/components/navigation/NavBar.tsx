import { IconButton } from "@mui/material"
import { Code } from "@mui/icons-material";
import { LightMode, DarkMode } from "../styled/StyledIcons";
import { LinkIcon, LinkNavText } from "../styled/StyledLinks";
import { NavContainer, ContentSection } from "../styled/StyledContainers";

interface NavBarProps {
	onToggleTheme: () => void;
	isDarkMode: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ onToggleTheme, isDarkMode }) => {
	return (
		<NavContainer>
			<LinkIcon hasPadding to="/"><Code /></LinkIcon>
			<ContentSection>
				<LinkNavText hasPadding to="work">work</LinkNavText>
				<LinkNavText hasPadding to="projects">projects</LinkNavText>
				<LinkNavText hasPadding to="contact">contact</LinkNavText>
				<IconButton onClick={onToggleTheme}>
					{isDarkMode ? <DarkMode /> : <LightMode />}
				</IconButton>
			</ContentSection>
		</NavContainer>
	);
};

export default NavBar;
