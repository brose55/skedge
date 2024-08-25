import { useState } from "react"
import "./HamburgerMenu.css"
import ProtectedLinks from "../ProtectedLinks"
import PublicLinks from "../PublicLinks"

interface HamburgerMenuProps {
	isSignedIn: boolean
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isSignedIn }) => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className="hamburger-menu">
			<div className={`menu-icon ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
				<div></div>
				<div></div>
				<div></div>
			</div>
			{isOpen && (
				<nav className="dropdown-menu">
					{isSignedIn ? <ProtectedLinks /> : <PublicLinks />}
				</nav>
			)}
		</div>
	)
}

export default HamburgerMenu
