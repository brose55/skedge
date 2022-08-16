import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import AuthSwitcher from "./AuthSwitcher";
import "./Header.css";
import ProtectedLinks from "./ProtectedLinks";
import PublicLinks from "./PublicLinks";

const logo = `${process.env.PUBLIC_URL}/logo.svg`

const Header = (props) => {
    const { isSignedIn } = useContext(AuthContext);

	return (
		<header className="App-header">
            <img src={logo} alt='calendar with checkmark' />
			<nav>
				{isSignedIn ? <ProtectedLinks /> : <PublicLinks />}
			</nav>
			<button
				onClick={() =>
					props.setTheme(props.theme === "dark" ? "light" : "dark")
				}
			>
				Change Theme
			</button>
			<AuthSwitcher />
		</header>
	);
};

export default Header;
