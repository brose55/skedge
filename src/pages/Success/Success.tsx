import SignInContainer from "../SignIn/SignInContainer"
import styles from "./Success.module.scss"

// the success page after registering
const Success = () => {
	return (
		<div className={styles.success}>
			<SignInContainer
				message={"success... "}
				mainSignIn={false}
				focusTimer={0}
			/>
		</div>
	)
}

export default Success
