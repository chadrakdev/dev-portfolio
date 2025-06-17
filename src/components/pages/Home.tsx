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
					<Text>
						I&apos;m a full-stack developer working in software support, where I build internal tools and tackle complex technical issues. I have hands-on experience with C# and React, developing scalable applications — especially in financial services and real estate. I love problem-solving and always look for ways to improve my skills and build better solutions.
					</Text>
					<Text>
						You can check out some of my latest projects <LinkText isBold to="/projects">here</LinkText>, and more on my <LinkText isBold to="https://github.com/chadrakdev">GitHub</LinkText>.
						<br /><br />NSV Security Check Cleared.
					</Text>
				</PageSection>
				<Work displayCount={1} />
				<Projects displayCount={2} />
				<Contact />
			</main>
		</AnimatedContainer>
	)
}

export default Home
