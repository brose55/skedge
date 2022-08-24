import { useContext } from 'react'
import AuthContext from '../../contexts/AuthContext'
import './Home.css'

const Home = (props) => {
  const { isSignedIn } = useContext(AuthContext)

  return (
    <div>
    <p>This is the home, {isSignedIn ? 'user' : 'guest'} </p>
    <h1>TODO</h1>
    <h3>Make icons</h3>
    </div>
  )
}
 
export default Home
 