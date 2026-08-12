import { styled, Typography } from "@mui/material"

export const Heading = styled(Typography, {
	shouldForwardProp: (prop) => prop !== "hasPadding",
})<{ hasPadding?: boolean }>(({ hasPadding, theme }) => ({
	fontWeight: "bold",
	paddingBottom: hasPadding ? "1rem" : "0",
	color: theme.palette.strongText,
}))

export const Subhead = styled(Typography, {
	shouldForwardProp: (prop) => prop !== "hasPaddingBottom",
})<{ hasPaddingBottom?: boolean }>(({ hasPaddingBottom, theme }) => ({
	fontWeight: "normal",
	color: theme.palette.text.secondary,
	fontSize: "14px",
	paddingBottom: hasPaddingBottom ? "0.5rem" : 0,
}))

export const Text = styled(Typography)(() => ({
	fontWeight: "normal",
	paddingBottom: "1rem",
	fontSize: "14px",
}))
