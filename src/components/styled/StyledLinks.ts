import { styled, Link } from "@mui/material";

export const LinkIcon = styled(Link)(() => ({
	padding: '0.5rem 0',
	'&:hover': {
		backgroundColor: 'transparent'
	}
}))

export const LinkText = styled(Link)(() => ({
	padding: '0.5rem'
}))