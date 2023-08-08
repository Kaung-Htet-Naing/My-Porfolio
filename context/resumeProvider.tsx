"use client";
import React, { createContext } from "react";
import resumeData from "../resume.json";
import ResumeData from "../types/ResumeData";

export const ResumeContext = createContext<ResumeData | undefined>(undefined);

const ResumeProvider = ({ children }: { children: React.ReactNode }) => {
	const { basics, work, education, skills, languages, projects } =
		resumeData as ResumeData;

	return (
		<ResumeContext.Provider
			value={{ basics, work, education, skills, languages, projects }}
		>
			{children}
		</ResumeContext.Provider>
	);
};

export default ResumeProvider;
