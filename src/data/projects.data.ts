import { ProjectHistory } from "../types/projectHistory";

export const projects: ProjectHistory[] = [
	{
		id: 1,
		title: "Password Generator API",
		url: "https://github.com/chadrakdev/PasswordGeneratorAPI",
		tags: ["C#", ".NET", "MVC"],
		description: "API for generating customisable, secure passwords focusing on security, encryption, and the algorithmic side of API development."
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
		title: "Game Library API",
		url: "https://github.com/chadrakdev/GameLibraryAPI",
		tags: ["C#", ".NET", "MVC"],
		description: "RESTful API for managing game collections with full CRUD operations showcasing the ability to manage data models, implement CRUD operations, and potential for database integration."
	},
	{
		id: 4,
		title: "Record Shop API",
		url: "https://github.com/chadrakdev/RecordShopAPI",
		tags: ["Java", "Spring Boot", "SQL"],
		description: "RESTful API for managing a record store's inventory with in-memory data storage with emphasis on scalability and full CRUD operations."
	}
];
