import { useState } from "react"
import Header from "./components/Header/Header"
import MainRoutes from "./routes/MainRoutes"
import Footer from "./components/Footer/Footer"
import styles from "./Layout.module.scss"

// the actual app lives here
// divided into a static header and footer
// and a dynamic main section
export default function Layout() {
	// keep page theme on refresh
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark")

	return (
		<div className={`${theme} ${styles.app}`}>
			<Header setTheme={setTheme} theme={theme} />
			{/* we use a container component for routing to allow for public and protected routes */}
			<main>
				<MainRoutes />
			</main>
			<Footer theme={theme} />
		</div>
	)
}
