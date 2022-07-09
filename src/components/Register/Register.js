import React, { useState } from "react";
import "./Register.css";

function Register(props) {

  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setSignIn(props.isSignedIn ? false : true)
    console.log("Form Submitted", formState);
  };

  const { username, email, password } = formState;
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Sign In {props.isSignedIn}</h2>
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
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default Register;
