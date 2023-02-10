import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const PublicRoutes = () => {
	const { isSignedIn } = useContext(AuthContext)

  return (isSignedIn) ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoutes;
