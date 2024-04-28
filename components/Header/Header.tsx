import styles from "./Header.module.css";
import Logo from "../Logo/Logo";
import SortAscending from "../../assets/icons/sort-asc";
import Button from "../Button/Button";

const Header = ({
	onClickSort,
	sortBy,
}: {
	onClickSort: () => void;
	sortBy: string;
}) => {
	return (
		<div data-testid="header" className={styles.container}>
			<div className={styles.logoContainer}>
				<Logo />
				<h1>Kitabisa</h1>
			</div>
			<Button onClick={onClickSort}>
				<SortAscending color="#ffffff" /> Sort By: {sortBy}
			</Button>
		</div>
	);
};

export default Header;
