import React from 'react'
import './Home.css'

const Home = (props) => {
  const handleClick = () => {
    if (props.isSignedIn === "user") {
      props.setSignIn("me")
    } else {
      props.setSignIn("user")
    }
  }

  return (
    <div>
    <p>This is the home {props.isSignedIn} </p>
    <button onClick={handleClick}>Click</button>
    </div>
  )
}
 
export default Home
 