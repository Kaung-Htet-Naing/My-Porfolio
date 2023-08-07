import { InView } from "react-intersection-observer";

interface WaypointsProps {
	target: string;
	children: React.ReactNode;
}

export default function Waypoints({ target, children }: WaypointsProps) {
	return (
		<>
			<InView
				as="div"
				onChange={(inView) => {
					if (inView) {
						const el = document.getElementById(target);
						if (el) {
							el.classList.remove("text-secondary-text");
							el.classList.add("text-primary-text");
						}
					} else {
						const el = document.getElementById(target);
						if (el) {
							el.classList.remove("text-primary-text");
							el.classList.add("text-secondary-text");
						}
					}
				}}
			>
				{children}
			</InView>
		</>
	);
}
