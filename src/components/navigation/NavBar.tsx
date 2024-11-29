import { styled } from "@mui/system";
import { Link } from "react-router-dom"
import { AppBar, IconButton } from "@mui/material"
import { Code, LightModeOutlined, DarkModeOutlined } from "@mui/icons-material";

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

const StyledLogoLink = styled(Link)(() => ({
	padding: '0.5rem 0',
	'&:hover': {
		backgroundColor: 'transparent'
	}
}))

const StyledLink = styled(Link)(() => ({
	padding: '0.5rem'
}))

const StyledLightMode = styled(LightModeOutlined)(({ theme }) => ({
	color: theme.palette.text.primary
}))

const StyledDarkMode = styled(DarkModeOutlined)(({ theme }) => ({
	color: theme.palette.text.primary
}))

interface NavBarProps {
	onToggleTheme: () => void;
	isDarkMode: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ onToggleTheme, isDarkMode }) => {
	return (
		<StyledNav>
			<StyledLogoLink to="/"><Code /></StyledLogoLink>
			<div>
				<StyledLink to="work">work</StyledLink>
				<StyledLink to="projects">projects</StyledLink>
				<StyledLink to="blog">blog</StyledLink>
				<IconButton onClick={onToggleTheme}>
					{isDarkMode ? <StyledLightMode /> : <StyledDarkMode />}
				</IconButton>
			</div>
		</StyledNav>
	);
};

export default NavBar;
