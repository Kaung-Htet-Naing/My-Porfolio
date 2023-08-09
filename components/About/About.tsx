"use client";
import Image from "next/image";
import { useContext } from "react";
import { Waypoints } from "..";
import calculateAge from "../../utils/calculateAge";
import { open_sans } from "@utils/fonts";
import { ResumeContext } from "@context/resumeProvider";
import ResumeData from "../../types/ResumeData";
import RivComponent from "@components/RIvComponent/RivComponent";

const aboutMe = "< About Me />";

export default function About() {
	const {
		basics: { summary },
	} = useContext(ResumeContext) as ResumeData;
	const age = calculateAge();

	return (
		<div className="bg-primary-background ">
			<svg
				className="-m-0.5"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1440 320"
				fill="#fff"
			>
				<path
					fillOpacity={1}
					d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
				></path>
			</svg>
			<Waypoints target={"toabout"}>
				<div className="px-4 bg-secondary-background" id="about">
					<section className="py-20 text-black ">
						<div className="grid grid-cols-1 md:grid-cols-2">
							<div className="flex items-center justify-center py-5 mb-20 md:mb-0">
								<div
									className="w-[400px] h-[400px] z-10"
									data-aos="fade-up-right"
								>
									<RivComponent />
								</div>
								<Image
									src="/images/blob/1.svg"
									className="absolute mt-5 md:mt-20"
									alt="blob"
									width={350}
									height={350}
									data-aos="fade-up-right"
									data-aos-duration="1500"
								/>
							</div>
							<div className="pt-10 md:mr-10">
								<div className="inline-block ">
									<div className="flex flex-col items-center">
										<h1
											className="text-3xl font-bold leading-9"
											data-aos="fade-up"
										>
											{aboutMe}
										</h1>
										<div
											className={`bg-primary-text w-[150px] h-[5px] ${open_sans.className}`}
											data-aos="fade-up"
											data-aos-duration="1000"
										/>
									</div>
								</div>
								<div data-aos="fade-up">
									<p className="mt-2">
										{`I'm currently living in ChiangMai, Thailand. My full name is Kaung Htet Naing.
                  I'm ${age} years old,
                  and while I haven't completed my graduation due to the disruptions caused by Covid-19 and military coup,
                  I pursued my studies in Information Technology at the Technological University Mandalay at 3rd years.`}
									</p>
									{summary && <p className="mt-5">{summary}</p>}
								</div>
								{/* <div
									className="mt-5 tooltip tooltip-open tooltip-right"
									data-tip={`${gh.followers} Followers, ${gh.following} Following`}
								>
									<button className="btn">Github</button>
								</div> */}
							</div>
						</div>
					</section>
				</div>
			</Waypoints>
			<svg
				className="-m-0.5"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1440 320"
				fill="#fff"
			>
				<path
					fillOpacity={1}
					d="M0,160L40,138.7C80,117,160,75,240,64C320,53,400,75,480,106.7C560,139,640,181,720,197.3C800,213,880,203,960,170.7C1040,139,1120,85,1200,80C1280,75,1360,117,1400,138.7L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
				></path>
			</svg>
		</div>
	);
}
