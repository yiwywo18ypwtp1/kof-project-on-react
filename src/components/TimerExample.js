import axios, { AxiosError } from 'axios';
import React, { useState, useEffect } from 'react';

function TimerExample() {
  const [seconds, setSeconds] = useState(0);
  const [user, setUser] = useState('')

  axios.defaults.withCredentials = true;

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log('Таймер очищен');
    };
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8000/user")
      .then(data => {
        console.log(data.data.username)
        setUser(data.data)
      })
      .catch(err => {
        console.error("Axios error:", err)
        setUser(null)
      })
  }, [])

  return (
    <div>
      <h2>Прошло секунд: {seconds}</h2>
      <h3>User: {user ? user.userName : 'guest'}</h3>
    </div>
  );
}

export default TimerExample;