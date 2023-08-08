import { useRive } from "@rive-app/react-canvas";
import React from "react";

const RivLoading = () => {
	const { rive, RiveComponent } = useRive({
		src: "/images/riv/hard-at-work.riv",
		autoplay: true,
	});
	return (
		<div className="h-full">
			<RiveComponent />
		</div>
	);
};

export default RivLoading;
