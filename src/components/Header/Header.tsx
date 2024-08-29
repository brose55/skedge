import { useContext } from "react"
import { Link } from "react-router-dom"
import AuthContext from "../../contexts/AuthContext"
import AuthSwitcher from "./AuthSwitcher/AuthSwitcher"
import ProtectedLinks from "./AuthSwitcher/ProtectedLinks"
import PublicLinks from "./AuthSwitcher/PublicLinks"
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu"
import styles from "./Header.module.scss"
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher"

interface HeaderProps {
	theme: string
	setTheme: (theme: string) => void
}

const Header: React.FC<HeaderProps> = (props) => {
	const { isSignedIn } = useContext(AuthContext)

	const logo = `/icons/${props.theme}_logo.svg`
	const title = `/icons/${props.theme}_skedge.svg`

	return (
		<header className={styles.appHeader}>
			{/* class name here */}
			<section className={styles.logoSection}>
				<Link to="/">
					<img
						className={styles.headerLogo}
						src={logo}
						alt="calendar with checkmark"
					/>
				</Link>
				<Link to="/">
					<img className={styles.siteTitle} src={title} alt="skedge" />
				</Link>
				<nav className={styles.desktopLinks}>
					{isSignedIn ? <ProtectedLinks /> : <PublicLinks />}
				</nav>
			</section>
			<section className={styles.hamburgerMenu}>
				<HamburgerMenu theme={props.theme} setTheme={props.setTheme} />
			</section>
			<section className={styles.hiddenSection}>
				<AuthSwitcher />
				<ThemeSwitcher theme={props.theme} setTheme={props.setTheme} />
			</section>
		</header>
	)
}

export default Header
