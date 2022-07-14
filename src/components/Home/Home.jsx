import React from 'react'
import './Home.css'

const Home = (props) => {
  const handleClick = () => {
    props.setSignIn(props.isSignedIn ? false : true)
  }

  return (
    <div>
    <p>This is the home {props.isSignedIn ? 'user' : 'guest'} </p>
    <button onClick={handleClick}>Click</button>
    </div>
  )
}
 
export default Home
 