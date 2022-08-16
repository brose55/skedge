import axios from "axios";
import { useContext, useState, useRef, useEffect } from "react";
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

  const signInInput = useRef(null)

  	useEffect(() => {
			// focus on rendering
			signInInput.current.focus();
		}, []);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

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
    <main className="sign-in">
      <section className="left">
        <header>
          <h2 className="animation a1">welcome back...</h2>
          <p>{loginError}</p>
        </header>
        <form id="sign-in-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            className="form-field animation a2"
            ref={signInInput}
            defaultValue={email}
            placeholder='email...'
            onChange={handleChange}
            />
          <input
            type="password"
            name="password"
            className="form-field animation a3"
            defaultValue={password}
            placeholder='password...'
            onChange={handleChange}
            />
        <button className="form-field animation a4" type="submit">Submit</button>
        </form>
    </section>
    <section className="right"></section>
    </main>
  );
}

export default SignIn;
