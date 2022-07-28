import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom'
import AuthContext from "../../contexts/AuthContext";
import "./SignIn.css";

function SignIn(props) {
  const { setSignedIn } = useContext(AuthContext);

  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const [loginError, setLoginError] = useState(null)

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log('Form Submitted', formState);
  // };

  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_DEV_URL}/api/sessions`, formState, {withCredentials: true})
      setSignedIn(true)
      navigate("../../daily", { replace: true })
    } catch (err) {
      setLoginError(err)
    }
  };

  const { email, password } = formState;
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Sign In</h2>
      <p>{loginError}</p>
      <form id="sign-in-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            defaultValue={password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default SignIn;
