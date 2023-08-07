import React from "react";
import ArrowIcon from "../ArrowIcon/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function IdealFresh() {
	const tasks = [
		{
			text: "Designed and Built a Desktop app for IdealFresh that manage billings, client circumstances using Apache POI with Microsoft Office Excel.",
			keywords: ["Apache POI"],
		},
		{
			text: "Creating customized scripts for pulling, managing and refactoring files from Clouds.",
			keywords: ["scripts"],
		},
		{
			text: "Daily communications and interactions with a non-developers to solve their problems by providing technological solutions and expertise.",
			keywords: ["non-developers"],
		},
	];
	return (
		<>
			<div className="flex flex-col max-w-xl px-4 space-y-5 md:px-0">
				<div className="flex flex-col spacey-y-2">
					{/* Title */}
					<span className="text-sm tracking-wide text-gray-100 sm:text-lg font-Arimo">
						Software Developer{" "}
						<span className="text-AAsecondary">@ JavaFX</span>
					</span>
					{/* Date */}
					<span className="font-mono text-xs text-gray-500">
						June - August 2021
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
