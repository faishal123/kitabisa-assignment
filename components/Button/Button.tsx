import { ReactNode } from "react";
import styles from "./Button.module.css";

const Button = ({
	children,
	onClick,
}: {
	children: ReactNode;
	onClick?: () => void;
}) => {
	return (
		<button className={styles.button} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
