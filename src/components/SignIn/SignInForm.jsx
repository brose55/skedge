import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import displayError from "../../utils/displayError"
import "./SignIn.css"

const SignInForm = ({
	onSubmit,
	loginError,
	message,
	mainSignIn,
	focusTimer,
}) => {
	const [formState, setFormState] = useState({
		email: "",
		password: "",
	})

	const signInInput = useRef(null)

	const handleChange = (e) => {
		setFormState({ ...formState, [e.target.name]: e.target.value })
	}

	useEffect(() => {
		const signInTimerId = setTimeout(() => {
			signInInput.current.focus()
		}, focusTimer)

		return () => {
			clearTimeout(signInTimerId)
		}
	}, [focusTimer])

	const handleSubmit = (e) => {
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
					defaultValue={email}
					placeholder="email..."
					onChange={handleChange}
					autoComplete="email"
				/>
				<input
					type="password"
					name="password"
					className="form-field animation a3"
					defaultValue={password}
					placeholder="********"
					onChange={handleChange}
				/>
				{mainSignIn ? (
					<p className="animation a4">
						don't have an account? <Link to="/pub/register">sign up</Link>
					</p>
				) : (
					<></>
				)}
				<button className="form-field animation a5" type="submit">
					login
				</button>
			</form>
		</section>
	)
}

export default SignInForm
