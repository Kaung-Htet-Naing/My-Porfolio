"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import Image from "next/image";
import { FaEnvelope, FaEnvelopeOpen } from "react-icons/fa";
import { IconContext } from "react-icons";
import { classNames } from "@core/classNames";
import { MenuToggle } from "..";
import Modal from "@components/Modal/Modal";

interface NavbarProps {
	children: React.ReactNode; // This will allow any valid JSX content as children
}
const Navbar: React.FC<NavbarProps> = (props) => {
	const [sticky, setSticky] = useState(false);
	const [showModal, setShowModal] = useState(false);

	const [isOpen, toggleOpen] = useCycle(false, true);

	function toggleModal() {
		setShowModal(!showModal);
	}

	function toggleNav() {
		toggleOpen();
	}

	function fixNavbar() {
		if (window.scrollY >= 100) {
			setSticky(true);
		} else {
			setSticky(false);
		}
	}

	useEffect(() => {
		if (showModal) document.body.style.overflow = "hidden";
		if (!showModal) document.body.style.overflow = "unset";
	}, [showModal]);

	useEffect(() => {
		window.onscroll = fixNavbar;
	}, []);

	return (
		<>
			<div
				className={classNames(
					sticky ? "bg-primary-background/50" : "bg-primary-background",
					"z-50 h-[65px] w-full sticky transition-background duration-300 backdrop-blur top-0 shadow-lg xl:px-[120px] "
				)}
			>
				<div className="relative h-full px-4">
					<div className="flex items-center justify-between h-full">
						<div className="z-3 font-bold rounded-full p-5 w-[45px] h-[45px] shadow-md relative overflow-hidden">
							<Image src="/images/profile.jpg" alt="kaung htet naing" fill />
						</div>
						<nav className="w-[45%] hidden md:flex bg-transparent" id="navMenu">
							<div className="flex justify-between w-full p-0">
								<Link href="#hero" id="tohero" className="text-secondary-text">
									<motion.a
										style={{ cursor: "pointer" }}
										initial={{ opacity: 0, y: -30 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.5 }}
									>
										Home
									</motion.a>
								</Link>
								<Link
									href="#about"
									id="toabout"
									className="text-secondary-text"
								>
									<motion.a
										style={{ cursor: "pointer" }}
										initial={{ opacity: 0, y: -30 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.6 }}
									>
										About
									</motion.a>
								</Link>
								<Link
									href="#projects"
									id="toprojects"
									className="text-secondary-text"
								>
									<motion.a
										style={{ cursor: "pointer" }}
										initial={{ opacity: 0, y: -30 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.7 }}
									>
										Projects
									</motion.a>
								</Link>
								<Link
									href="#experience"
									id="toexperience"
									className="text-secondary-text"
								>
									<motion.a
										style={{ cursor: "pointer" }}
										initial={{ opacity: 0, y: -30 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.7 }}
									>
										Experience
									</motion.a>
								</Link>
							</div>
						</nav>
						<div className="relative flex items-center gap-x-6">
							<motion.button
								initial={{ opacity: 0, y: -30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5 }}
								className="border-none cursor-pointer"
								onClick={() => {
									toggleModal();
								}}
							>
								<IconContext.Provider
									value={{
										className: "global-class-name text-primary-text",
										size: "2rem",
									}}
								>
									{showModal ? <FaEnvelopeOpen /> : <FaEnvelope />}
								</IconContext.Provider>
							</motion.button>
							<motion.div
								className="flex h-8 md:hidden"
								initial={false}
								animate={isOpen ? "open" : "closed"}
							>
								<MenuToggle toggleNav={toggleNav} />
							</motion.div>
						</div>
					</div>
					<nav
						className={classNames(
							isOpen ? "block" : "hidden",
							"h-auto w-full  text-center right-0 bg-primary-background/50  absolute text-white z-50"
						)}
						id="navMenu"
					>
						<div className="flex flex-col justify-between w-full p-0">
							<Link href="/" id="tohero " className="p-4 border-white border-y">
								<motion.a
									style={{ cursor: "pointer" }}
									initial={{ opacity: 0, y: -30 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5 }}
									onClick={toggleNav}
								>
									Home
								</motion.a>
							</Link>
							<Link
								href="#about"
								id="toabout"
								className="p-4 border-b border-white "
							>
								<motion.a
									style={{ cursor: "pointer" }}
									initial={{ opacity: 0, y: -30 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5 }}
									onClick={toggleNav}
								>
									About
								</motion.a>
							</Link>
							<Link
								href="#projects"
								id="toprojects"
								className="p-4 border-b border-white"
							>
								<motion.a
									style={{ cursor: "pointer" }}
									initial={{ opacity: 0, y: -30 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5 }}
									onClick={toggleNav}
								>
									Projects
								</motion.a>
							</Link>
							<Link
								href="#experience"
								id="toexperience"
								className="p-4 border-b border-white"
							>
								<motion.a
									style={{ cursor: "pointer" }}
									initial={{ opacity: 0, y: -30 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6 }}
									onClick={toggleNav}
								>
									Experiece
								</motion.a>
							</Link>
						</div>
					</nav>
				</div>
			</div>
			<AnimatePresence>
				{showModal && <Modal onClose={toggleModal} />}
			</AnimatePresence>
			<main>{props.children}</main>
		</>
	);
};
export default Navbar;
