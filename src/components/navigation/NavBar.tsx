import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<div>
			<h1>Portfolio</h1>
			<div>
				<Link to="work">work</Link>
				<Link to="projects">projects</Link>
				<Link to="blog">blog</Link>
			</div>
		</div>
	);
};

export default NavBar;
