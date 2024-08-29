import { useContext, useState } from "react"
import ProtectedLinks from "../AuthSwitcher/ProtectedLinks"
import PublicLinks from "../AuthSwitcher/PublicLinks"
import styles from "./HamburgerMenu.module.scss"
import AuthContext from "../../../contexts/AuthContext"
import AuthSwitcher from "../AuthSwitcher/AuthSwitcher"
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher"

interface HamburgerMenuProps {
	theme: string
	setTheme: (theme: string) => void
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ theme, setTheme }) => {
	const { isSignedIn } = useContext(AuthContext)
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	const closeMenu = () => {
		setIsOpen(false)
	}

	return (
		<div className={styles.hamburgerMenu}>
			<div
				className={`${styles.menuIcon} ${isOpen ? styles.open : ""}`}
				onClick={toggleMenu}
			>
				<div></div>
				<div></div>
				<div></div>
			</div>
			{isOpen && (
				<nav className={styles.dropdownMenu}>
					<span onClick={closeMenu}>
						{isSignedIn ? <ProtectedLinks /> : <PublicLinks />}
					</span>
					<span className={styles.dropdownFooter} onClick={closeMenu}>
						<AuthSwitcher />
						<ThemeSwitcher theme={theme} setTheme={setTheme} />
					</span>
				</nav>
			)}
		</div>
	)
}

export default HamburgerMenu
