import { WorkHistory } from "../types/workHistory";

export const work: WorkHistory[] = [
	{
		id: 1,
		company: "Nurtur Tech",
		position: "3rd Line Software Support",
		start: "Nov 2023",
		isCurrent: true,
		description: "Collaborated with development teams to improve processes and tooling for service desk agents, supported applications to enhance stability and performance, and resolved complex software issues to meet SLA targets.",
		responsibilities: [
			"Developed support applications to enhance tools, processes, and systems for service desk agents in collaboration with development teams.",
			"Maintained databases and wrote efficient queries to provide reporting and analysis for large-scale systems.",
			"Provided expert-level technical support by investigating and resolving complex software issues escalated from Tier 1 and Tier 2 support agents.",
			"Collaborated closely with development teams to streamline releases and improve product quality, stability, and user performance.",
			"Assessed the severity and urgency of issues, escalating to development teams when necessary for timely resolutions.",
			"Managed and prioritized multiple support incidents simultaneously, adhering to SLA requirements and providing regular updates to stakeholders."
		  ]
	},
	{
		id: 2,
		company: "TechReturners & Capita",
		position: "Software Development Trainee (Fixed Term)",
		start: "Oct 2022",
		end: "Oct 2023",
		isCurrent: false,
		description: "Strengthened programming and problem-solving skills, developed full-stack applications in cross-functional teams, and implemented secure APIs with Test-Driven Development practices.",
		responsibilities: [
			"Developed advanced programming skills through a collaborative partnership with BAE Digital Intelligence.",
			"Practiced Test-Driven Development (TDD) to ensure the reliability and robustness of software systems.",
			"Designed RESTful APIs with secure authentication and authorization methods, such as OAuth.",
			"Collaborated within cross-functional teams to develop full-stack applications using pairing and mobbing approaches."
		  ]
	},
	{
		id: 3,
		company: "BGC Partners",
		position: "Software Engineer (Internship)",
		start: "Jul 2022",
		end: "Sep 2022",
		isCurrent: false,
		description: "Worked on feature expansions and legacy systems in a microservices architecture, meeting business needs with clean code and creating intuitive, visually appealing interfaces with React.",
		responsibilities: [
			"Maintained legacy systems and expanded features within a microservices architecture to process live trade data.",
			"Met diverse business requirements by developing and delivering requested features for stakeholders.",
			"Participated in all phases of the development lifecycle, from conceptual design to deployment and CI/CD support.",
			"Styled React components to create visually appealing and user-friendly interfaces."
		  ]
	},
	{
		id: 4,
		company: "Nurtur Tech",
		position: "Digital Design Executive",
		start: "Sep 2021",
		end: "Jul 2022",
		isCurrent: false,
		description: "Designed responsive HTML email templates, maintained ASP.NET webpages, and provided client support, including troubleshooting, demos, and training.",
		responsibilities: [
			"Designed and developed responsive HTML email templates using HTML, CSS, and JavaScript.",
			"Maintained ASP.NET webpages and ensured seamless functionality for internal systems.",
			"Managed version control and code quality using Team Foundation Server (TFS).",
			"Provided client support, troubleshooting issues, delivering demos, and conducting training sessions on application services."
		  ]
	}
];