import React from "react";
import ArrowIcon from "../ArrowIcon/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function EnsVision() {
	const tasks = [
		{
			text: "Worked on the front-end development in the web3 domain using Next.js, Alchemy, Tailwind CSS, Wagmi, Web3.js, Moralis, Ethers.js",
			keywords: ["Alchemy", "Wagmi", "Web3.js", "Moralis", "Ethers.js"],
		},
		{
			text: "Conducted testing tasks to ensure website functionality and quality. Managed a large user base on the website",
			keywords: ["quality", "testing tasks", "user base"],
		},
		{
			text: "Implemented website design and enhanced interactivity.",
			keywords: ["website design"],
		},
		{
			text: "Collaborated closely with the team in regular meetings and interacted with smart contracts and gained expertise in ENS",
			keywords: ["smart contracts", "ENS"],
		},
	];

	return (
		<>
			<div className="flex flex-col max-w-xl px-4 space-y-5 md:px-0">
				<div className="flex flex-col spacey-y-2">
					{/* Title */}
					<span className="text-sm font-medium tracking-wide text-white sm:text-lg font-Arimo">
						Software Engineer <span className="text-primary-text">@ web3</span>
					</span>
					{/* Date */}
					<span className="font-mono text-xs text-white/70">
						Dec 2022 - Jun 2023
					</span>
					<span
						className="font-mono text-xs text-primary-text hover:cursor-pointer"
						style={{ fontSize: "0.6rem" }}
						// set on click to open the website
						onClick={() => window.open("https://www.ens.vision/", "_blank")}
					>
						www.ens.vision
					</span>
				</div>
				<div className="flex flex-col space-y-4 text-xs sm:text-sm">
					{/* Tasks Description 1 */}
					{tasks.map((item, index) => {
						return (
							<div key={index} className="flex flex-row space-x-1">
								<ArrowIcon />
								<span
									className="text-xs text-white/80 sm:text-sm"
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
