import { styled } from "@mui/material";
import { Link } from "react-router-dom"

export const LinkIcon = styled(Link)(({ theme }) => ({
	padding: '0.5rem 0',
	color: theme.palette.text.primary,
	'&:hover': {
		backgroundColor: 'transparent'
	}
}))

export const LinkText = styled(Link)(({ theme }) => ({
	padding: '0.5rem',
	color: theme.palette.text.primary
}))

export const LinkWrapper = styled(Link)(() => ({
	padding: 0,
	margin: 0,
	textDecoration: 'none'
}));