import Image, { StaticImageData } from "next/image";
import React from "react";
import { FaCode, FaPlay } from "react-icons/fa";
import placeholder from "@public/images/png/placeholder.png";
import styles from "./projectCard.module.css";
import truncateText from "@utils/truncateText";

interface SingleProjectProps {
	id: number;
	name: string;
	desc: string;
	tags: string[];
	code: string;
	demo: string;
	image?: StaticImageData;
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
			className={`${styles.singleProject} bg-color-grey rounded shadow  duration-300 transition-background`}
			data-aos="fade-up-top"
		>
			<div className={styles.projectContent}>
				<p
					id={name.replace(" ", "-").toLowerCase()}
					className="text-[#283953]  font-semibold text-xl text-center leading-loose"
				>
					{name}
				</p>
				<Image src={image ? image : placeholder} alt={name} />
				<div className={styles.projectShowcaseBtn}>
					<a
						href={demo}
						target="_blank"
						rel="noreferrer"
						className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white hover:border-tertiary-text text-white hover:text-tertiary-text transition hover:scale-[1.1]"
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
						className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white hover:border-tertiary-text text-white hover:text-tertiary-text transition hover:scale-[1.1]"
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
			<p
				className={`${styles.projectDesc} bg-white text-primary-text overflow-hidden rounded-md`}
			>
				{truncateText(desc)}
			</p>
			<div
				className={`${styles.projectLang}  bg-white text-primary-text rounded-md`}
			>
				{tags.map((tag, id) => (
					<span key={id}>{tag}</span>
				))}
			</div>
		</div>
	);
}

export default SingleProject;
