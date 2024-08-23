import { useState, useRef, useEffect, ChangeEvent, FormEvent } from "react"
import { Link } from "react-router-dom"
import displayError from "../../utils/displayError"
import "./SignIn.css"
import { AxiosError } from "axios"
import { SignInFormData } from "../../types/interfaces"

interface SignInFormProps {
	onSubmit: (formData: SignInFormData) => void
	loginError: AxiosError | string | null
	message: string
	mainSignIn: boolean
	focusTimer: number
}

const SignInForm: React.FC<SignInFormProps> = ({
	onSubmit,
	loginError,
	message,
	mainSignIn,
	focusTimer,
}) => {
	const [formState, setFormState] = useState<SignInFormData>({
		email: "",
		password: "",
	})

	const signInInput = useRef<HTMLInputElement>(null)

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormState({ ...formState, [e.target.name]: e.target.value })
	}

	useEffect(() => {
		const signInTimerId = setTimeout(() => {
			signInInput.current?.focus()
		}, focusTimer)

		return () => {
			clearTimeout(signInTimerId)
		}
	}, [focusTimer])

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
		onSubmit(formState)
	}

	const { email, password } = formState

	return (
		<section className="left">
			<header>
				<h2 className="animation a1">{message}</h2>
				<h2 className="animation a1">please sign in...</h2>
				<p>{loginError ? displayError(loginError) : null}</p>
			</header>
			<form id="sign-in-form" onSubmit={handleSubmit}>
				<input
					type="email"
					name="email"
					className="form-field animation a2"
					ref={signInInput}
					value={email}
					placeholder="email..."
					onChange={handleChange}
					autoComplete="email"
				/>
				<input
					type="password"
					name="password"
					className="form-field animation a3"
					value={password}
					placeholder="********"
					onChange={handleChange}
				/>
				{mainSignIn ? (
					<p className="animation a4">
						don't have an account? <Link to="/pub/register">sign up</Link>
					</p>
				) : null}
				<button className="form-field animation a5" type="submit">
					login
				</button>
			</form>
		</section>
	)
}

export default SignInForm
