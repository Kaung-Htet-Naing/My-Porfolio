import React from "react";
import ArrowIcon from "../ArrowIcon/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
export default function FeverTokens() {
	const tasks = [
		{
			text: "Leading the development of the NFT Marketplace v2 for the Platform FeverTokens.",
			keywords: ["NFT Marketplace v2"],
		},
		{
			text: "Worked with a team of six developers to build a temporary NFT Marketplace platform for VivaTech2022 event, an ambitious startup originating from France,Paris.",
			keywords: ["VivaTech2022 event"],
		},
		{
			text: "Interacted with the blockchain & Smart Contracts to build the new FeverTokens Platform.",
			keywords: ["blockchain & Smart Contracts"],
		},
	];
	return (
		<>
			<div className="flex flex-col max-w-xl px-4 space-y-5 md:px-0">
				<div className="flex flex-col spacey-y-2">
					{/* Title */}
					<span className="text-sm tracking-wide text-gray-100 sm:text-lg font-Arimo">
						Software Engineer <span className="text-AAsecondary">@ web3</span>
					</span>
					{/* Date */}
					<span className="font-mono text-xs text-gray-500">
						Mars - August 2022
					</span>
					<span
						className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
						// set text size on style attribute
						style={{ fontSize: "0.6rem" }}
						onClick={() => window.open("https:///www.fevertokens.io", "_blank")}
					>
						www.fevertokens.io
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
