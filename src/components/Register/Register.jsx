import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../../contexts/AuthContext";
import "./Register.css";

function Register() {

  const { setSignedIn } = useContext(AuthContext)
  
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: ""
  });

  const [registerError, setRegisterError] = useState(null)
  
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  
  let navigate = useNavigate();

  // async function handleSubmit(event) {
  //   event.preventDefault();
  //   await console.log(event.target);
  //   navigate("../success", { replace: true });
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_DEV_URL}/api/users`, formState)
      // setSignedIn(true)
      navigate("../success", { replace: true })
    } catch (err) {
      setRegisterError(err.message)
    }
  };

  const { username, email, password, passwordConfirmation } = formState;
  return (
		<main style={{ padding: "1rem 0" }}>
			<h2>Register</h2>
      <p>{registerError}</p>
			<form id="sign-in-form" onSubmit={handleSubmit}>
				<div>
					<label htmlFor="username">username:</label>
					<input
						name="username"
						defaultValue={username}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="email">email:</label>
					<input
						type="email"
						name="email"
						defaultValue={email}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="password">password:</label>
					<input
						type="password"
						name="password"
						defaultValue={password}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor="passwordConfirmation">password confirmation:</label>
					<input
						type="password"
						name="passwordConfirmation"
						defaultValue={passwordConfirmation}
						onChange={handleChange}
					/>
				</div>
				<button type="submit">Submit</button>
			</form>
		</main>
	);
}

export default Register;
