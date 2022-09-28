import axios from "axios"
import { useContext } from "react"
import AuthContext from '../../contexts/AuthContext'

const AuthSwitcher = () => {
  const { isSignedIn, setSignedIn } = useContext(AuthContext)
  
  const signOut = async () => {
    try {
      await axios.delete(`${process.env.REACT_APP_DEV_URL}/api/sessions`, {withCredentials: true})
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
        isSignedIn ? 'sign out' : null
      }
    </button>
  )
}
 
export default AuthSwitcher
 