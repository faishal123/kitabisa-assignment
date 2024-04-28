import styles from "./ProgressBar.module.css";

const ProgressBar = ({ percentage }: { percentage: number }) => {
	const isAchieved = percentage >= 1;
	const percentageToUse = isAchieved ? 1 : percentage;
	return (
		<div className={styles.progressBar}>
			<div
				className={`${styles.progress} ${isAchieved ? styles.achieved : ""}`}
				style={{ width: `${percentageToUse * 100}%` }}
			></div>
		</div>
	);
};

export default ProgressBar;
