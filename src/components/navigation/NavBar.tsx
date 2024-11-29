import { Link } from "react-router-dom"
import { AppBar, IconButton } from "@mui/material"
import { styled } from "@mui/system";
import { Code, LightModeOutlined, DarkModeOutlined } from "@mui/icons-material";

const StyledNav = styled(AppBar)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	padding: '0.5rem',
	backgroundColor: theme.palette.background.default,
	backgroundImage: 'none',
	boxShadow: 'none'
}))

const StyledLogoLink = styled(Link)(() => ({
	'&:hover': {
		backgroundColor: 'transparent'
	}
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
				<Link to="work">work</Link>
				<Link to="projects">projects</Link>
				<Link to="blog">blog</Link>
				<IconButton onClick={onToggleTheme}>
					{isDarkMode ? <StyledLightMode /> : <StyledDarkMode />}
				</IconButton>
			</div>
		</StyledNav>
	);
};

export default NavBar;
