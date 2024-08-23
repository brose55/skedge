import { useContext } from "react"
import { Link } from "react-router-dom"
import AuthContext from "../../contexts/AuthContext"
import AuthSwitcher from "./AuthSwitcher"
import ProtectedLinks from "./ProtectedLinks"
import PublicLinks from "./PublicLinks"
import "./Header.css"

// theme buttons
const sun = "/icons/dark-sun.svg"
const moon = "/icons/light-moon.svg"

interface HeaderProps {
	theme: string
	setTheme: (theme: string) => void
}

const Header: React.FC<HeaderProps> = (props) => {
	const { isSignedIn } = useContext(AuthContext)

	// logos based on theme
	const logo = `/icons/${props.theme}_logo.svg`
	const title = `/icons/${props.theme}_skedge.svg`

	// handles changing theme and saves to local storage for persistence
	const handleClick = () => {
		const userTheme = props.theme === "dark" ? "light" : "dark"
		props.setTheme(userTheme)
		localStorage.setItem("theme", userTheme)
	}

	return (
		<header className="App-header">
			<section>
				{/* main logo */}
				<Link to="/">
					<img
						className="header-logo"
						src={logo}
						alt="calendar with checkmark"
					/>
				</Link>
				{/* conditionally render the links depending on if signed in */}
				<nav>{isSignedIn ? <ProtectedLinks /> : <PublicLinks />}</nav>
			</section>
			<section>
				{/* Site Title Logo */}
				<Link to="/">
					<img className="site-title" src={title} alt="skedge" />
				</Link>
			</section>
			<section>
				{/* Theme Buttons */}
				<img
					src={props.theme === "dark" ? sun : moon}
					alt=""
					className="theme-button"
					onClick={handleClick}
				/>
				{/* Conditionally Renders a "sign out" Button */}
				<AuthSwitcher />
			</section>
		</header>
	)
}

export default Header
