import { useState } from "react";
import "./App.css";
import Dark from "./components/Themes/Dark";
import Light from "./components/Themes/Light";
import Main from "./Main";

function App() {
  const [isSignedIn, setSignIn] = useState(false);
  const [theme, setTheme] = useState('dark')


  return (
    <div className="App">
      {
        theme === 'dark' ?
          <Dark>
            <Main 
              isSignedIn={isSignedIn} 
              setSignIn={setSignIn} 
              setTheme={setTheme} 
              theme={theme} 
            />
          </Dark>
        :
          <Light>
            <Main 
              isSignedIn={isSignedIn} 
              setSignIn={setSignIn} 
              setTheme={setTheme} 
              theme={theme} 
            />
          </Light>
      }
    </div>
  );
}

export default App;
