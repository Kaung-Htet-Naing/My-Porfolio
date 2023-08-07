import React from "react";
import ArrowIcon from "../ArrowIcon/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function AdvancedAgroManagement() {
	const tasks = [
		{
			text: "Developed and Build a new version customizable website for Advanced Agro Management.",
			keywords: ["Advanced Agro Management"],
		},
		{
			text: "Monitored website performance and handled troubleshooting and WordPress issues.",
			keywords: ["MOnitored", "WordPress issues"],
		},
		{
			text: "Managed company WordPress website back-end with Oracle Database including plugins, tools, and themes.",
			keywords: ["Oracle Database"],
		},
	];
	return (
		<>
			<div className="flex flex-col max-w-xl px-4 space-y-5 md:px-0">
				<div className="flex flex-col spacey-y-2">
					{/* Title */}
					<span className="text-sm tracking-wide text-gray-100 sm:text-lg font-Arimo">
						Software Developer{" "}
						<span className="text-AAsecondary">@ Wordpress</span>
					</span>
					{/* Date */}
					<span className="font-mono text-xs text-gray-500">
						june - August 2019
					</span>
				</div>
				<div className="flex flex-col space-y-4 text-xs sm:text-sm">
					{/* Tasks Description 1 */}
					{tasks.map((item, index) => {
						return (
							<div key={index} className="flex flex-row space-x-2">
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
