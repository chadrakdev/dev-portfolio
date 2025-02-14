import { PageSection } from "../styled/StyledContainers"
import { Heading, Text } from "../styled/StyledText"
import { AnimatedContainer } from "../styled/StyledContainers"
import Work from "./Work"
import Projects from "./Projects"
import Contact from "./Contact"
import { LinkText } from "../styled/StyledLinks"

const Home = () => {
	return (
		<AnimatedContainer>
			<main>
				<PageSection key="bio">
					<Heading>Chadrak H</Heading>
					<Heading hasPadding>Software Engineer</Heading>
					<Text>I’m a full-stack developer working with C# and React commercially and, outside of that, I dive into iOS development with Swift, always looking for new learning opportunities and things to build.</Text>
					<Text>My latest work can be seen highlighted under <LinkText isBold to="/projects">Projects</LinkText> and anything else can be found on my GitHub.</Text>
				</PageSection>

				<Work displayCount={1} />
				<Projects displayCount={2} />
				<Contact />
			</main>
		</AnimatedContainer>
	)
}

export default Home
