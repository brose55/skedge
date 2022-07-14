import React from 'react';
import { Routes, Route } from 'react-router-dom'
import InnerContent from './InnerContent';
import Home from './components/Home/Home';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Daily from './components/Daily/Daily';
import Success from './components/Success/Success';

const MainRoutes = (props) => {
  return (
    <Routes>
      <Route path="/" element={<InnerContent />}>
        <Route index element={<Home isSignedIn={props.isSignedIn} setSignIn={props.setSignIn} />} />
        <Route path="signin" element={<SignIn isSignedIn={props.isSignedIn} setSignIn={props.setSignIn} />} />
        <Route path="register" element={<Register isSignedIn={props.isSignedIn} setSignIn={props.setSignIn} />} />
        <Route path="daily" element={<Daily />} />
        <Route path="success" element={<Success />}></Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  )
}
 
export default MainRoutes;
 