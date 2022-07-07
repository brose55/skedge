import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
    <header className="App-header">
    <nav
        style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
        }}
    >
        <Link to="/signin"><code>signIn</code></Link> |{" "}
        <Link to="/daily"><code>register</code></Link>
    </nav>
    <p>
        Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
    >
        Learn React
    </a>
    </header>
    )
}
    
export default Header
