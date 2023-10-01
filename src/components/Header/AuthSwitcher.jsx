import axios from "axios"
import { useContext } from "react"
import AuthContext from '../../contexts/AuthContext'
import { useCookies } from "react-cookie"

// handle signing out of the app
const AuthSwitcher = () => {
  const { isSignedIn, setSignedIn } = useContext(AuthContext)
  const [ , removeCookie] = useCookies()
  
  const signOut = async () => {
    try {
      // remove the session from the db
      await axios.delete(`${process.env.REACT_APP_DEV_URL}/api/sessions`, {withCredentials: true})
      
      // remove jwts from the browser
      removeCookie('accessToken')
      removeCookie('refreshToken')

      // set global state
      setSignedIn(false)

    } catch (err) {
      console.error(`Not able to sign out from app: ${err}`)
    }
  }
  return (
    // only show if user is signed in
    isSignedIn ? <button onClick={signOut}>sign out</button> : null
  )
}
 
export default AuthSwitcher
 