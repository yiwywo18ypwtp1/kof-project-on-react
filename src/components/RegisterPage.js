import { React, useState, useContext } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import { UserContext } from './KofContext';

import styles from '../css/sign_style.module.css';


function RegisterPage() {
  const navigate = useNavigate()
  const { setUser } = useContext(UserContext); // используем setUser из контекста

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  function handleRegister(e) {
    e.preventDefault(); // чтобы не перезагружалась страница

    if (username && password && email) {
      // Используем axios для запроса регистрации
      axios.post('http://localhost:8000/register', {
        username: username,
        email: email,
        password: password
      }, { withCredentials: true })
        .then(res => {
          alert(res.data.message);

          // После регистрации делаем запрос к /user с axios
          // axios.get('http://localhost:8000/user', { withCredentials: true })
          //   .then(userData => {
          //     setUser(userData.data);  // Обновляем user в контексте
          //     // navigate('/');
          //   })
          //   .catch(err => {
          //     console.error("Error fetching user:", err);
          //     alert("Error fetching user data");
          //   });

          setUsername('');
          setPassword('');
          navigate('/test');
        })
        .catch(err => {
          console.error("Axios error:", err);
          alert('Error: ' + err.response?.data?.detail || err.message);
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
            <label>Username</label>
            <input
              className={styles.input}
              type="text"
              required={true}
              placeholder="kill$rPro_1337"

              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label>Email</label>
            <input
              className={styles.input}
              type="email"
              required={true}
              placeholder="example@gmail.com"

              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Password</label>
            <input
              className={styles.input}
              type="password"
              required={true}
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