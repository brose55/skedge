import React from 'react'
import Header from './components/Header/Header';
import MainRoutes from './MainRoutes';
import Footer from './components/Footer/Footer';
import './Main.css';

const Main = (props) => {
  return (
    <div className='main'>
      <Header className='one' isSignedIn={props.isSignedIn} setTheme={props.setTheme} theme={props.theme} />
      <main className="two">
        <MainRoutes isSignedIn={props.isSignedIn} setSignIn={props.setSignIn} />
      </main>
      <Footer className='three' />
    </div>
  )
}
 
export default Main
 