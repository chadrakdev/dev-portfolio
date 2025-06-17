import { AnimatedContainer, ContentSection } from "../styled/StyledContainers"
import { PageSection } from "../styled/StyledContainers"
import { Heading, Text } from "../styled/StyledText"
import { LinkText, LinkIcon } from "../styled/StyledLinks"
import { GitHub, LinkedIn } from "../styled/StyledIcons"

const Contact = () => {
	return (
		<AnimatedContainer>
			<PageSection key="contact">
				<Heading hasPadding>Let&apos;s Connect</Heading>
				<Text>Whether you have a question, a project idea, or just want to say hello, you can reach out via social media or drop me an email.</Text>
				<ContentSection>
					<LinkIcon hasPadding to="https://github.com/chadrakdev">
						<GitHub />
					</LinkIcon>
					<LinkIcon hasPadding to="https://linkedin.com/in/chadrakholondo/">
						<LinkedIn />
					</LinkIcon>
				</ContentSection>
				<LinkText to="mailto:chadrakdev@outlook.com">chadrakdev@outlook.com</LinkText>
			</PageSection>
		</AnimatedContainer>
	)
}

export default Contact
