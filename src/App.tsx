import { useState } from 'react'
import { darkTheme, lightTheme } from './theme'
import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/navigation/NavBar'
import Home from './components/pages/Home'
import Work from './components/pages/Work'
import Projects from './components/pages/Projects'
import Blog from './components/pages/Blog'

const App = () => {
	const [isDarkMode, setIsDarkMode] = useState(true);

	const toggleTheme = () => {
		setIsDarkMode((prevMode) => !(prevMode))
	}

	return (
		<ThemeProvider theme={isDarkMode? darkTheme : lightTheme}>
			<CssBaseline />
			<Router>
				<NavBar onToggleTheme={toggleTheme} isDarkMode={isDarkMode} />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/work" element={<Work />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/blog" element={<Blog />} />
				</Routes>
			</Router>
		</ThemeProvider>
	)
}

export default App
