import React from 'react';
import airBnbLogo from '../../public/images/airbnb-logo.png';
const Navbar = () => {
  return (
    <div className='nav'>
      <img src={airBnbLogo} className='nav--logo'></img>
    </div>
  );
};

export default Navbar;
