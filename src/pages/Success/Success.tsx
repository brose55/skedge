import SignInContainer from "../SignIn/SignInContainer"
import "./Success.css"

// the success page after registering
const Success = () => {
	return (
		<div id="success">
			<SignInContainer message={"success... "} mainSignIn={false} />
		</div>
	)
}

export default Success
