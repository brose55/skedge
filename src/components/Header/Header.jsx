import { useContext } from 'react'
import AuthContext from '../../contexts/AuthContext'
import AuthSwitcher from './AuthSwitcher'
import './Header.css'
import ProtectedLinks from './ProtectedLinks'
import PublicLinks from './PublicLinks'

const Header = (props) => {
    const { isSignedIn } = useContext(AuthContext);

    return (
    <header className="App-header">
    <nav
        style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
        }}
    >
        {
            isSignedIn ?
                <ProtectedLinks />
            :
                <PublicLinks />
        }
    </nav>
    <button onClick={() => props.setTheme(props.theme==='dark' ? 'light' : 'dark')}>Change Theme</button>
    <AuthSwitcher />
    <p>
        Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
    >
        Learn React {isSignedIn ? "user" : "guest"}
    </a>
    </header>
    )
}
    
export default Header
