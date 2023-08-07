import Image from "next/image";
import React from "react";
import { FaCode, FaPlay } from "react-icons/fa";
import placeholder from "@public/images/png/placeholder.png";
import styles from "./projectCard.module.css";

interface SingleProjectProps {
	id: number;
	name: string;
	desc: string;
	tags: string[];
	code: string;
	demo: string;
	image?: string;
}

function SingleProject({
	id,
	name,
	desc,
	tags,
	code,
	demo,
	image,
}: SingleProjectProps) {
	return (
		<div
			key={id}
			className={`${styles.singleProject} bg-[#AEAEAE]`}
			data-aos="fade-up-top"
		>
			<div className={styles.projectContent}>
				<h2
					id={name.replace(" ", "-").toLowerCase()}
					style={{ color: "#283953" }}
				>
					{name}
				</h2>
				<Image src={image ? image : placeholder} alt={name} />
				<div className={styles.projectShowcaseBtn}>
					<a
						href={demo}
						target="_blank"
						rel="noreferrer"
						className="flex items-center justify-center w-[40px] h-[40px] rounded-[50px] border-2 border-[#EFF3F4] hover:border-tertiary-text text-[#EFF3F4] hover:text-tertiary-text transition hover:scale-[1.1]"
						aria-labelledby={`${name.replace(" ", "-").toLowerCase()} ${name
							.replace(" ", "-")
							.toLowerCase()}-demo`}
					>
						<FaPlay
							id={`${name.replace(" ", "-").toLowerCase()}-demo`}
							className="text-[1.1rem] transition"
							aria-label="Demo"
						/>
					</a>
					<a
						href={code}
						target="_blank"
						rel="noreferrer"
						className="flex items-center justify-center w-[40px] h-[40px] rounded-[50px] border-2 border-[#EFF3F4] hover:border-tertiary-text text-[#EFF3F4] hover:text-tertiary-text transition hover:scale-[1.1]"
						aria-labelledby={`${name.replace(" ", "-").toLowerCase()} ${name
							.replace(" ", "-")
							.toLowerCase()}-code`}
					>
						<FaCode
							id={`${name.replace(" ", "-").toLowerCase()}-code`}
							className="text-[1.1rem] transition"
							aria-label="Code"
						/>
					</a>
				</div>
			</div>
			<p className={`${styles.projectDesc} bg-white text-primary-text`}>
				{desc}
			</p>
			<div className={`${styles.projectLang}  bg-white text-primary-text`}>
				{tags.map((tag, id) => (
					<span key={id}>{tag}</span>
				))}
			</div>
		</div>
	);
}

export default SingleProject;
