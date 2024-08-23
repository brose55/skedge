import { useContext } from "react"
import AuthContext from "../contexts/AuthContext"
import { Navigate, Outlet } from "react-router-dom"

// routes if not signed in
const PublicRoutes = () => {
	const { isSignedIn } = useContext(AuthContext)

	// get the last page the user was on
	const path = localStorage.getItem("page") || "/"

	// if user is signed in, send them to the last page they were on
	return isSignedIn ? <Navigate to={path} /> : <Outlet />
}

export default PublicRoutes
