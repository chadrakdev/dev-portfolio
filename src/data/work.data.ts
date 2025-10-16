import { WorkHistory } from "../types/workHistory";

export const work: WorkHistory[] = [
 	 {
 	   id: 1,
 	   company: "Nurtur Tech",
 	   position: "Digital Design Executive",
 	   start: "Sep 2021",
 	   end: "Jul 2022",
 	   isCurrent: false,
 	   description: "Developed bespoke, responsive HTML email templates and custom components while ensuring cross-client compatibility and maintaining internal legacy systems built with ASP.NET.",
 	   responsibilities: [
 	     "Built and styled responsive HTML email templates using semantic HTML and CSS, tailored to marketing and campaign needs.",
 	     "Developed reusable email components and debugged rendering issues across major email clients including Outlook, Gmail, and 	Apple Mail.",
 	     "Investigated and resolved HTML/CSS bugs related to email compatibility, performance, and layout consistency.",
 	     "Maintained internal ASPX pages tied to customer-facing systems, requiring working knowledge of C#, jQuery, and JavaScript.",
 	     "Used Git and Team Foundation Server (TFS) for version control, code reviews, and collaboration within an email development team.",
 	   ],
 	 },
 	 {
 	   id: 2,
 	   company: "BGC Partners",
 	   position: "Software Engineer (Internship)",
 	   start: "Jul 2022",
 	   end: "Sep 2022",
 	   isCurrent: false,
 	   description: "Maintained legacy applications and contributed to real-time trading systems at a leading financial services firm by developing features across a microservices architecture and frontend React interface, working with Java and Spring Boot.",
 	   responsibilities: [
 	     "Developed and maintained backend services in a distributed architecture, enhancing support for real-time trade data and 	operational workflows.",
 	     "Extended legacy codebases with clean, testable code to meet stakeholder requirements under tight deadlines.",
 	     "Collaborated closely with adjacent engineering teams and analysts to deliver new trade support system, working to replace 	legacy systems.",
 	     "Enhanced UI components using React to deliver intuitive and comprehensive displays for trading data aligned with user 	expectations.",
 	     "Adapted quickly to enterprise-grade systems and tools in a high-paced financial environment, demonstrating strong initiative 	and responsiveness.",
 	   ],
 	 },
 	 {
 	   id: 3,
 	   company: "TechReturners & Capita",
 	   position: "Software Development Trainee",
 	   start: "Oct 2022",
 	   end: "Oct 2023",
 	   isCurrent: false,
 	   description: "Completed an intensive software engineering program developing full-stack solutions, and applying modern engineering practices to real-world projects in partnership with BAE Digital Intelligence.",
 	   responsibilities: [
 	     "Built strong foundations in C#, .NET, TypeScript, and DevOps practices through structured learning and assigned projects.",
 	     "Designed and developed RESTful APIs with secure authentication using OAuth and JWT, following SOLID and clean architecture 	principles.",
 	     "Applied Test-Driven Development (TDD) and CI pipelines to write reliable, maintainable, and well-tested code.",
 	     "Levergaed strengths in both UI design and programming and utilised pair and mob programming techniques whilst working toward 	milestones.",
 	     "Presented work to peers and Team Leads in regular sprint demos, responding to feedback to continuously improve.",
 	   ],
 	 },
 	 {
 	   id: 4,
 	   company: "Nurtur Tech",
 	   position: "3rd Line Software Support Engineer",
 	   start: "Nov 2023",
	   end: "Sep 2025",
 	   isCurrent: false,
		description: "Resolved complex software issues within defined SLOs while developing internal tools, managing integrations, and collaborating with development teams to improve workflows, performance, and system reliability.",
		responsibilities: [
		 "Developed internal tooling and support applications to streamline workflows and improve efficiency for service desk agents.",
		 "Investigated and resolved complex issues escalated by Tier 1 and Tier 2 agents within SLO targets.",
		 "Triaged bugs and feature requests with developers and supported cross-functional collaboration to enhance system functionality.",
		 "Built custom SQL reports to monitor engagement, usage, and performance metrics across the platform.",
		 "Integrated and troubleshot data pipelines from external CRM systems into the platform using C# and .NET."
		],
	},
	{
 	   id: 5,
 	   company: "Burendo",
 	   position: "Engineering Consultant",
 	   start: "Oct 2025",
 	   isCurrent: true,
 	   description: "Delivering software enhancements and maintaining production systems through structured change, release, and deployment processes, while balancing hands-on software engineering with service reliability, incident resolution, and stakeholder collaboration.",
	   responsibilities: [
		 "Develop and deploy code changes for feature enhancements and incident resolutions across client systems.",
		 "Manage change and release processes to ensure safe, consistent, and auditable deployments.",
		 "Monitor and maintain production environments to uphold availability and performance standards.",
		 "Collaborate with cross-functional teams to align engineering efforts with stakeholder and product requirements.",
		 "Contribute to the continuous improvement of CI/CD pipelines, deployment practices, and overall system reliability."
	  ]
	}
];
