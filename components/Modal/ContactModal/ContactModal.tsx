import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { GrClose } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";

interface ContactModal {
	onClose: () => void;
}

const ContactModal: React.FC<ContactModal> = (props) => {
	const [state, handleSubmit] = useForm("123xyz"); //TODO: replaceWithYourOwn
	if (state.submitting) {
		return (
			<div>
				<div className="fixed flex flex-col justify-between max-h-screen p-4 overflow-auto text-center transform -translate-x-1/2 -translate-y-1/2 rounded-5 bg-background-card z-3 max-w-[1200px] min-w-340 min-h-[px] left-1/2 top-1/2">
					<div>
						<h2>Sending Message</h2>
						<p>
							Just a sec...
							<br />
							Also feel free to contact me via Linkedin:
						</p>
						<div>
							<a
								href="https://www.linkedin.com/in/kaung-htet-naing-7b252426b"
								target="_blank"
								rel="noreferrer"
							>
								<FaLinkedin className="text-[4rem] fill-brand-linkedin rounded drop-shadow" />
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}

	if (state.succeeded) {
		return (
			<div>
				<div className="fixed flex flex-col justify-between max-h-screen p-4 overflow-auto text-center transform -translate-x-1/2 -translate-y-1/2 rounded-5 bg-background-card z-3 max-w-[1200px] min-w-340 min-h-[px] left-1/2 top-1/2">
					<a
						href="#!"
						className="absolute top-[20px] right-[20px]"
						onClick={props.onClose}
					>
						<GrClose className="text-[1.1rem]" />
					</a>
					<div>
						<h2>Thanks for your contact!</h2>
						<p>
							Your message was sent!
							<br />
							Also feel free to contact me via Linkedin:
						</p>
						<div>
							<a href="#" target="_blank" rel="noreferrer">
								<GrClose className="text-[1.1rem]" />
							</a>
						</div>
					</div>

					<div className="w-full">
						<motion.button
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							className="btn btn-filled"
							onClick={props.onClose}
						>
							OK
						</motion.button>
					</div>
				</div>
			</div>
		);
	}

	if (state.errors.length > 0) {
		return (
			<div>
				<div className="fixed flex flex-col justify-between max-h-screen p-4 overflow-auto text-center transform -translate-x-1/2 -translate-y-1/2 rounded-5 bg-background-card z-3 max-w-[1200px] min-w-340 min-h-[px] left-1/2 top-1/2">
					<a
						href="#!"
						className="absolute top-[20px] right-[20px]"
						onClick={props.onClose}
					>
						<GrClose className="text-[1.1rem]" />
					</a>
					<div>
						<h2>Error!</h2>
						<p>
							{state.errors[0].message}
							<br />
							<br />
							Also feel free to contact me via Linkedin:
						</p>
						{/* <div>
							<a href="#" target="_blank" rel="noreferrer">
								<i className="fab fa-linkedin h-[4rem]"></i>
							</a>
						</div> */}
					</div>
					<div className="w-full">
						<motion.button
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
							className="btn btn-filled"
							onClick={props.onClose}
						>
							OK
						</motion.button>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div>
			<div className="text-center rounded-md bg-secondary-background p-4 overflow-hidden z-20 fixed max-w-[1200px] min-w-[340px] max-h-screen min-h-[580px] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col justify-around">
				<a
					href="#!"
					className="absolute top-[20px] right-[20px]"
					onClick={props.onClose}
				>
					<GrClose className="text-[1.1rem]" />
				</a>
				<h2 className="text-3xl font-semibold">Contact me</h2>
				<form
					id="contactForm"
					className="flex flex-col h-[425px] w-full justify-around  font-medium"
					onSubmit={handleSubmit}
				>
					<div className="flex justify-center ">
						<div className="w-full ">
							<label htmlFor="email" className="block mb-2 text-left">
								Email Address
							</label>
							<input
								id="email"
								type="email"
								name="email"
								required
								className="w-full px-2 bg-transparent border-b-2 focus:outline-none focus:bg-transparent"
							/>

							<ValidationError
								prefix="Email"
								field="email"
								errors={state.errors}
							/>
						</div>
					</div>
					<div className="w-full">
						<textarea
							id="message"
							name="message"
							required
							className="w-full bg-transparent border-2 rounded-md focus:outline-none h-[175px] p-2"
						/>
						<ValidationError
							prefix="Message"
							field="message"
							errors={state.errors}
						/>
					</div>
					<div className="flex items-center justify-between mb-0 ">
						<div>
							<a
								href="https://www.linkedin.com/in/kaung-htet-naing-7b252426b"
								target="_blank"
								rel="noreferrer"
							>
								<FaLinkedin className="text-[4rem] fill-brand-linkedin rounded drop-shadow" />
							</a>
						</div>
						<div className="self-center">
							<motion.button
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								type="submit"
								disabled={state.submitting}
								className="w-full px-6 py-4 rounded shadow bg-primary-text md:w-auto"
							>
								Send Message
							</motion.button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};
export default ContactModal;
