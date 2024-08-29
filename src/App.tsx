import { useState } from "react"
import AuthContext from "./contexts/AuthContext"
import Layout from "./Layout"

// App is responsible for application-level state
export default function App() {
	// set isSignedIn to true to develop without the backend
	const [isSignedIn, setSignedIn] = useState(false)
	const authValue = { isSignedIn, setSignedIn }

	// Context wraps our Layout so that any part of our app can access the global signedIn state
	// any other global state in the future will go here
	return (
		<AuthContext.Provider value={authValue}>
			<Layout />
		</AuthContext.Provider>
	)
}
