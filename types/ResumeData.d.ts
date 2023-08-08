interface Location {
	postalCode: string;
	city: string;
	countryCode: string;
	region: string;
}

interface Profile {
	url: string;
	username: string;
	network: string;
}

export interface Work {
	name: string;
	position: string;
	startDate: string;
	endDate?: string;
	url?: string;
	highlights: string[];
}

interface Education {
	institution: string;
	url: string;
	area: string;
	studyType: string;
	startDate: string;
	endDate: string;
}

interface Skill {
	name: string;
	keywords: string[];
}

interface Language {
	language: string;
	fluency: string;
}

interface Project {
	name: string;
	summary: string;
	url: string;
}

export default interface ResumeData {
	meta?: {
		theme: string;
	};
	basics: {
		name: string;
		label: string;
		email: string;
		phone: string;
		summary: string;
		location: Location;
		profiles: Profile[];
	};
	work: Work[];
	education: Education[];
	skills: Skill[];
	languages: Language[];
	projects: Project[];
}
