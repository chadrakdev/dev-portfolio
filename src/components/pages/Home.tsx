import { styled, Box, List, ListItem, Typography } from "@mui/material"
import { work } from "../../data/work.data"
import { projects } from "../../data/projects.data"

const StyledSection = styled(Box)(() => ({
	paddingBottom: '3rem'
}))

const StyledHeading = styled(Typography)(() => ({
	fontWeight: 'bold',
}))

const StyledSubheading = styled(Typography)(({ theme }) => ({
	fontWeight: 'normal',
	color: theme.palette.text.secondary,
	fontSize: '0.8rem'
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
	paddingBottom: '0rem'
}))

const Home = () => {
	return (
		<main>
			<StyledSection key="bio">
				<StyledHeading>Chadrak H</StyledHeading>
				<StyledHeading sx={{ paddingBottom: '1rem' }}>Software Engineer</StyledHeading>
				<StyledText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, voluptate!</StyledText>
				<StyledText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, aliquid. Reprehenderit quae obcaecati accusantium quod dolor temporibus, eligendi fugiat ullam, illo nemo consequatur soluta laborum sed ipsa ea ab porro?</StyledText>
				<StyledText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis error quae ab aperiam corrupti porro, explicabo aut atque quas sunt.</StyledText>
			</StyledSection>

			<StyledSection key="work">
				<StyledHeading sx={{ paddingBottom: '1rem' }}>Work</StyledHeading>
				{work
					.filter(data => data.isCurrent)
					.map(data =>
						<StyledItemWrapper key={data.id}>
							<StyledHeading>{data.company}</StyledHeading>
							<StyledSubheading>{data.position}</StyledSubheading>
							<StyledSubheading sx={{ paddingBottom: '0.5rem' }}>{data.start} - {data.isCurrent ? "Current" : data.end}</StyledSubheading>
							<StyledText>{data.description}</StyledText>
						</StyledItemWrapper>
					)}
			</StyledSection>

			<StyledSection key="projects">
				<StyledHeading sx={{ paddingBottom: '1rem' }}>Projects</StyledHeading>
				{projects[0] && (
					<StyledItemWrapper>
						<StyledHeading>{projects[0].title}</StyledHeading>
						<StyledList disablePadding>
							<StyledList disablePadding>
								{projects[0].tags.map(tag => (
									<StyledListItem key={tag} disableGutters>{tag}</StyledListItem>
								))}
							</StyledList>
						</StyledList>
						<StyledText>{projects[0].description}</StyledText>
					</StyledItemWrapper>
				)}
			</StyledSection>
		</main>
	)
}

export default Home
