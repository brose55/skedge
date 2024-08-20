import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import "./Register.css"
import displayError from "../../utils/displayError"

function Register() {
	const [formState, setFormState] = useState({
		username: "",
		email: "",
		password: "",
		passwordConfirmation: "",
	})

	const [registerError, setRegisterError] = useState(null)

	const registerInput = useRef(null)

	useEffect(() => {
		// have cursor start in username on render
		registerInput.current.focus()
	}, [])

	const handleChange = (e) => {
		setFormState({ ...formState, [e.target.name]: e.target.value })
	}

	let navigate = useNavigate()

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			await axios.post(`${process.env.REACT_APP_DEV_URL}/api/users`, formState)
			navigate("../success", { replace: true })
		} catch (err) {
			setRegisterError(err)
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
