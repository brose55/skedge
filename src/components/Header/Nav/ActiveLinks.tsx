import { useContext } from "react"
import AuthContext from "../../../contexts/AuthContext"
import ProtectedLinks from "./ProtectedLinks"
import PublicLinks from "./PublicLinks"

// renders the correct links based on auth state
const ActiveLinks = () => {
	const { isSignedIn } = useContext(AuthContext)
	return isSignedIn ? <ProtectedLinks /> : <PublicLinks />
}

export default ActiveLinks
