import { React, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../img/kof_logo.png'
import cartLogo from '../img/cart.png'

import { UserContext } from './KofContext';

function Header() {
  const navigate = useNavigate()
  const { user, setUser } = useContext(UserContext);

  return (
    <header className='header'>
      <div className='kyky'>
        <p>
          {user ? <>Welcome back, <b>{user.userName}</b>!</> : 'You are not logged in :('}
        </p>
        <p>|</p>
        <a href='/' onClick={logOut}><i>{user ? 'Log out' : 'Log in'}</i></a>
      </div>
      <img src={logo} className='kof-logo' onClick={() => { navigate('/') }} alt='Main' />
      <img src={cartLogo} className='cart-logo' alt='Main' />
    </header>
  );

  function logOut(e) {
    e.preventDefault();
    setUser(null);
    navigate('/register');
  }
}

export default Header