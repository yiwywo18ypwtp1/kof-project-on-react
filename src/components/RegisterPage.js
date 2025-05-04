import { React, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from './Header';

import { UserContext } from './KofContext';

import styles from '../css/sign_style.module.css';


function RegisterPage() {
  const navigate = useNavigate()

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  // class User {
  //   constructor(name, password) {
  //     this.userName = name
  //     this.userPassword = password
  //   }
  // }
  // const { user, setUser } = useContext(UserContext);

  function handleRegister(e) {
    e.preventDefault(); // чтобы не перезагружалась страница

    if (username && password) {
      fetch('http://localhost:8000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          email: username + "@example.com", // временно, если email нет на форме
          password: password
        })
      })
        .then(res => {
          if (!res.ok) {
            return res.json().then(data => { throw new Error(data.detail) });
          }
          return res.json();
        })
        .then(data => {
          alert(data.message); // или перенаправляй пользователя
          setUsername('');
          setPassword('');
          navigate('/');
        })
        .catch(err => {
          alert('Error: ' + err.message);
        });
    }
    else {
      alert('Please, fill all fields!');
    }
  }

  return (
    <>
      <Header />

      <div className={styles.mainContainer}>
        <div className={styles.form}>
          <form action="" method="">
            <label for="">Username</label>
            <input
              className={styles.input}
              type="text"
              required="true"
              placeholder="kill$rPro_1337"

              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label for="">Email</label>
            <input
              className={styles.input}
              type="email"
              required="true"
              placeholder="example@gmail.com"

              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label for="">Password</label>
            <input
              className={styles.input}
              type="password"
              required="true"
              placeholder="qwerty123"

              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className={styles.regButton} onClick={handleRegister}>Register!</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterPage