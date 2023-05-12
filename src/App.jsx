import { useState } from "react";
import "./App.css";
import AuthContext from "./contexts/AuthContext";
import Main from "./Main";
import './themes/dark.css'
import './themes/light.css'

function App() {
	// set isSignedIn to true to develop
  const [isSignedIn, setSignedIn] = useState(true);
  const authValue = { isSignedIn, setSignedIn};
  const [theme, setTheme] = useState('dark')

  return (
		<div id={theme} className="App">
			<AuthContext.Provider value={authValue}>
				<Main
					theme={theme} 
					setTheme={setTheme}
				/>
			</AuthContext.Provider>
		</div>
	);
}

export default App;
