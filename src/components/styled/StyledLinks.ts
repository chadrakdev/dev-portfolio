import { styled } from "@mui/material";
import { Link } from "react-router-dom"

export const LinkIcon = styled(Link, {
	shouldForwardProp: (prop) => prop !== "hasPadding",
})<{ hasPadding?: boolean }>(({ hasPadding, theme }) => ({
	padding: hasPadding ? "0.5rem 0.5rem 0.5rem 0" : 0,
	color: theme.palette.text.primary,
	"&:hover": {
		backgroundColor: "transparent"
	}
}));

export const LinkText = styled(Link, {
	shouldForwardProp: (prop) => prop !== "hasPadding",
})<{ hasPadding?: boolean }>(({ hasPadding, theme }) => ({
	padding: hasPadding ? "0.5rem" : "0",
	color: theme.palette.text.primary
}));

export const LinkWrapper = styled(Link)(() => ({
	padding: 0,
	margin: 0,
	textDecoration: 'none'
}));