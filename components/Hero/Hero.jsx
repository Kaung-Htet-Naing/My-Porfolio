"use client";
import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { AnimatePresence, motion } from "framer-motion";
import { SocialIcon, Waypoints } from '..';
import Typed from "react-typed";
import Modal from '@components/Modal/Modal';
import { open_sans } from "@utils/fonts";

const myProfession = "<I'm a Front-End Developer/>";

const Hero = () => {
	const [showModal, setShowModal] = useState();

	function buttonHandler() {
		window.open("https://registry.jsonresume.org/kaung-htet-naing", "_blank");
	}

	function showModalHandler() {
		setShowModal(true);
	}

	function closeModalHandler() {
		setShowModal(false);
	}

	useEffect(() => {
		if (showModal) document.body.style.overflow = "hidden";
		if (!showModal) document.body.style.overflow = "unset";
	}, [showModal]);

	useEffect(() => {
		Aos.init({ duration: 500 });
	}, []);

	return (
		<Waypoints target={"tohero"}>
			<section
				className="flex items-center h-screen px-4 pt-6 pb-12 bg-primary-background"
				id="hero"
			>
				<div className="container flex flex-col justify-center m-auto max-w-[1200px]">
					<div className="flex flex-col md:flex-row">
						<div className="flex flex-col md:self-center order-2 md:order-1  md:w-[55%] md:mb-0">
							<h3
								data-aos="fade-left"
								className="my-4 text-base md:text-2xl text-primary-text"
							>
								Hi <span className="inline-block animate-wave ">👋🏼</span>, my
								name is Kaung Htet Naing.
							</h3>
							<h1
								data-aos="fade-right"
								className={`text-2xl font-medium md:text-[2.7rem] text-primary-text ${open_sans.className}`}
							>
								{myProfession}
							</h1>
							<p
								data-aos="fade-left "
								data-aos-delay="150"
								className="flex items-center my-4 text-sm md:text-lg text-secondary-text"
							>
								I build stuff with{" "}
								<span className="mx-1">
									<Image
										src="/images/js.png"
										alt="usa-flag"
										width={16}
										height={16}
									/>
								</span>{" "}
								Javascript.
							</p>
							<p
								data-aos="fade-right"
								data-aos-duration="1000"
								className="mb-2 text-base font-extrabold text-tertiary-text md:text-xl bg-clip-text bg-gradient-to-br from-[#d99006] to-[#fdea71] md:inline-block "
							>
								Someone who likes to{" "}
								<Typed
									strings={[
										"coding .",
										"sleeping .",
										"adventuring .",
										"watching movies .",
									]}
									typeSpeed={79}
									backSpeed={50}
									backDelay={40}
									loop
								/>
							</p>
							<div className="flex" data-aos="fade-left " data-aos-delay="150">
								<SocialIcon />
							</div>
							<div className="flex mt-4 gap-x-2">
								<motion.button
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
									className="py-4 border px-6 border-[#4b5154] rounded shadow  bg-secondary-text md:mr-14 w-full md:w-auto "
									data-aos="fade-up"
									onClick={buttonHandler}
								>
									Resume
								</motion.button>
								<motion.button
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
									className="w-full px-6 py-4 border rounded shadow border-primary-text md:mr-14 text-primary-text md:w-auto"
									data-aos="fade-down"
									onClick={showModalHandler}
								>
									Let&rsquo;s Talk
								</motion.button>
							</div>
						</div>
						<div
							className="my-8 mx-auto mt-0 min-[480px[]:my-0 min-[480px]:mx-auto min-[480px]:mt-12 md:m-auto self-center order-1  overflow-hidden text-center rounded-full w-[205px] h-[205px] md:w-[460px] md:h-[460px] min-[480px]:w-[350px] min-[480px]:h-[350px] md:order-2  drop-shadow-md"
							data-aos="fade-left"
						>
							<Image
								src="/images/Default_Cartoon_style_logo_An_intelligent_streetwear_hoodie_we_0_8d8bf534-3397-4aa7-ac7c-06cb7878442f_1.jpg"
								width={460}
								height={460}
								alt="kaung htet naing"
							/>
						</div>
					</div>
					<div>
						<a href="#about">
							<div
								className="relative iconScroll w-[20px] h-[40px] md:block hidden rounded-full mx-auto border-2 border-[#4b5154] before:animate-scroll"
								data-aos="fade-down"
								data-aos-offset="50"
							></div>
						</a>
					</div>
				</div>
				<AnimatePresence>
					{showModal && <Modal contact onClose={closeModalHandler} />}
				</AnimatePresence>
			</section>
		</Waypoints>
	);
};
export default Hero;
