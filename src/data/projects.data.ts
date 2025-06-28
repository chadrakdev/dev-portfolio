import { ProjectHistory } from "../types/projectHistory";

export const projects: ProjectHistory[] = [
	{
		id: 1,
		title: "HoopInsights API",
		url: "https://github.com/chadrakdev/HoopInsightsAPI",
		tags: ["C#", ".NET"],
		description: "API integrating with an external API to provide data on teams, players and advanced statistics."
	},
	{
		id: 2,
		title: "Portfolio Website",
		url: "https://github.com/chadrakdev/dev-portfolio",
		tags: ["TypeScript", "React"],
		description: "Minimalist portfolio demonstrating ability to design a responsive, modern user interface and work with TypeScript for type safety and create dynamic web components."
	},
	{
		id: 3,
		title: "Password Generator API",
		url: "https://github.com/chadrakdev/PasswordGeneratorAPI",
		tags: ["C#", ".NET", "MVC"],
		description: "API generating customisable, secure passwords focusing on security, encryption, and the algorithmic side of API development."
	},
	{
		id: 4,
		title: "Record Shop API",
		url: "https://github.com/chadrakdev/RecordShopAPI",
		tags: ["Java", "Spring Boot", "SQL"],
		description: "RESTful API for managing a record store's inventory with in-memory data storage with emphasis on scalability and full CRUD operations."
	}
];
