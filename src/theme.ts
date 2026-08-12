import { createTheme } from "@mui/material/styles"

declare module "@mui/material/styles" {
	interface Palette {
		navBackground?: string
		// Full-contrast color for emphasized text/icons (headings, hovered links) that
		// deliberately ignores the softer text.primary/secondary tones.
		strongText: string
		// Background used when hovering a content block (e.g. project/work list items).
		surfaceHover: string
		// Translucent overlay used for the global link hover state in CssBaseline.
		hoverOverlay: string
	}
	interface PaletteOptions {
		navBackground?: string
		strongText: string
		surfaceHover: string
		hoverOverlay: string
	}
}

const darkPalette = {
	navBackground: "#18181bfa",
	strongText: "#ffffff",
	surfaceHover: "#1d1d21",
	hoverOverlay: "#ffffff26",
}

const lightPalette = {
	navBackground: "#f4f4f5eb",
	strongText: "#000000",
	surfaceHover: "#d8d8db",
	hoverOverlay: "#00000026",
}

export const darkTheme = createTheme({
	palette: {
		mode: "dark",
		background: {
			default: "#18181b",
		},
		...darkPalette,
		text: {
			primary: "#d4d4d8",
			secondary: "#787884",
		},
	},
	typography: {
		fontFamily: "Roboto, Arial, sans-serif",
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				a: {
					textDecoration: "none",
					color: "inherit",
					transition: "background-color 0.3s ease-in, border-radius 0.3s ease-in",
					"&:hover": {
						backgroundColor: darkPalette.hoverOverlay,
						borderRadius: "0.2rem",
					},
				},
			},
		},
	},
})

export const lightTheme = createTheme({
	palette: {
		mode: "light",
		background: {
			default: "#f4f4f5",
		},
		...lightPalette,
		text: {
			primary: "#18181b",
			secondary: "#373743",
		},
	},
	typography: {
		fontFamily: "Roboto, Arial, sans-serif",
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				a: {
					textDecoration: "none",
					color: "inherit",
					transition: "background-color 0.3s ease-in, border-radius 0.3s ease-in",
					"&:hover": {
						backgroundColor: lightPalette.hoverOverlay,
						borderRadius: "0.2rem",
					},
				},
			},
		},
	},
})
