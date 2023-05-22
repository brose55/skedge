import axios from "axios";
import { useContext, useState, useRef, useEffect } from "react";
import { useNavigate, Link } from 'react-router-dom'
import AuthContext from "../../contexts/AuthContext";
import displayError from "../../utils/displayError";
import "./SignIn.css";

function SignIn(props) {
  const { setSignedIn } = useContext(AuthContext);

  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  
  const [loginError, setLoginError] = useState(null)
  
  const navigate = useNavigate()
  
  const signInInput = useRef(null)

  const getSession = async () => {
		try {
			const session = await axios.get(
				`${process.env.REACT_APP_DEV_URL}/api/sessions`,
				{ withCredentials: true }
			);
      console.log("session data: " + JSON.stringify(session.data));
      // TODO: Change this
			if (session.data.length > 0) {
        setSignedIn(true)    
			}
		} catch (err) {
      console.error(err)
    }
	}
  
  useEffect(() => {
    getSession()
    
    let signInTimerId = setTimeout(() => {
      console.log('focus');
      signInInput.current.focus()
    }, 2500);

    return () => {
      clearTimeout(signInTimerId) 
    }

  }, []);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_DEV_URL}/api/sessions`, formState, {withCredentials: true})
      setSignedIn(true)
      navigate("../../", { replace: true })
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
          <p>{loginError ? displayError(loginError) : null}</p>
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
            placeholder='********'
            onChange={handleChange}
            />
          <p className="animation a4">don't have an account? <Link to='/pub/register'>sign up</Link></p>
        <button className="form-field animation a5" type="submit">login</button>
        </form>
    </section>
    <section className="right"></section>
    </main>
  );
}

export default SignIn;
