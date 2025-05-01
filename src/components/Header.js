import { React } from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../img/kof_logo.png'
import cartLogo from '../img/cart.png'


function Header() {
  const navigate = useNavigate()

  return (
    <header className='header'>
      <div className='kyky'>
        <p>Hi, Sasha!</p>
        <p>|</p>
        <a className='log' href='/'><i>Log out</i></a>
      </div>
      <img src={logo} className='kof-logo' onClick={() => { navigate('/') }} alt='Main' />
      <img src={cartLogo} className='cart-logo' alt='Main' />
    </header>
  );
}

export default Header