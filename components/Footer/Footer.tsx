import { FaCode, FaHeart } from "react-icons/fa";
import Link from "next/link";
import Social from "@components/SocialIcon/SocialIcon";

const Footer = () => {
	return (
		<footer className="flex flex-col items-center duration-1000 bg-primary-background transition-background text-text-secondary p-[25px] text-primary-text">
			<div className="mb-4">
				<Social type={"footer"} />
			</div>
			<div>
				<p>
					<FaCode className="inline-block transition delay-75 fill-white hover:scale-110" />
					{` with `}
					<FaHeart className="inline-block transition delay-75 fill-error hover:scale-110 fill-tertiary-text" />{" "}
					by <Link href="#hero">Kaung Htet Naing</Link>
					<br />
				</p>
			</div>
		</footer>
	);
};
export default Footer;
