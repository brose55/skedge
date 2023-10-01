import { Link, useLocation } from "react-router-dom";

// the links that show if a user is signed in
const ProtectedLinks = () => {
	const location = useLocation()
  return (
    // if the user is on the home, show the other pages
    // otherwise show home
    // TODO: change this once Weekly has been finished
    location.pathname === '/'
        ? 
          <>
            <Link to="/daily">
              <code>daily</code>
            </Link>
            |
            <Link to='/weekly'>
              <code>weekly</code>
            </Link>
          </>
        : 
          <Link to="/">
            <code>home</code>
          </Link>
	);
};

export default ProtectedLinks;
