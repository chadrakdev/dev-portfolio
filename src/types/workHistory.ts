export interface BaseWorkHistory {
	id: number;
	company: string;
	position: string;
	start: string;
	isCurrent: boolean;
	description: string;
	responsibilities: string[];
  }
  
export type WorkHistory = 
	| (BaseWorkHistory & { isCurrent: true; end?: never })
	| (BaseWorkHistory & { isCurrent: false; end: string });
