import { useEffect, useState } from 'react'
import { darkTheme, lightTheme } from './theme'
import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { Routes, Route, useLocation } from 'react-router-dom'
import AppLayout from './components/layouts/AppLayout'
import PageLayout from './components/layouts/PageLayout'
import NavBar from './components/navigation/NavBar'
import Home from './components/pages/Home'
import Work from './components/pages/Work'
import Projects from './components/pages/Projects'
import Blog from './components/pages/Blog'
import Footer from './components/footer/Footer'

const App = () => {
	const [isDarkMode, setIsDarkMode] = useState(true);

	const toggleTheme = () => {
		setIsDarkMode((prevMode) => !(prevMode))
	}

	const location = useLocation();

	const parsePath = (pathname: string) => {
		switch (pathname) {
		case ("/"): {
			return "Home"
		}
		case ("/work"): {
			return "Work"
		}
		case ("/projects"): {
			return "Projects"
		}
		case ("/blog"): {
			return "Blog"
		}
		default: {
			return ""
		}
		}
	}

	const setDocumentTitle = () => {
		const title = parsePath(location.pathname)

		if (title.length > 1) {
			document.title = `${parsePath(location.pathname)} | Chadrak H`
		}
	}
	
	useEffect(() => {
		setDocumentTitle();
	}, [location.pathname])

	return (
		<ThemeProvider theme={isDarkMode? darkTheme : lightTheme}>
			<CssBaseline />
			<AppLayout>
				<NavBar onToggleTheme={toggleTheme} isDarkMode={isDarkMode} />
				<PageLayout>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/work" element={<Work />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/blog" element={<Blog />} />
					</Routes>
				</PageLayout>
				<Footer />
			</AppLayout>
		</ThemeProvider>
	)
}

export default App
