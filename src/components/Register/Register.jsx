import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  
  let navigate = useNavigate();

  // async function handleSubmit(event) {
  //   event.preventDefault();
  //   await console.log(event.target);
  //   navigate("../success", { replace: true });
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    props.setSignIn(props.isSignedIn ? false : true)
    console.log("Form Submitted", formState);
    navigate("../success", { replace: true })
  };

  const { username, email, password } = formState;
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Register {props.isSignedIn}</h2>
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
