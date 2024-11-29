import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		background: {
			default: '#18181b',
		},
		text: {
			primary: '#d4d4d8',
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
                    padding: '.5rem',
					'&:hover': {
						backgroundColor: '#ffffff26',
						borderRadius: '0.2rem'
					},
				},
			},
		},
	},
});

export const lightTheme = createTheme({
	palette: {
		mode: 'dark',
		background: {
			default: '#f4f4f5',
		},
		text: {
			primary: '#18181b',
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
                    padding: '.5rem',
					'&:hover': {
						backgroundColor: '#00000026',
						borderRadius: '0.2rem'
					},
				},
			},
		},
	},
});
