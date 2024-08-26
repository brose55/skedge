import { useState } from "react"
import ProtectedLinks from "../AuthSwitcher/ProtectedLinks"
import PublicLinks from "../AuthSwitcher/PublicLinks"
import styles from "./HamburgerMenu.module.scss"

interface HamburgerMenuProps {
	isSignedIn: boolean
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isSignedIn }) => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
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
					{isSignedIn ? <ProtectedLinks /> : <PublicLinks />}
				</nav>
			)}
		</div>
	)
}

export default HamburgerMenu
