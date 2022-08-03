import React, { useState, useEffect } from 'react';

import { Button } from './button';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Le Bon Emploi
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Acceuil
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Espace Candidat'
                className='nav-links'
                onClick={closeMobileMenu}
              >
               Espace Candidat
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Espace Entreprise'
                className='nav-links'
                onClick={closeMobileMenu}
              >
               Espace Entreprise
              </Link>
            </li>

            <li>
              <Link
                to='/Se Connecter'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Se Connecter
              </Link>
            </li>
            
          </ul>
          {button && <Button buttonStyle='btn--outline'>Se Connecter</Button>}
          
        </div>
      </nav>
    </>
  );
}

export default Navbar;