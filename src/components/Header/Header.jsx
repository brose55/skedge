import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/AuthContext";
import AuthSwitcher from "./AuthSwitcher";
import "./Header.css";
import ProtectedLinks from "./ProtectedLinks";
import PublicLinks from "./PublicLinks";

// theme buttons
const sun = `${process.env.PUBLIC_URL}/icons/dark-sun.svg`;
const moon = `${process.env.PUBLIC_URL}/icons/light-moon.svg`;

const Header = (props) => {
	const { isSignedIn } = useContext(AuthContext);
	
	// logos based on theming
	const logo = `${process.env.PUBLIC_URL}/icons/${props.theme}_logo.svg`;
	const title = `${process.env.PUBLIC_URL}/icons/${props.theme}_skedge.svg`;
	
	// handles changing theme and saves to local storage for persistence
	const handleClick = () => {
		let userTheme = props.theme === "dark" ? "light" : "dark"
		props.setTheme(userTheme)
		localStorage.setItem('theme', userTheme)
	 }

	return (
		<header className="App-header">
			<section>
				{/* main logo */}
				<Link to='/'>
					<img className="header-logo" src={logo} alt="calendar with checkmark" />
				</Link>
				{/* conditionally render the links depending on if signeIn*/}
				<nav>{isSignedIn ? <ProtectedLinks /> : <PublicLinks />}</nav>
			</section>
			<section>
				{/* Site Title Logo */}
				<Link to='/'>
					<img className='site-title' src={title} alt="skedge" />
				</Link>
			</section>
			<section>
				{/* Theme Buttons */}
				<img src={props.theme === 'dark' ? sun : moon} alt=''
					className="theme-button"
					onClick={handleClick}
				/>
				{/* Conditionally Renders a "sign out" Button */}
				<AuthSwitcher />
			</section>
		</header>
	);
};

export default Header;
