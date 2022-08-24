import React from 'react'
import Header from './components/Header/Header';
import MainRoutes from './MainRoutes';
import Footer from './components/Footer/Footer';
import './Main.css';

const Main = (props) => {
  return (
    <div className='main'>
      <Header className='one' setTheme={props.setTheme} theme={props.theme} />
      <main className="two">
        <MainRoutes />
      </main>
      <Footer className='three' theme={props.theme} />
    </div>
  )
}
 
export default Main
 