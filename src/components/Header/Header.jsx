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
    </header>
    )
}
    
export default Header
