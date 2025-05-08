import { useEffect, useState, createContext } from 'react';
import axios from 'axios';


export const OrderContext = createContext(null);
export const UserContext = createContext();

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.defaults.withCredentials = true;

    axios.get("http://localhost:8000/user", { withCredentials: true })
      .then(res => {
        setUser(res.data)
        console.log(res.data)
      })
      .catch(err => {
        setUser(null)
        console.error("Axios error:", err)
      });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
