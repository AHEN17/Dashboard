import React from 'react';
import { useLocation } from 'react-router-dom';
import './navbar.scss';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className='navbar navbar-expand-lg navbar-light navbar-custom'>
      <p className='mr-auto ml-4'>{location.pathname.split('/')[1]}</p>
    </nav>
  );
};

export default Navbar;
