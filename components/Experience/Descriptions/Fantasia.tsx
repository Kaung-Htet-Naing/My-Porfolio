import React from "react";
import ArrowIcon from "../ArrowIcon/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Fantasia() {
	const tasks = [
		{
			text: "Responsible for Windows Server 2008 r2 installs, configuration and support Active Directory, DNS, DHCP, WINS..",
			keywords: ["Windows Server 2008"],
		},
		{
			text: "Migration of Windows 2008 to Windows Server 2012 .",
			keywords: ["Migration"],
		},
		{
			text: "Responsible for Server full, differential and incremental backups using Veeam Endpoint Backup with SQL Server 2012.",
			keywords: ["Veeam Endpoint Backup", "SQL Server 2012"],
		},
	];
	return (
		<div className="flex flex-col max-w-xl px-4 space-y-5 md:px-0">
			<div className="flex flex-col spacey-y-2">
				{/* Title */}
				<span className="text-sm tracking-wide text-gray-100 sm:text-lg font-Arimo">
					Server Manager Assistant{" "}
					<span className="text-AAsecondary">@ Windows Server</span>
				</span>
				{/* Date */}
				<span className="font-mono text-xs text-gray-500">
					June - July 2018
				</span>
			</div>
			<div className="flex flex-col space-y-4 text-xs sm:text-sm">
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
	);
}
