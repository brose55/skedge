import { useContext } from "react"
import AuthContext from '../../contexts/AuthContext'

const AuthSwitcher = () => {
  const {isSignedIn, setSignedIn } = useContext(AuthContext)
  return (
    <button onClick={() => {setSignedIn(isSignedIn ? false : true)}}>
      {
        isSignedIn ? 'sign out' : 'sign in'
      }
    </button>
  )
}
 
export default AuthSwitcher
 