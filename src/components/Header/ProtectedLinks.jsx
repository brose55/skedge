import { Link, useLocation } from "react-router-dom";

const ProtectedLinks = () => {
	const location = useLocation()
  return (
		<div>
      {
        location.pathname === '/'
        ? 
          <Link to="/daily">
            <code>daily</code>
          </Link>
        : 
          <Link to="/">
            <code>home</code>
          </Link>
      }
		</div>
	);
};

export default ProtectedLinks;
