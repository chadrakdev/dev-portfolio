import { styled } from "@mui/material";
import { Link } from "react-router-dom"

export const LinkIcon = styled(Link)(() => ({
	padding: '0.5rem 0',
	'&:hover': {
		backgroundColor: 'transparent'
	}
}))

export const LinkText = styled(Link)(() => ({
	padding: '0.5rem'
}))