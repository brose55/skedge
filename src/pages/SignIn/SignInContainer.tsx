import axios, { AxiosError } from "axios"
import { useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import AuthContext from "../../contexts/AuthContext"
import SignInForm from "./SignInForm"
import { SignInFormData } from "../../types/interfaces"
import "./SignIn.css"

// this is where the sign-in logic lives
interface SignInContainerProps {
	message: string
	mainSignIn: boolean
	focusTimer: number
}

const SignInContainer: React.FC<SignInContainerProps> = ({
	message,
	mainSignIn,
	focusTimer,
}) => {
	const { setSignedIn } = useContext(AuthContext)
	const [loginError, setLoginError] = useState<AxiosError | null>(null)
	const navigate = useNavigate()

	useEffect(() => {
		// see if user has any active sessions
		const getSession = async () => {
			try {
				const session = await axios.get(
					`${import.meta.env.VITE_DEV_URL}/api/sessions`,
					{ withCredentials: true }
				)

				if (session.data.length > 0) {
					setSignedIn(true)
				} else {
					localStorage.removeItem("page")
				}
			} catch (err) {
				console.error(err)
			}
		}

		getSession()
	}, [setSignedIn])

	const handleSubmit = async (formData: SignInFormData) => {
		try {
			await axios.post(
				`${import.meta.env.VITE_DEV_URL}/api/sessions`,
				formData,
				{ withCredentials: true }
			)
			setSignedIn(true)
			navigate("../../", { replace: true })
		} catch (err: any) {
			if (axios.isAxiosError(err)) {
				setLoginError(err) // Assign AxiosError directly
			} else {
				setLoginError(err.message) // Fallback to string if it's not an AxiosError
			}
		}
	}

	return (
		<SignInForm
			loginError={loginError}
			onSubmit={handleSubmit}
			message={message}
			mainSignIn={mainSignIn}
			focusTimer={focusTimer}
		/>
	)
}

export default SignInContainer
