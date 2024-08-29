import { useState, useRef, useEffect, ChangeEvent, FormEvent } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import displayError from "../../utils/displayError"
import styles from "./Register.module.scss"

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
		<section className={styles.register}>
			<section className={styles.left}></section>
			<section className={styles.right}>
				<header>
					<h4>sign up...</h4>
					<p>{registerError ? displayError(registerError) : null}</p>
				</header>
				<form className={styles.registerForm} onSubmit={handleSubmit}>
					<input
						name="username"
						className={styles.formField}
						ref={registerInput}
						value={username}
						placeholder="username..."
						onChange={handleChange}
					/>
					<input
						type="email"
						name="email"
						className={styles.formField}
						value={email}
						placeholder="email..."
						onChange={handleChange}
					/>
					<input
						type="password"
						name="password"
						className={styles.formField}
						value={password}
						placeholder="password..."
						onChange={handleChange}
					/>
					<input
						type="password"
						name="passwordConfirmation"
						className={styles.formField}
						value={passwordConfirmation}
						placeholder="password confirmation..."
						onChange={handleChange}
					/>
					<button className={styles.formField} type="submit">
						sign up
					</button>
				</form>
			</section>
		</section>
	)
}

export default Register
