import { styled, Box, Container, List, ListItem } from "@mui/material";

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

export const ContentSection = styled(Box)(() => ({
	paddingBottom: '2rem'
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