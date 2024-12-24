import { styled } from "@mui/system";
import { AppBar, IconButton } from "@mui/material"
import { Code } from "@mui/icons-material";
import { LightMode, DarkMode } from "../styled/StyledIcons";
import { LinkIcon, LinkText } from "../styled/StyledLinks";

const StyledNav = styled(AppBar)(({ theme }) => ({
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

interface NavBarProps {
	onToggleTheme: () => void;
	isDarkMode: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ onToggleTheme, isDarkMode }) => {
	return (
		<StyledNav>
			<LinkIcon to="/"><Code /></LinkIcon>
			<div>
				<LinkText to="work">work</LinkText>
				<LinkText to="projects">projects</LinkText>
				<LinkText to="blog">blog</LinkText>
				<IconButton onClick={onToggleTheme}>
					{isDarkMode ? <DarkMode /> : <LightMode />}
				</IconButton>
			</div>
		</StyledNav>
	);
};

export default NavBar;
