import SignInContainer from "./SignInContainer"
import "./SignIn.css"

const MainSignIn = () => {
	return (
		<main className="sign-in">
			<SignInContainer
				message={"welcome back..."}
				mainSignIn={true}
				focusTimer={2600}
			/>
			<section className="right"></section>
		</main>
	)
}

export default MainSignIn
