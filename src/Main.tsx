import Header from "./components/Header/Header"
import MainRoutes from "./routes/MainRoutes"
import Footer from "./components/Footer/Footer"
import styles from "./Main.module.scss"

interface MainProps {
	theme: string
	setTheme: (theme: string) => void
}

// the actual app lives here
// divided into a static header and footer
// and a dynamic main section
const Main: React.FC<MainProps> = ({ theme, setTheme }) => {
	return (
		<div id={theme} className={styles.main}>
			<Header setTheme={setTheme} theme={theme} />
			{/* we use a container component for routing to allow for public and protected routes */}
			<MainRoutes />
			<Footer theme={theme} />
		</div>
	)
}

export default Main
