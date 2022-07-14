import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import "./SignIn.css";

function SignIn(props) {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

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
    props.setSignIn(props.isSignedIn ? false : true)
    console.log("Form Submitted", formState);
    navigate("../daily", { replace: true })
  };

  const { email, password } = formState;
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Sign In</h2>
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
