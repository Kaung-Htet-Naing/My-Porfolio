import ContactModal from "./ContactModal/ContactModal";
import { motion } from "framer-motion";

const dropIn = {
	hidden: {
		y: "-100vh",
	},
	visible: {
		y: "50vh",
		transition: {
			duration: 0.1,
			type: "spring",
			damping: 25,
			stiffness: 500,
		},
	},
	exit: {
		y: "150vh",
	},
};

interface ModalProps {
	onClose: () => void;
}

const Modal: React.FC<ModalProps> = (props) => {
	return (
		<>
			<motion.div
				initial={{ opacity: 1 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="fixed top-0 left-0 z-50 w-full h-screen bg-black bg-opacity-75"
				onClick={props.onClose}
			>
				<motion.div
					onClick={(e) => e.stopPropagation()}
					variants={dropIn}
					initial="hidden"
					animate="visible"
					exit="exit"
				>
					<ContactModal {...props} />
				</motion.div>
			</motion.div>
		</>
	);
};
export default Modal;
