import { useContext } from 'react'
import useSwr from 'swr'
import AuthContext from '../../contexts/AuthContext'
import fetcher from '../../utils/fetcher'
import './Home.css'

const Home = (props) => {
  const { isSignedIn } = useContext(AuthContext)
  const { data, error } = useSwr(`${process.env.REACT_APP_DEV_URL}/api/users/me`, fetcher)

  return (
    <div>
    <h1>welcome, {data.username}...</h1>
    <h1>TODO</h1>
    </div>
  )
}
 
export default Home
 