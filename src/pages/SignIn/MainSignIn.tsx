import SignInContainer from "./SignInContainer"
import "./SignIn.css"

// the main login component
const MainSignIn = () => {
	return (
		<main className="sign-in">
			{/* using a container here so we can use the signIn component elsewhere */}
			<SignInContainer
				message={"welcome back..."}
				mainSignIn={true}
				focusTimer={2600}
			/>
			{/* the image to the right of the login */}
			<section className="right"></section>
		</main>
	)
}

export default MainSignIn
