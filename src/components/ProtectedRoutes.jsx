import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoutes = () => {
  const { isSignedIn } = useContext(AuthContext)

	return isSignedIn ? <Outlet /> : <Navigate to="/pub/signin" />
}
 
export default ProtectedRoutes
 