import React from "react";
import ArrowIcon from "../ArrowIcon/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function SuperBerry() {
	const tasks = [
		{
			text: "Designed and Built user-friendly customizable static web application using ReactJS, TailwindCSS v1, and TypeScript.",
			keywords: ["ReactJS", "TailwindCSS v1", "TypeScript"],
		},
		{
			text: "upgraded the web application for better SEO with Next.js and exploiting the server-side rendering benefits.",
			keywords: ["Next.js"],
		},
		{
			text: "Provided technical support and troubleshoots errors and/or problems with web based applications.",
			keywords: ["technical support", "troubleshoots"],
		},
	];

	return (
		<>
			<div className="flex flex-col max-w-xl px-4 space-y-5 md:px-0">
				<div className="flex flex-col spacey-y-2">
					{/* Title */}
					<span className="text-sm tracking-wide text-gray-100 sm:text-lg font-Arimo">
						Software Engineer{" "}
						<span className="text-AAsecondary">@ Web App</span>
					</span>
					{/* Date */}
					<span className="font-mono text-xs text-gray-500">
						June - August 2020
					</span>
				</div>
				<div className="flex flex-col space-y-4 text-xs sm:text-sm">
					{/* Tasks Description 1 */}
					{tasks.map((item, index) => {
						return (
							<div key={index} className="flex flex-row space-x-1">
								<ArrowIcon />
								<span
									className="text-xs text-gray-500 sm:text-sm"
									dangerouslySetInnerHTML={{
										__html: getTasksTextWithHighlightedKeyword(
											item.text,
											item.keywords
										),
									}}
								></span>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
