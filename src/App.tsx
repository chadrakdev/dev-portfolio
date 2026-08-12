import { useEffect, useState } from "react"
import { darkTheme, lightTheme } from "./theme"
import { ThemeProvider } from "@mui/material"
import CssBaseline from "@mui/material/CssBaseline"
import { Routes, Route, useLocation } from "react-router-dom"
import AppLayout from "./components/layouts/AppLayout"
import PageLayout from "./components/layouts/PageLayout"
import NavBar from "./components/navigation/NavBar"
import Home from "./components/pages/Home"
import Work from "./components/pages/Work"
import Projects from "./components/pages/Projects"
import Contact from "./components/pages/Contact"
import Footer from "./components/footer/Footer"
import { AnimatedContainer } from "./components/styled/StyledContainers"

const parsePath = (pathname: string) => {
	switch (pathname) {
		case "/": {
			return "Home"
		}
		case "/work": {
			return "Work"
		}
		case "/projects": {
			return "Projects"
		}
		case "/contact": {
			return "Contact"
		}
		default: {
			return ""
		}
	}
}

const App = () => {
	const [isDarkMode, setIsDarkMode] = useState(true)

	const toggleTheme = () => {
		setIsDarkMode((prevMode) => !prevMode)
	}

	const location = useLocation()

	useEffect(() => {
		const title = parsePath(location.pathname)

		if (title) {
			document.title = `${title} | Chadrak H`
		}
	}, [location.pathname])

	return (
		<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
			<CssBaseline />
			<AppLayout>
				<NavBar onToggleTheme={toggleTheme} isDarkMode={isDarkMode} />
				<PageLayout>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route
							path="/work"
							element={
								<AnimatedContainer>
									<Work />
								</AnimatedContainer>
							}
						/>
						<Route
							path="/projects"
							element={
								<AnimatedContainer>
									<Projects />
								</AnimatedContainer>
							}
						/>
						<Route
							path="/contact"
							element={
								<AnimatedContainer>
									<Contact />
								</AnimatedContainer>
							}
						/>
					</Routes>
				</PageLayout>
				<Footer />
			</AppLayout>
		</ThemeProvider>
	)
}

export default App
