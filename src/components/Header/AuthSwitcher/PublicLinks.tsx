import { Link, useLocation } from "react-router-dom";

// the links that will show if a user isn't signed in
const PublicLinks = () => {
	const location = useLocation()
	return (
		// conditionally render the link depending on what page the user is on
		location.pathname === "/pub/signin"
			?
				<Link to="/pub/register">
					<code>register</code>
				</Link>
			: 
				<Link to="/pub/signin">
					<code>signIn</code>
				</Link>
	)
}

export default PublicLinks;
