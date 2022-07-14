import { Link, useLocation } from "react-router-dom";

const PublicLinks = () => {
	const location = useLocation()
	console.log(location)
	return (
		<div>
			{location.pathname === "/pub/signin" ? (
				<Link to="/pub/register">
					<code>register</code>
				</Link>
			) : (
				<Link to="/pub/signin">
					<code>signIn</code>
				</Link>
			)}
		</div>
	);
};

export default PublicLinks;
