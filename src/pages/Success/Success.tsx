import { AuthContainer } from "../../components/AuthContainer"
import styles from "./Success.module.scss"

// the success page after registering
const Success = () => {
	return (
		<div className={styles.success}>
			<AuthContainer
				message={"success... "}
				mainSignIn={false}
				focusTimer={0}
			/>
		</div>
	)
}

export default Success
