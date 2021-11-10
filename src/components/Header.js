import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogelAuth';

const Header = () => {
  return (
    <div>
      <nav
        className='navbar navbar-expand-sm navbar-light'
        style={{ background: '#dddddd' }}
      >
        <Link to='/' className='navbar-brand '>
          Twitch
        </Link>
        <button
          className='navbar-toggler'
          data-toggle='collapse'
          data-target='#mynav'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='mynav'>
          <ol className='navbar-nav ml-5 ml-sm-auto'>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>
                Steamy
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>
                All Streams
              </Link>
            </li>
          </ol>
          <GoogleAuth />
        </div>
      </nav>
    </div>
  );
};

export default Header;
