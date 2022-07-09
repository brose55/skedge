import { useState } from "react";
import "./App.css";
import Header from './components/Header/Header'
import MainRoutes from "./MainRoutes";

function App() {
  const [isSignedIn, setSignIn] = useState("user");
  return (
    <div className="App">
      <Header isSignedIn={isSignedIn} />
      <main>
        <p>hello</p>
        <MainRoutes isSignedIn={isSignedIn} setSignIn={setSignIn} />
      </main>
    </div>
  );
}

export default App;
