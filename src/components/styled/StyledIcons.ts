import { styled } from "@mui/material";
import { LightModeOutlined, DarkModeOutlined } from "@mui/icons-material";

export const LightMode = styled(LightModeOutlined)(({ theme }) => ({
	color: theme.palette.text.primary
}))

export const DarkMode = styled(DarkModeOutlined)(({ theme }) => ({
	color: theme.palette.text.primary
}))