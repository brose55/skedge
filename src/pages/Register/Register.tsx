import { useState, useRef, useEffect, ChangeEvent, FormEvent } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import "./Register.css"
import displayError from "../../utils/displayError"

interface FormState {
	username: string
	email: string
	password: string
	passwordConfirmation: string
}

function Register() {
	const [formState, setFormState] = useState<FormState>({
		username: "",
		email: "",
		password: "",
		passwordConfirmation: "",
	})

	const [registerError, setRegisterError] = useState<string | null>(null)

	const registerInput = useRef<HTMLInputElement>(null)

	useEffect(() => {
		// have cursor start in username on render
		if (registerInput.current) {
			registerInput.current.focus()
		}
	}, [])

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormState({ ...formState, [e.target.name]: e.target.value })
	}

	let navigate = useNavigate()

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()
		try {
			await axios.post(`${import.meta.env.VITE_DEV_URL}/api/users`, formState)
			navigate("../success", { replace: true })
		} catch (err: any) {
			setRegisterError(err.message)
		}
	}

	const { username, email, password, passwordConfirmation } = formState
	return (
		// TODO: DRY CSS
		<main className="register">
			<section className="left"></section>
			<section className="right">
				<header>
					<h4>sign up...</h4>
					<p>{registerError ? displayError(registerError) : null}</p>
				</header>
				<form id="register-form" onSubmit={handleSubmit}>
					<input
						name="username"
						className="form-field"
						ref={registerInput}
						value={username}
						placeholder="username..."
						onChange={handleChange}
					/>
					<input
						type="email"
						name="email"
						className="form-field"
						value={email}
						placeholder="email..."
						onChange={handleChange}
					/>
					<input
						type="password"
						name="password"
						className="form-field"
						value={password}
						placeholder="password..."
						onChange={handleChange}
					/>
					<input
						type="password"
						name="passwordConfirmation"
						className="form-field"
						value={passwordConfirmation}
						placeholder="password confirmation..."
						onChange={handleChange}
					/>
					<button type="submit">sign up</button>
				</form>
			</section>
		</main>
	)
}

export default Register
