"use client";
import { motion } from "framer-motion";

const Path: React.FC<any> = (props) => (
	<motion.path
		fill="transparent"
		strokeWidth="3"
		stroke="hsl(39, 95%, 44%)"
		strokeLinecap="round"
		{...props}
	/>
);

type MenuToggleProps = {
	toggleNav: () => void;
};

const MenuToggle = ({ toggleNav }: MenuToggleProps) => (
	<button
		className="flex items-center bg-transparent bg-white border-none cursor-pointer"
		onClick={() => {
			toggleNav();
		}}
	>
		<svg width="2rem" height="2rem" viewBox="0 0 23 23">
			<Path
				variants={{
					closed: { d: "M 2 2.5 L 20 2.5" },
					open: { d: "M 3 16.5 L 17 2.5" },
				}}
			/>
			<Path
				d="M 2 9.423 L 20 9.423"
				variants={{
					closed: { opacity: 1 },
					open: { opacity: 0 },
				}}
				transition={{ duration: 0.1 }}
			/>
			<Path
				variants={{
					closed: { d: "M 2 16.346 L 20 16.346" },
					open: { d: "M 3 2.5 L 17 16.346" },
				}}
			/>
		</svg>
	</button>
);

export default MenuToggle;
