import { styled, Typography } from "@mui/material";

export const StyledHeading = styled(Typography)(() => ({
	fontWeight: 'bold',
}))

export const StyledSubheading = styled(Typography)(({ theme }) => ({
	fontWeight: 'normal',
	color: theme.palette.text.secondary,
	fontSize: '0.8rem'
}))

export const StyledText = styled(Typography)(() => ({
	fontWeight: 'normal',
	paddingBottom: '1rem'
}))