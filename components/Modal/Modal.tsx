import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import { useState, useEffect, ReactNode } from "react";

const Modal = ({
	children,
	id,
	show,
	onClose,
}: {
	show: boolean;
	children: ReactNode;
	id: string;
	onClose: () => void;
}) => {
	const [rendered, setRendered] = useState(false);

	useEffect(() => {
		setRendered(true);
	}, []);

	useEffect(() => {
		if (show) {
			document.addEventListener("keydown", (e) => {
				if (e.code === "Escape") {
					onClose();
				}
			});
		}
	}, [show]);

	if (!rendered || !show) {
		return null;
	}
	return createPortal(
		<div
			data-testid={id}
			id={id}
			onClick={onClose}
			className={styles.modalContainer}
		>
			<div
				id={`${id}-content`}
				data-testid={`${id}-content`}
				onClick={(e) => {
					e.stopPropagation();
				}}
				className={styles.modalContent}
			>
				{children}
			</div>
		</div>,
		document.body,
	);
};

export default Modal;
