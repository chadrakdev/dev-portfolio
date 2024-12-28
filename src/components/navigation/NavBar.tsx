import { IconButton } from "@mui/material"
import { Code } from "@mui/icons-material";
import { LightMode, DarkMode } from "../styled/StyledIcons";
import { LinkIcon, LinkText } from "../styled/StyledLinks";
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
				<LinkText hasPadding to="work">work</LinkText>
				<LinkText hasPadding to="projects">projects</LinkText>
				<LinkText hasPadding to="contact">contact</LinkText>
				<IconButton onClick={onToggleTheme}>
					{isDarkMode ? <DarkMode /> : <LightMode />}
				</IconButton>
			</ContentSection>
		</NavContainer>
	);
};

export default NavBar;
