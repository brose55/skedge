import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
	const { isSignedIn } = useContext(AuthContext)
  
  const path = localStorage.getItem('page') || '/'

  return (isSignedIn) ? <Navigate to={path} /> : <Outlet />
}

export default PublicRoutes
