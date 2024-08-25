import { useState } from "react"
import AuthContext from "./contexts/AuthContext"
import Main from "./Main"
import "./themes/dark.scss"
import "./themes/light.scss"
import styles from "./App.module.scss"

// contains the sign in and theme state
function App() {
	// set isSignedIn to true to develop without the backend
	const [isSignedIn, setSignedIn] = useState(false)
	const authValue = { isSignedIn, setSignedIn }

	// keep page theme on refresh
	const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark")

	return (
		// this wrapper gets an id of either dark or light to handle theming
		<div id={theme} className={styles.App}>
			{/* Context wraps our main component so that other parts of our app can access the global signedIn state */}
			<AuthContext.Provider value={authValue}>
				<Main theme={theme} setTheme={setTheme} />
			</AuthContext.Provider>
		</div>
	)
}

export default App
