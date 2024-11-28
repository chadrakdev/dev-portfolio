import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/navigation/NavBar'
import Home from './components/pages/Home'
import Work from './components/pages/Work'
import Projects from './components/pages/Projects'
import Blog from './components/pages/Blog'

const App = () => {

	return (
		<Router>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/work" element={<Work />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/blog" element={<Blog />} />
			</Routes>
		</Router>
	)
}

export default App
