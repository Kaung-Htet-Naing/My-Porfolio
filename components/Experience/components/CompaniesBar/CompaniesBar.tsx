import React from "react";
import { motion } from "framer-motion";

interface WorkItem {
	name: string;
}
interface CompanyButtonProps {
	BarAvobePosition: number;
	DescriptionJob: string;
	CompanyNameBackgroundColorGold: boolean[];
	ButtonOrderOfcompanyNameBackgroundColorGold: number;
	CompanyName: string;
	setDescriptionJob: (description: string) => void;
}

interface CompaniesBarProps {
	work: WorkItem[];
	setDescriptionJob: (description: string) => void;
}

const CompaniesBar: React.FC<CompaniesBarProps> = (props) => {
	const [barAbovePosition, setBarAbovePosition] = React.useState(0);
	const [companyNameBackgroundColorGold, setCompanyNameBackgroundColorGold] =
		React.useState([true, false]);

	const companies: {
		CompanyName: string;
		BarAvobePosition: number;
		DescriptionJob: string;
		CompanyNameBackgroundColorGold: boolean[];
	}[] = props.work.map((workItem: { name: string }, index: number) => ({
		CompanyName: workItem.name,
		BarAvobePosition: index * 128 + 1,
		DescriptionJob: workItem.name,
		CompanyNameBackgroundColorGold: Array.from(
			{ length: props.work.length },
			(_, i) => i === index
		),
	}));

	const CompanyButton: React.FC<CompanyButtonProps> = (props) => {
		return (
			<button
				onClick={() => {
					setBarAbovePosition(props.BarAvobePosition);
					props.setDescriptionJob(props.DescriptionJob);
					setCompanyNameBackgroundColorGold(
						props.CompanyNameBackgroundColorGold
					);
				}}
				className={`flex-none sm:text-sm text-xs text-white/90 font-medium text-center md:text-left  hover:text-secondary-text hover:bg-color-grey rounded  py-3 md:pl-6 md:px-4 md:w-44 w-32 duration-500 ${
					companyNameBackgroundColorGold[
						props.ButtonOrderOfcompanyNameBackgroundColorGold
					] && "bg-primary-text/80 text-white"
				}`}
			>
				{props.CompanyName}
			</button>
		);
	};

	return (
		<div
			id="WhereIhaveWorkedSection"
			className="flex flex-col items-start justify-start w-screen pb-4 overflow-auto md:flex-row md:w-auto scrollbar-hide md:overflow-hidden md:pb-0 sm:justify-center sm:items-center"
		>
			<div className="flex flex-col order-1 pl-8 space-y-1 md:order-2 md:pl-0 ">
				<div className="flex flex-row md:flex-col">
					{companies.map((company, index) => (
						<CompanyButton
							key={index}
							ButtonOrderOfcompanyNameBackgroundColorGold={index}
							CompanyName={company.CompanyName}
							BarAvobePosition={company.BarAvobePosition}
							DescriptionJob={company.DescriptionJob}
							CompanyNameBackgroundColorGold={
								company.CompanyNameBackgroundColorGold
							}
							setDescriptionJob={props.setDescriptionJob}
						/>
					))}
				</div>
				<div className="block md:hidden h-0.5 rounded bg-gray-500 ">
					<motion.div
						animate={{ x: barAbovePosition }}
						className="w-[128px] h-0.5 rounded bg-primary-text"
					></motion.div>
				</div>
			</div>
		</div>
	);
};

export default CompaniesBar;
