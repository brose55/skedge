import { useState } from "react"

import { ActiveLinks, AuthSwitcher } from "../Nav"
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher"

import styles from "./HamburgerMenu.module.scss"

interface HamburgerMenuProps {
	theme: string
	setTheme: (theme: string) => void
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ theme, setTheme }) => {
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
						<ActiveLinks />
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
