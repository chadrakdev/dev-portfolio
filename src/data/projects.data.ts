import { ProjectHistory } from "../types/projectHistory";

export const projects: ProjectHistory[] = [
	{
		id: 1,
		title: "Game Library API",
		url: "https://github.com/chadrakdev/GameLibraryAPI",
		tags: ["C#", ".NET", "MVC"],
		description: "A simple API for managing a game library with CRUD operations to add, update, and remove games in the database."
	},
	{
		id: 2,
		title: "Record Shop API",
		url: "https://github.com/chadrakdev/RecordShopAPI",
		tags: ["Java", "Spring Boot", "SQL"],
		description: "A REST API for managing stock data in a record shop, using an in-memory database for quick updates and queries."
	},
	{
		id: 3,
		title: "Mars Rover",
		url: "https://github.com/chadrakdev/MarsRover",
		tags: ["Java", "Console"],
		description: "A console app simulating a rover navigating Mars plateaus to collect research samples, built with Java."
	}
];
