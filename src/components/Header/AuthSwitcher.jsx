import axios from "axios"
import { useContext } from "react"
import AuthContext from '../../contexts/AuthContext'

const AuthSwitcher = () => {
  const { isSignedIn, setSignedIn } = useContext(AuthContext)
  
  const signOut = async () => {
    try {
      axios.delete(`${process.env.REACT_APP_DEV_URL}/api/sessions`, {withCredentials: true})
    } catch (err) {
      // TODO: change error handling here
      console.error(err)
    }
  }

  const handleClick = () => {
    signOut()
    setSignedIn(isSignedIn ? false : true)
  }


  return (
    <button onClick={handleClick}>
      {
        isSignedIn ? 'sign out' : 'sign in'
      }
    </button>
  )
}
 
export default AuthSwitcher
 