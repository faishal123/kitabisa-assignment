import styles from "./Logo.module.css";
import logo from "../../assets/logo.png";

const Logo = () => {
	return (
		<div data-testid="logo" className={styles.logo}>
			<img src={logo} />
		</div>
	);
};

export default Logo;
