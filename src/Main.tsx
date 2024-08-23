import Header from "./components/Header/Header"
import MainRoutes from "./routes/MainRoutes"
import Footer from "./components/Footer/Footer"
import "./Main.css"

interface MainProps {
	theme: string
	setTheme: (theme: string) => void
}

// the actual app lives here
// divided into a static header and footer
// and a dynamic main section
const Main: React.FC<MainProps> = ({ theme, setTheme }) => {
	return (
		<div className="main-app">
			<Header setTheme={setTheme} theme={theme} />
			<main>
				{/* we use a container component for routing to allow for public and protected routes */}
				<MainRoutes />
			</main>
			<Footer theme={theme} />
		</div>
	)
}

export default Main
