import { PageSection } from "../styled/StyledContainers"
import { Heading, Text } from "../styled/StyledText"
import { AnimatedContainer } from "../styled/StyledContainers"
import Work from "./Work"
import Projects from "./Projects"
import Contact from "./Contact"

const Home = () => {
	return (
		<AnimatedContainer>
			<main>
				<PageSection key="bio">
					<Heading>Chadrak H</Heading>
					<Heading hasPadding>Software Engineer</Heading>
					<Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, voluptate!</Text>
					<Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, aliquid. Reprehenderit quae obcaecati accusantium quod dolor temporibus, eligendi fugiat ullam, illo nemo consequatur soluta laborum sed ipsa ea ab porro?</Text>
					<Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis error quae ab aperiam corrupti porro, explicabo aut atque quas sunt.</Text>
				</PageSection>

				<Work displayCount={1} />
				<Projects displayCount={2} />
				<Contact />
			</main>
		</AnimatedContainer>
	)
}

export default Home
