import { styled, Typography, Box } from "@mui/material"
import { work } from "../../data/work.data"

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

const StyledItemWrapper = styled(Box)(() => ({
	paddingBottom: '2rem'
}))

const Work = () => {
	return (
		<StyledSection key="work">
			<StyledHeading sx={{ paddingBottom: '1rem' }}>Work</StyledHeading>
			{work.map(data => 
				<StyledItemWrapper key={data.id}>
					<StyledHeading>{data.company}</StyledHeading>
					<StyledSubheading>{data.position}</StyledSubheading>
					<StyledSubheading sx={{ paddingBottom: '0.5rem' }}>{data.start} - {data.isCurrent ? "Current" : data.end}</StyledSubheading>
					<StyledText>{data.description}</StyledText>
				</StyledItemWrapper>
			)}
		</StyledSection>
	)
}

export default Work
