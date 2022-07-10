import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from './components/Header/Header'
import MainRoutes from "./MainRoutes";

function App() {
  const [isSignedIn, setSignIn] = useState(false);
  return (
    <div className="App">
      <Header isSignedIn={isSignedIn} />
      <main>
        <p>hello</p>
        <MainRoutes isSignedIn={isSignedIn} setSignIn={setSignIn} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
