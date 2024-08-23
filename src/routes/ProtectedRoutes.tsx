import { useContext } from "react"
import AuthContext from "../contexts/AuthContext"
import { Navigate, Outlet } from "react-router-dom"

// routes if signed In
const ProtectedRoutes = () => {
	const { isSignedIn } = useContext(AuthContext)

	// if not signed in, route to sign in page
	return isSignedIn ? <Outlet /> : <Navigate to="/pub/signin" />
}

export default ProtectedRoutes
