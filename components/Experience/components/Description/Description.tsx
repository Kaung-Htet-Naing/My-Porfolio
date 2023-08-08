import React from "react";
import ArrowIcon from "../ArrowIcon/ArrowIcon";
import { Work } from "../../../../types/ResumeData";

export default function Description({ work }: { work: Work }) {
	return (
		<>
			<div className="flex flex-col max-w-xl px-4 space-y-5 md:px-0">
				<div className="flex flex-col spacey-y-2">
					<span className="text-sm font-medium tracking-wide text-white sm:text-lg font-Arimo">
						{work.position} <span className="text-primary-text">@ Web App</span>
					</span>
					<span className="font-mono text-xs text-white/70">
						{work.startDate} - {work.endDate ? work.endDate : "Current"}
					</span>
					{work.url && (
						<span
							className="font-mono text-xs text-primary-text hover:cursor-pointer"
							style={{ fontSize: "0.6rem" }}
							onClick={() => window.open(work.url, "_blank")}
						>
							{work.url}
						</span>
					)}
				</div>
				<div className="flex flex-col space-y-4 text-xs sm:text-sm">
					{work.highlights.map((item, index) => {
						return (
							<div key={index} className="flex flex-row space-x-1">
								<ArrowIcon />
								<span className="text-xs text-white/80 sm:text-sm">{item}</span>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}
