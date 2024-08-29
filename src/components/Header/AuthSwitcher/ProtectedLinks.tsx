import { Link, useLocation } from "react-router-dom"
import styles from "../Header.module.scss"

// the links that show if a user is signed in
const ProtectedLinks = () => {
	const location = useLocation()
	return (
		// if the user is on the home, show links to other pages
		// otherwise show the home link
		location.pathname === "/" ? (
			<>
				<Link to="/daily">
					<code>daily</code>
				</Link>
				<span className={styles.linkSeperator}>|</span>
				<Link to="/weekly">
					<code>weekly</code>
				</Link>
			</>
		) : (
			<>
				<Link to="/">
					<code>home</code>
				</Link>
			</>
		)
	)
}

export default ProtectedLinks
