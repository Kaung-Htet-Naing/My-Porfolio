"use client";
import { FaGithub, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useState, Fragment } from "react";
import { clsx } from "clsx";

export default function Social({ type }: { type: string }) {
	let [social] = useState([
		{
			href: "https://github.com/Kaung-Htet-Naing",
			icon: {
				icon: FaGithub,
				fill: clsx("hover:fill-white"),
			},
		},
		{
			href: "https://www.linkedin.com/in/kaung-htet-naing-7b252426b",
			icon: {
				icon: FaLinkedin,
				fill: clsx("hover:fill-brand-linkedin"),
			},
		},
		{
			href: "https://www.facebook.com/kaung.htetnaing.35912",
			icon: {
				icon: FaFacebook,
				fill: clsx("hover:fill-brand-fb"),
			},
		},
		{
			href: "https://www.instagram.com/kaunghtetnaing99/",
			icon: {
				icon: FaInstagram,
				fill: clsx("hover:fill-[url(#instagram-gradient)]"),
			},
		},
	]);

	return (
		<>
			<div
				className={`flex text-2xl text-gray-500 ${
					type === "footer"
						? "space-x-4 ml-2 md:space-x-6"
						: "space-x-7 mt-2 text-center md:text-left"
				}`}
			>
				{social.map(({ href, icon }) => {
					return (
						<Fragment key={href}>
							<a href={href} target="_blank" rel="noopener noreferrer">
								<icon.icon className={`${icon.fill} transition delay-150`} />
							</a>
						</Fragment>
					);
				})}
			</div>
		</>
	);
}
