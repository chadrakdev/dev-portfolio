import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
	interface Palette {
		navBackground?: string;
	}
	interface PaletteOptions {
		navBackground?: string;
	}
}

export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		background: {
			default: '#18181b',
		},
		navBackground: '#18181bfa',
		text: {
			primary: '#d4d4d8',
			secondary: '#787884',
		},
	},
	typography: {
		fontFamily: 'Roboto, Arial, sans-serif',
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				a: {
					textDecoration: 'none',
					color: 'inherit',
					transition: 'background-color 0.3s ease-in, border-radius 0.3s ease-in',
					'&:hover': {
						backgroundColor: '#ffffff26',
						borderRadius: '0.2rem'
					},
				}
			},
		}
	},
});

export const lightTheme = createTheme({
	palette: {
		mode: 'light',
		background: {
			default: '#f4f4f5',
		},
		navBackground: '#f4f4f5eb',
		text: {
			primary: '#18181b',
			secondary: '#373743',
		},
	},
	typography: {
		fontFamily: 'Roboto, Arial, sans-serif',
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				a: {
					textDecoration: 'none',
					color: 'inherit',
					transition: 'background-color 0.3s ease-in, border-radius 0.3s ease-in',
					'&:hover': {
						backgroundColor: '#00000026',
						borderRadius: '0.2rem'
					},
				}
			},
		},
	},
});
