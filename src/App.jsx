import { useState } from "react";
import "./App.css";
import Dark from "./components/Themes/Dark";
import Light from "./components/Themes/Light";
import AuthContext from "./contexts/AuthContext";
import Main from "./Main";

function App() {
  const [isSignedIn, setSignedIn] = useState(true);
  const authValue = { isSignedIn, setSignedIn};
  const [theme, setTheme] = useState('dark')


  return (
		<div className="App">
			<AuthContext.Provider value={authValue}>
				{theme === "dark" ? (
					<Dark>
						<Main
							setTheme={setTheme}
							theme={theme}
						/>
					</Dark>
				) : (
					<Light>
						<Main
							setTheme={setTheme}
							theme={theme}
						/>
					</Light>
				)}
			</AuthContext.Provider>
		</div>
	);
}

export default App;
