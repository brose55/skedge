import React, { useState } from "react";
import "./Register.css";

function Register() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formState);
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

export default Register;
