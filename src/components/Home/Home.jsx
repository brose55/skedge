import useSwr from 'swr'
import fetcher from '../../utils/fetcher'
import './Home.css'

const Home = () => {
  const { data } = useSwr(`${process.env.REACT_APP_DEV_URL}/api/users/me`, fetcher)

  return (
		<div>
      {/* 
        This is really strange. If I just use data.username the 
        app will crash on the user's first load. This conditional 
        makes it so that it always renders correctly. Revisit this 
        in the future.
      */}
			<h1>welcome{data ? `, ${data.username}`: null}...</h1>
			<h1>TODO</h1>
		</div>
	);
}
 
export default Home
 