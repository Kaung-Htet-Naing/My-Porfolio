"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRive } from "@rive-app/react-canvas";
import { Waypoints } from "..";
import calculateAge from "@core/calculateAge";

const aboutMe = "< About Me/>";

export default function About() {
	const { rive, RiveComponent } = useRive({
		src: "/images/riv/coder.riv",
		autoplay: true,
	});
	const age = calculateAge();
	let [gh, setGh] = useState<any>("Fetching...");
	useEffect(() => {
		(async () => {
			try {
				const res = await fetch(
					"https://api.github.com/users/Kaung-Htet-Naing"
				);
				const data = await res.json();
				console.log(data);
				setGh(data);
			} catch {
				setGh({ public_repos: "several" });
			}
		})();
	}, []);

	return (
		<div className="bg-primary-background">
			<svg
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
							<div className="flex justify-center py-5 mb-20 md:mb-0 ">
								<Image
									className="z-50"
									src="/images/about.svg"
									alt="about me"
									width={200}
									height={200}
									data-aos="fade-up-right"
								/>
								<Image
									src="/images/blob/2.svg"
									className="absolute mt-5 md:mt-20"
									alt="blob"
									width={350}
									height={350}
									data-aos="fade-up-right"
									data-aos-duration="1500"
								/>
							</div>
							<div className="pt-10 md:mr-10">
								<h1 className="text-3xl font-bold leading-9" data-aos="fade-up">
									{aboutMe}
								</h1>
								<div
									className="bg-primary-text w-[200px] h-[5px]"
									data-aos="fade-up"
									data-aos-duration="1000"
								></div>
								<p className="mt-2">
									{`I live in Purwokerto, Indonesia. My full name is Jastin
                  Linggar Tama, just call me Jastin. I'm ${age} years old. A Software
                  Engineering student, I have known Programming since 2020 and
                  am quite familiar with HTML, CSS, Javascript and several other
                  languages ​​& frameworks.`}
								</p>
								<p className="mt-5">
									A Little Story, In the past, I preferred to learn about Back
									End but when I got to know Front End frameworks like NextJs, I
									think now I prefer to learn about Front End. But I&apos;m also
									learning New Things about Back End in PHP now. I don&apos;t
									know, I&apos;m a person who likes to learn new things but
									rarely takes it seriously.
								</p>
								<p className="mt-5">
									One more thing, I have created{" "}
									<span className="font-bold">{gh.public_repos}</span> public
									repository on my Github. Various repositories such as
									templates or even just a package to make things easier. There
									are several serious projects but now they are rarely developed
									due to conflicts with school work.
								</p>
								{/* <div class="tooltip tooltip-open tooltip-right mt-5" data-tip={`${gh.followers} Followers, ${gh.following} Following`}>
                <button class="btn"><FaGithub className="w-5 h-5 mr-2" /> Github</button>
              </div> */}
							</div>
						</div>
					</section>
				</div>
			</Waypoints>
			<svg
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
