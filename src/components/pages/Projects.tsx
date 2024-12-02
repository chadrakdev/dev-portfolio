import { styled, Box, Typography, List, ListItem } from "@mui/material"
import { projects } from "../../data/projects.data"

const StyledSection = styled(Box)(() => ({
	paddingBottom: '3rem'
}))

const StyledHeading = styled(Typography)(() => ({
	fontWeight: 'bold',
}))

const StyledText = styled(Typography)(() => ({
	fontWeight: 'normal',
	paddingBottom: '1rem'
}))

const StyledList = styled(List)(() => ({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'start',
	padding: '0.3rem 0'
}))

const StyledListItem = styled(ListItem)(({ theme }) => ({
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

const StyledItemWrapper = styled(Box)(() => ({
	paddingBottom: '2rem'
}))

const Projects = () => {
	return (
		<StyledSection key="projects">
			<StyledHeading sx={{ paddingBottom: '1rem' }}>Projects</StyledHeading>
			{projects.map(data =>
				<StyledItemWrapper key={data.id}>
					<StyledHeading>{data.title}</StyledHeading>
					{data.tags.length > 0 && (
						<StyledList disablePadding>
							{data.tags.map(tag => (
								<StyledListItem key={tag} disableGutters>{tag}</StyledListItem>
							))}
						</StyledList>
					)}
					<StyledText>{data.description}</StyledText>
				</StyledItemWrapper>
			)}
		</StyledSection>
	)
}

export default Projects
