import { React, useContext } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '../img/kof_logo.png'
import cartLogo from '../img/cart.png'

import { UserContext } from './KofContext';

function Header() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  // function logOut(e) {
  //   e.preventDefault();
  //   setUser(null);
  //   navigate('/register');
  // }

  function logOut(e) {
    e.preventDefault();
    setUser(null);

    axios.post("http://localhost:8000/logout", {}, {
      withCredentials: true,
    });
  }

  function logIn(e) {
    e.preventDefault();
    navigate('/register')
  }


  return (
    <header className='header'>
      <div className='kyky'>
        <p>
          {user ? <>Welcome back, <b>{user.userName}</b>!</> : <>You are not logged in</>}
        </p>
        <p>|</p>
        {user ?
          <>
            <a href='/' onClick={logOut}>
              <i>Log out</i>
            </a>
          </> :
          <>
            <a href='/' onClick={logIn}>
              <i>Log in</i>
            </a>
          </>
        }

      </div>
      <img src={logo} className='kof-logo' onClick={() => navigate('/')} alt='Main' />
      <img src={cartLogo} className='cart-logo' alt='Main' />
    </header >
  );
}

export default Header;