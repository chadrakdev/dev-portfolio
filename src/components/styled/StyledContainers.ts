import { styled, Box, Container, List, ListItem } from "@mui/material";
import { fadeInAnimation } from "../styled/Animations";

export const AppContainer = styled(Container)(({ theme }) => ({
	maxWidth: "80%",
	margin: "0 auto",
	[theme.breakpoints.down("sm")]: {
		maxWidth: "90%"
	},
}))

export const PageContainer = styled(Container)(() => ({
	padding: '3rem 0.1rem',
	margin: '0',
}))

export const PageSection = styled(Box)(() => ({
	paddingBottom: '3rem'
}))

export const ContentSection = styled(Box, {
	shouldForwardProp: (prop) => !["hasPadding", "hasPaddingBottom", "hasMargin", "hasBorder", "enableHover"].includes(prop as string),
})<{
	hasPadding?: boolean;
	hasPaddingBottom?: boolean;
	hasMargin?: boolean;
	hasBorder?: boolean;
	enableHover?: boolean;
}>(({ hasPadding, hasPaddingBottom, hasMargin, hasBorder, enableHover, theme }) => ({
	padding: hasPadding ? "1rem" : "0",
  	paddingBottom: hasPaddingBottom ? "2rem" : "0",
  	borderBottom: hasBorder ? "1px solid #35353b62" : "none",
  	marginBottom: hasMargin ? "1rem" : "0",
	borderRadius: "1rem 1rem 0 0",
	transition: "background-color 0.3s",
  	...(enableHover && {
		"&:hover": {
			backgroundColor: theme.palette.mode === "dark" ? "#1d1d21" : "#d8d8db"
	  },
  	}),
}));
  

export const AnimatedContainer = styled(Box)(() => ({
	animation: `${fadeInAnimation} 0.8s ease`,
	animationFillMode: "both",
	opacity: 0,
}))

export const TagList = styled(List)(() => ({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'start',
	padding: '0.5rem 0'
}))

export const TagListItem = styled(ListItem)(({ theme }) => ({
	fontWeight: 'normal',
	fontSize: '0.8rem',
	color: theme.palette.text.secondary,
	border: '0.1rem solid',
	borderRadius: '0.5rem',
	margin: '0.3rem 0.3rem 0.3rem 0',
	padding: '0.3rem',
	width: 'auto',
	'&:hover': {
		color: theme.palette.text.primary,
		backgroundColor: theme.palette.text.secondary
	}
}))