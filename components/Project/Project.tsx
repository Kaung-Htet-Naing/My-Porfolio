"use client";
import React from "react";
import { projectsData } from "@public/data/project-data";
import styles from "./project.module.css";
import SingleProject from "./ProjectCard/ProjectCard";
import { Waypoints } from "..";
import { FaAngleRight, FaGithub } from "react-icons/fa";

const projectsText = "< Projects />";

function Projects() {
	return (
		<div id="projects" className="bg-primary-background">
			<Waypoints target={"toprojects"}>
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
				{projectsData.length > 0 && (
					<div className="flex flex-col items-center justify-start p-8 overflow-x-hidden min-h-fit bg-secondary-background">
						<div className="flex flex-col items-center justify-center w-full mb-10">
							<h1 className="text-3xl font-bold text-black" data-aos="fade-up">
								{projectsText}
							</h1>
							<div
								className="bg-primary-text w-[130px] h-[5px]"
								data-aos="fade-up"
								data-aos-duration="1000"
							></div>
						</div>
						<div className="flex flex-col items-center justify-center w-full">
							<div className={styles.projectsBodyContainer}>
								{projectsData.slice(0, 3).map((project) => (
									<SingleProject
										key={project.id}
										id={project.id}
										name={project.projectName}
										desc={project.projectDesc}
										tags={project.tags}
										code={project.code}
										demo={project.demo}
										image={project.image}
									/>
								))}
							</div>
							{projectsData.length >= 2 && (
								<>
									<div className="mt-20 text-sm font-medium text-center text-white cursor-pointer">
										<a
											className="flex items-center px-4 py-2 transition-colors rounded bg-primary-background hover:bg-primary-background/80 "
											href="https://github.com/Kaung-Htet-Naing?tab=repositories"
											target="_blank"
											rel="noopener noreferrer"
										>
											<FaGithub className="w-5 h-5 mr-2 " />
											VIEW ALL MY PROJECTS. <FaAngleRight className="ml-2" />
										</a>
									</div>
								</>
							)}
						</div>
					</div>
				)}
			</Waypoints>
			<svg
				className="-m-0.5"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1440 320"
				fill="#fff"
			>
				<path
					fillOpacity={1}
					d="M0,64L48,96C96,128,192,192,288,224C384,256,480,256,576,218.7C672,181,768,107,864,112C960,117,1056,203,1152,224C1248,245,1344,203,1392,181.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
				></path>
			</svg>
		</div>
	);
}

export default Projects;
