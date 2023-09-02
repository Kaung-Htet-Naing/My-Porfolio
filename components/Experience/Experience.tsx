"use client";
import React, { useContext } from "react";
import { Waypoints } from "..";
import { ResumeContext } from "@context/resumeProvider";
import ResumeData from "../../types/ResumeData";
import { Description, CompaniesBar } from "./components/index";

const experience = "< Experience />";

export default function Experience() {
	const { work } = useContext(ResumeContext) as ResumeData;

	const GetDescription = () => {
		switch (DescriptionJob) {
			case work[0].name:
				return <Description work={work[0]} />;
			case work[1].name:
				return <Description work={work[1]} />;
			case work[2].name:
				return <Description work={work[2]} />;
		}
	};
	const [DescriptionJob, setDescriptionJob] = React.useState(work[0].name);

	return (
		<div className="bg-primary-background">
			<Waypoints target={"toexperience"}>
				<div
					className="flex flex-col items-center justify-center py-24 space-y-12 bg-primary-background"
					id="experience"
				>
					<section className="flex flex-col items-center " data-aos="fade-up">
						<span className="px-3 text-3xl font-bold tracking-wider text-white opacity-85 ">
							{experience}
						</span>
						<div
							className="bg-primary-text w-[200px] h-[5px]"
							data-aos="fade-up"
							data-aos-duration="1000"
						></div>
					</section>
					<section
						data-aos="fade-up"
						className="flex flex-col items-center justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0 md:justify-center md:items-start"
					>
						<CompaniesBar setDescriptionJob={setDescriptionJob} work={work} />
						{GetDescription()}
					</section>
				</div>
			</Waypoints>
		</div>
	);
}
