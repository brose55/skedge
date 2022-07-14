import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = (props) => {
    return (
    <header className="App-header">
    <nav
        style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
        }}
    >
        <Link to="/"><code>home</code></Link> |{" "}
        <Link to="/signin"><code>signIn</code></Link> |{" "}
        <Link to="/register"><code>register</code></Link> |{" "}
        <Link to="/daily"><code>daily</code></Link>
    </nav>
    <button onClick={() => props.setTheme(props.theme==='dark' ? 'light' : 'dark')}>Change Theme</button>
    <p>
        Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
    >
        Learn React {props.isSignedIn ? "user" : "guest"}
    </a>
    </header>
    )
}
    
export default Header
