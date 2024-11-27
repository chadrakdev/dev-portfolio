import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/navigation/NavBar'

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
