import { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import AuthSwitcher from "./AuthSwitcher";
import "./Header.css";
import ProtectedLinks from "./ProtectedLinks";
import PublicLinks from "./PublicLinks";

const Header = (props) => {
	const { isSignedIn } = useContext(AuthContext);
	
	const logo = `${process.env.PUBLIC_URL}/${props.theme}_logo.svg`;
	const title = `${process.env.PUBLIC_URL}/${props.theme}_skedge.svg`

	return (
		<header className="App-header">
			<section>
				<img className="header-logo" src={logo} alt="calendar with checkmark" />
				<nav>{isSignedIn ? <ProtectedLinks /> : <PublicLinks />}</nav>
			</section>
				<img className='site-title' src={title} alt="skedge" />
			<section>
				<button
					onClick={() =>
						props.setTheme(props.theme === "dark" ? "light" : "dark")
					}
				>
					Change Theme
				</button>
				<AuthSwitcher />
			</section>
		</header>
	);
};

export default Header;
