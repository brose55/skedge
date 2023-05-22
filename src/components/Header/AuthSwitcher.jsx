import axios from "axios"
import { useContext } from "react"
import AuthContext from '../../contexts/AuthContext'
import { useCookies } from "react-cookie"

const AuthSwitcher = () => {
  const { isSignedIn, setSignedIn } = useContext(AuthContext)
  const [ , removeCookie] = useCookies()
  
  const signOut = async () => {
    try {
      await axios.delete(`${process.env.REACT_APP_DEV_URL}/api/sessions`, {withCredentials: true})
      removeCookie('accessToken')
      removeCookie('refreshToken')
      setSignedIn(false)
    } catch (err) {
      // TODO: change error handling here
      console.error(err)
    }
  }

  return (
    <button onClick={signOut}>
      {
        isSignedIn ? 'sign out' : null
      }
    </button>
  )
}
 
export default AuthSwitcher
 