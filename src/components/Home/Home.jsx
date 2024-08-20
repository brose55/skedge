import useSwr from "swr"
import { useLocation } from "react-router-dom"
import fetcher from "../../utils/fetcher"
import "./Home.css"

const Home = () => {
	// get user data from server
	const { data } = useSwr(
		`${process.env.REACT_APP_DEV_URL}/api/users/me`,
		fetcher
	)

	// keep track of the page in local storage
	localStorage.setItem("page", useLocation().pathname)

	return (
		<div>
			{/* 
        check if data exists before trying to access data.username.
        since this is asynchronous, data starts off as null. 
        if we try to access data.username when data is null, the app will crash.
      */}
			<h1 id="welcome">welcome{data ? `, ${data.username}` : null}...</h1>
		</div>
	)
}

export default Home
