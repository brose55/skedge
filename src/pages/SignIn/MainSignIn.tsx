import SignInContainer from "./SignInContainer"
import styles from "./SignIn.module.scss"

// the main login component
const MainSignIn = () => {
	return (
		<main className={styles.signIn}>
			{/* using a container here so we can use the signIn component elsewhere */}
			<SignInContainer
				message={"welcome back..."}
				mainSignIn={true}
				focusTimer={2600}
			/>
			{/* the image to the right of the login */}
			<section className={styles.right}></section>
		</main>
	)
}

export default MainSignIn
