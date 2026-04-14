import { AuthContainer } from "../../components/AuthContainer"
import styles from "./SignIn.module.scss"

// the main login component
const SignIn = () => {
	return (
		<section className={styles.signIn}>
			{/* using a container here so we can use the signIn component elsewhere */}
			<AuthContainer
				message={"welcome back..."}
				mainSignIn={true}
				focusTimer={2600}
			/>
			{/* the image to the right of the login */}
			<section className={styles.right}></section>
		</section>
	)
}

export default SignIn
