import { Link } from "react-router-dom"

import HamburgerMenu from "./HamburgerMenu/HamburgerMenu"
import { ActiveLinks, AuthSwitcher } from "./Nav"
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher"

import styles from "./Header.module.scss"

interface HeaderProps {
	theme: string
	setTheme: (theme: string) => void
}

const Header: React.FC<HeaderProps> = (props) => {
	const logo = `/icons/${props.theme}_logo.svg`
	const title = `/icons/${props.theme}_skedge.svg`

	return (
		<header className={styles.appHeader}>
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
					<ActiveLinks />
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
