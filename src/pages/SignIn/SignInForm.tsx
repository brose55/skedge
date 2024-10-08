import { useState, useRef, useEffect, ChangeEvent, FormEvent } from "react"
import { Link } from "react-router-dom"
import displayError from "../../utils/displayError"
import { AxiosError } from "axios"
import { SignInFormData } from "../../types/interfaces"
import styles from "./SignIn.module.scss"

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
		<section className={styles.left}>
			<header>
				<h2 className={`${styles.animation} ${styles.a1}`}>{message}</h2>
				<h2 className={`${styles.animation} ${styles.a1}`}>
					please sign in...
				</h2>
				<p>{loginError ? displayError(loginError) : null}</p>
			</header>
			<form className={styles.signInForm} onSubmit={handleSubmit}>
				<input
					type="email"
					name="email"
					className={`${styles.formField} ${styles.animation} ${styles.a2}`}
					ref={signInInput}
					value={email}
					placeholder="email..."
					onChange={handleChange}
					autoComplete="email"
				/>
				<input
					type="password"
					name="password"
					className={`${styles.formField} ${styles.animation} ${styles.a3}`}
					value={password}
					placeholder="********"
					onChange={handleChange}
				/>
				{mainSignIn ? (
					<p className={`${styles.animation} ${styles.a4}`}>
						don't have an account? <Link to="/pub/register">sign up</Link>
					</p>
				) : null}
				<button
					className={`${styles.formField} ${styles.animation} ${styles.a5}`}
					type="submit"
				>
					login
				</button>
			</form>
		</section>
	)
}

export default SignInForm
