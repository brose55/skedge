import { useContext } from "react"
import { Link } from "react-router-dom"
import AuthContext from "../../contexts/AuthContext"
import AuthSwitcher from "./AuthSwitcher/AuthSwitcher"
import ProtectedLinks from "./AuthSwitcher/ProtectedLinks"
import PublicLinks from "./AuthSwitcher/PublicLinks"
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu"
import styles from "./Header.module.scss"

const sun = "/icons/dark-sun.svg"
const moon = "/icons/light-moon.svg"

interface HeaderProps {
	theme: string
	setTheme: (theme: string) => void
}

const Header: React.FC<HeaderProps> = (props) => {
	const { isSignedIn } = useContext(AuthContext)

	const logo = `/icons/${props.theme}_logo.svg`
	const title = `/icons/${props.theme}_skedge.svg`

	const handleClick = () => {
		const userTheme = props.theme === "dark" ? "light" : "dark"
		props.setTheme(userTheme)
		localStorage.setItem("theme", userTheme)
	}

	return (
		<header className={styles.appHeader}>
			<section>
				<HamburgerMenu isSignedIn={isSignedIn} />
				<Link to="/">
					<img
						className={styles.headerLogo}
						src={logo}
						alt="calendar with checkmark"
					/>
				</Link>
				<nav className={styles.desktopLinks}>
					{isSignedIn ? <ProtectedLinks /> : <PublicLinks />}
				</nav>
			</section>
			<section>
				<Link to="/">
					<img className={styles.siteTitle} src={title} alt="skedge" />
				</Link>
			</section>
			<section>
				<img
					src={props.theme === "dark" ? sun : moon}
					alt=""
					className={styles.themeButton}
					onClick={handleClick}
				/>
				<AuthSwitcher />
			</section>
		</header>
	)
}

export default Header
