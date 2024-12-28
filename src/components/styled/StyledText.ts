import { styled, Typography } from "@mui/material";

export const Heading = styled(Typography, {
	shouldForwardProp: (prop) => prop !== "hasPadding",
})<{ hasPadding?: boolean }>(({ hasPadding, theme }) => ({
	fontWeight: "bold",
	paddingBottom: hasPadding ? "1rem" : "0",
	color: theme.palette.mode === "dark" ? "#ffffff" : "#000000"
}));

export const Subhead = styled(Typography)(({ theme }) => ({
	fontWeight: 'normal',
	color: theme.palette.text.secondary,
	fontSize: '14px'
}))

export const Text = styled(Typography)(() => ({
	fontWeight: 'normal',
	paddingBottom: '1rem',
	fontSize: "14px"
}))
