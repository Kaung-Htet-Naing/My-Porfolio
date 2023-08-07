import React from "react";
import ArrowIcon from "../ArrowIcon/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function TrouveTavoie() {
	const tasks = [
		{
			text: "Spearhead & implemented a new design user workflow system for the Frond-End Architecture of a NFT Marketplace.",
			keywords: ["NFT Marketplace"],
		},
		{
			text: "Worked with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Next.js/React, AWS and Vercel.",
			keywords: ["Next.js/React", "AWS", "Vercel"],
		},
		{
			text: "Interfaced with developers on a daily basis, providing technological expertise.",
			keywords: [],
		},
	];

	return (
		<>
			<div className="flex flex-col max-w-xl px-4 space-y-5 md:px-0">
				<div className="flex flex-col spacey-y-2">
					{/* Title */}
					<span className="text-sm tracking-wide text-gray-100 sm:text-lg font-Arimo">
						Software Engineer{" "}
						<span className="text-AAsecondary">@ Blockchain</span>
					</span>
					{/* Date */}
					<span className="font-mono text-xs text-gray-500">
						Mars - August 2022
					</span>
					<span
						className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
						style={{ fontSize: "0.6rem" }}
						// set on click to open the website
						onClick={() =>
							window.open("https://www.trouvetavoie.io/", "_blank")
						}
					>
						www.trouvetavoie.io
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
