import React from 'react';
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import './Header.css'

const Header = () => {
  return(
    <div className='header pa3' >
      <Logo />
      <h1>SKEDGE</h1>
      <Navigation />
    </div>
  )
}

export default Header;
