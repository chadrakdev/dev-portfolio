import { styled, Typography } from "@mui/material";

export const Heading = styled(Typography)<{ hasPadding?: boolean }>(
	({ hasPadding }) => ({
	  fontWeight: "bold",
	  paddingBottom: hasPadding ? "1rem" : "0"
	}))

export const Subhead = styled(Typography)(({ theme }) => ({
	fontWeight: 'normal',
	color: theme.palette.text.secondary,
	fontSize: '0.8rem'
}))

export const Text = styled(Typography)(() => ({
	fontWeight: 'normal',
	paddingBottom: '1rem'
}))