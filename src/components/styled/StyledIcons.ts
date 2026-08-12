import { styled } from "@mui/material"
import { LightModeOutlined, DarkModeOutlined } from "@mui/icons-material"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"

export const LightMode = styled(LightModeOutlined)(({ theme }) => ({
	color: theme.palette.text.primary,
	fontSize: "18px",
}))

export const DarkMode = styled(DarkModeOutlined)(({ theme }) => ({
	color: theme.palette.text.primary,
	fontSize: "18px",
}))

export const GitHub = styled(GitHubIcon, {
	shouldForwardProp: (prop) => prop !== "hasPadding",
})<{ hasPadding?: boolean }>(({ hasPadding, theme }) => ({
	color: theme.palette.text.primary,
	fontSize: "1.5rem",
	paddingRight: hasPadding ? "1rem" : 0,
	"&:hover": {
		color: theme.palette.strongText,
	},
}))

export const LinkedIn = styled(LinkedInIcon, {
	shouldForwardProp: (prop) => prop !== "hasPadding",
})<{ hasPadding?: boolean }>(({ hasPadding, theme }) => ({
	color: theme.palette.text.primary,
	fontSize: "1.5rem",
	paddingRight: hasPadding ? "1rem" : 0,
	"&:hover": {
		color: theme.palette.strongText,
	},
}))
