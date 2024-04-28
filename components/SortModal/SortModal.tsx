import Modal from "../Modal/Modal";
import styles from "./SortModal.module.css";
import { sortChoices } from "../../constant";

const SortModal = ({
	show,
	onClose,
	onChoose,
}: {
	show: boolean;
	onClose: () => void;
	onChoose: (choice: string) => void;
}) => {
	return (
		<Modal onClose={onClose} show={show} id="sortModal">
			<div className={styles.container}>
				<div className={styles.title}>Sort by:</div>
				{sortChoices.map((choice, i) => (
					<div
						onClick={() => {
							onClose();
							onChoose(choice);
						}}
						data-testid={`sort-choice-${choice}`}
						className={`${i === 0 ? styles.borderTop : ""} ${styles.choice}`}
						key={choice}
					>
						{choice}
					</div>
				))}
			</div>
		</Modal>
	);
};

export default SortModal;
