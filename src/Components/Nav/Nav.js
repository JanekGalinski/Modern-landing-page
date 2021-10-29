import React from 'react';
import './Nav.css';

function Nav() {
  
  return (
    <nav>
        <div className='container '>
            <div className='container-nav'>
                <div className='nav-logo'>
                    <h1>logo</h1>
                </div>
                <div className='nav-icons'>
                    <h2 className='nav-icon'>ICO</h2>
                    <h2 className='nav-icon'>Team</h2>
                    <h2 className='nav-icon'>Contact</h2>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Nav;
