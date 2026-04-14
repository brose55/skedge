import { Link, useLocation } from "react-router-dom"
import styles from "./Nav.module.scss"

interface NavLink {
	to: string
	label: string
}

interface NavLinksProps {
	links: NavLink[]
}

// reusable nav link list
// filters out the current page and handles separators
const NavLinks: React.FC<NavLinksProps> = ({ links }) => {
	const { pathname } = useLocation()

	// exclude the link for the page the user is already on
	const filteredLinks = links.filter((link) => link.to !== pathname)

	// separators are index-based so we never get a leading or trailing pipe
	return (
		<>
			{filteredLinks.map((link, i) => (
				<span key={link.to}>
					{i > 0 && <span className={styles.linkSeperator}>|</span>}
					<Link to={link.to}>
						<code>{link.label}</code>
					</Link>
				</span>
			))}
		</>
	)
}

export default NavLinks
