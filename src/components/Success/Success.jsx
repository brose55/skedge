import SignInContainer from "../SignIn/SignInContainer"
import "./Success.css"

const Success = () => {
	return (
		<div id="success">
			<SignInContainer message={"success... "} mainSignIn={false} />
		</div>
	)
}

export default Success
