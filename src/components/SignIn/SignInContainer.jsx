import axios from "axios"
import { useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useCookies } from "react-cookie"
import AuthContext from "../../contexts/AuthContext"
import SignInForm from "./SignInForm"
import "./SignIn.css"

// this is where the sign in logic lives
function SignInContainer(props) {
	const { setSignedIn } = useContext(AuthContext)
	const [loginError, setLoginError] = useState(null)
	const [, removeCookie] = useCookies()
	const navigate = useNavigate()

	useEffect(() => {
		// see if user has any active sessions
		const getSession = async () => {
			try {
				const session = await axios.get(
					`${process.env.REACT_APP_DEV_URL}/api/sessions`,
					{ withCredentials: true }
				)

				if (session.data.length > 0) {
					setSignedIn(true)
				} else {
					localStorage.clear("page")
					// troll hackers if they are trying to use someone else's cookies
					removeCookie("accessToken")
					removeCookie("refreshToken")
				}
			} catch (err) {
				console.error(err)
			}
		}

		getSession()
	}, [setSignedIn, removeCookie])

	const handleSubmit = async (formState) => {
		try {
			await axios.post(
				`${process.env.REACT_APP_DEV_URL}/api/sessions`,
				formState,
				{ withCredentials: true }
			)
			setSignedIn(true)
			navigate("../../", { replace: true })
		} catch (err) {
			setLoginError(err)
		}
	}

	return (
		<SignInForm
			loginError={loginError}
			onSubmit={handleSubmit}
			message={props.message}
			mainSignIn={props.mainSignIn}
			focusTimer={props.focusTimer}
		/>
	)
}

export default SignInContainer
