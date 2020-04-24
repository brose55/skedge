import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => (
  <nav>
    <Link to='/' className='f3 link dim underline pointer'>Home</Link>
    <Link to='/daily' className='f3 link dim underline pointer'>Daily</Link>
  </nav>
)


export default Navigation;
